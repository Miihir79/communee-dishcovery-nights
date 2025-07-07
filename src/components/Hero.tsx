
import { Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Coming Soon
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Dishcoveřy</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
          Meet like-minded strangers and discover new friendships over shared meals. 
          Your best friend might be just one dinner away.
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto">
          Brought to you by <span className="gradient-text font-semibold">COMMUNEÈ</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="btn-primary text-lg" onClick={() => window.location.href = 'https://app.youform.com/forms/efsue2vl'}>
            Book Your Seat
          </Button>
          <Button variant="outline" className="btn-secondary text-lg" onClick={() => window.location.href = 'https://www.instagram.com/communee.in/'}>
            Learn More
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Weekly Events</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>6-8 People</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Ahmedabad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
