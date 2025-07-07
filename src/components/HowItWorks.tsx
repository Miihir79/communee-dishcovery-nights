
import { UserPlus, Calendar, MapPin, Coffee } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12" style={{ color: '#FAFAFA' }} />,
      step: "01",
      title: "Fill the Form",
      description: "Tell us about your interests, dietary preferences, and what you're looking for in new friendships."
    },
    {
      icon: <Calendar className="w-12 h-12" style={{ color: '#FAFAFA' }} />,
      step: "02",
      title: "Get Matched",
      description: "Our algorithm pairs you with 5-7 like-minded individuals for an upcoming dinner based on compatibility and availability."
    },
    {
      icon: <MapPin className="w-12 h-12" style={{ color: '#FAFAFA' }} />,
      step: "03",
      title: "Meet Up",
      description: "Join your group at a carefully selected restaurant where conversation flows naturally and connections happen organically."
    },
    {
      icon: <Coffee className="w-12 h-12" style={{ color: '#FAFAFA' }} />,
      step: "04",
      title: "Stay Connected",
      description: "Keep the conversation going with your new Friends and join future events together!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to New <span className="gradient-text">Friendships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From signup to lasting friendships in just four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
