import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Users } from "lucide-react";
import logo from "@/assets/Vesper_Eye_Logo.png";

interface Subscriber {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

const Admin = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuthAndLoadData();
  }, []);

  const checkAuthAndLoadData = async () => {
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (roleError || !roleData) {
        toast({
          title: "Access denied",
          description: "You need admin privileges to access this page.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      await loadSubscribers();
    } catch (error) {
      console.error("Error checking auth:", error);
      navigate("/auth");
    }
  };

  const loadSubscribers = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setSubscribers(data || []);
    } catch (error) {
      toast({
        title: "Error loading subscribers",
        description: "Failed to load newsletter subscribers.",
        variant: "destructive",
      });
      console.error("Error loading subscribers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Geiger's Home & Garden" 
                className="h-10 cursor-pointer"
                onClick={() => navigate("/")}
              />
              <h1 className="text-xl font-semibold text-primary">Admin Dashboard</h1>
            </div>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <Card className="border-border shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="w-6 h-6 text-accent" />
              Newsletter Subscribers
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8 text-muted-foreground">
                Loading subscribers...
              </div>
            ) : subscribers.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No subscribers yet.
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subscribed At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers.map((subscriber) => (
                      <TableRow key={subscriber.id}>
                        <TableCell className="font-medium">{subscriber.name}</TableCell>
                        <TableCell>{subscriber.email}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {formatDate(subscriber.created_at)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
            <div className="mt-4 text-sm text-muted-foreground">
              Total subscribers: {subscribers.length}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
