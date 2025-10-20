const processSteps = [
  {
    number: "01",
    title: "Discovery & Visioning",
    description: "Deep listening and collaboration to understand your aspirations, lifestyle, and inspirations. Comprehensive site assessment including local culture, climate, and regulatory requirements."
  },
  {
    number: "02",
    title: "Conceptual Design",
    description: "Our multidisciplinary team develops a unified vision with initial sketches, spatial layouts, mood boards, and 3D renderings illustrating indoor-outdoor connections and material harmony."
  },
  {
    number: "03",
    title: "Design Development",
    description: "Refinement of every detail with architects shaping form and structure, interior designers curating finishes, and landscape architects selecting plantings and outdoor features."
  },
  {
    number: "04",
    title: "Technical Documentation",
    description: "Comprehensive construction documents across architecture, interiors, and landscape with detailed drawings, specifications, and advanced visualization tools."
  },
  {
    number: "05",
    title: "Permitting & Approvals",
    description: "Management of all submissions for building and landscape permits, coordinating with local authorities for compliance with all zoning, safety, and environmental standards."
  },
  {
    number: "06",
    title: "Construction & Implementation",
    description: "Active involvement throughout construction with regular site visits, progress reviews, and coordination to resolve challenges and maintain design intent."
  },
  {
    number: "07",
    title: "Completion & Support",
    description: "Final walkthroughs and quality checks across all disciplines, with continued support after move-in to ensure the space exceeds all expectations."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Integrated Design Process
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Exceptional living environments born from the seamless integration of architecture, interior design, and landscape architecture
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="text-5xl font-bold text-accent opacity-50">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-xl italic opacity-90">
            Our process—refined through decades of experience and inspired by the world's most respected designers—ensures that every residence is thoughtfully crafted from the inside out and the outside in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
