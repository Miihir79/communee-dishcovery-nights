
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-12 backdrop-blur-sm border border-border/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Dishcoveř</span> Your Tribe?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be among the first to experience meaningful connections over great food. 
            Join our exclusive waitlist and get early access to Dishcoveřy events in your city.
          </p>
          
          <Button className="btn-primary text-lg">
            Join the Waitlist
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            No spam, just updates on launch dates and exclusive early access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
