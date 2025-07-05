
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as Dishcovery launches in your city.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-12 backdrop-blur-sm border border-border/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Dishcover</span> Your Tribe?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be among the first to experience meaningful connections over great food. 
            Join our exclusive waitlist and get early access to Dishcovery events in your city.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" className="btn-primary">
              Join Waitlist
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground">
            No spam, just updates on launch dates and exclusive early access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
