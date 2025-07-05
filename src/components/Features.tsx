
import { Heart, Utensils, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Curated Dining",
      description: "Handpicked restaurants and unique dining experiences that spark conversation and create memories."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Perfect Groups",
      description: "Carefully matched groups of 6-8 people based on interests, age, and compatibility for meaningful connections."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Icebreaker Magic",
      description: "Fun conversation starters and activities designed to turn strangers into friends effortlessly."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Real Connections",
      description: "Beyond small talk - create genuine friendships with people who share your passions and values."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">Dishcoveřy</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've reimagined how young adults connect, making it easier than ever to find your tribe through shared meals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
