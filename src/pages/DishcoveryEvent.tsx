
import { Calendar, Users, MapPin, Clock, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DishcoveryEvent = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary font-unbounded">COMMUNEÈ</h1>
              <p className="text-sm text-gray-600 font-montserrat">Building meaningful connections</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-montserrat" onClick={() => window.location.href = 'https://app.youform.com/forms/efsue2vl'}>
              Book Your Seat
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium font-montserrat mb-4">
              Upcoming Event
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 font-unbounded">
            Dishcoveřy 🍽️
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto font-montserrat leading-relaxed">
            Meet like-minded strangers and discover new friendships over shared meals. 
            Your best friend might be just one dinner away.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600 font-montserrat">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Every Weekend</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>6-8 People</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Ahmedabad</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>2-3 Hours</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-semibold font-montserrat"
            onClick={() => window.location.href = 'https://app.youform.com/forms/efsue2vl'}
          >
            Reserve Your Spot Now
          </Button>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-unbounded">What Makes Dishcoveřy Special?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-montserrat">
              We create carefully curated dining experiences that bring together like-minded individuals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-gray-200 border shadow-sm" style={{ backgroundColor: '#FAFAFA' }}>
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-unbounded text-gray-950">Meaningful Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat text-gray-950">
                  Our matching algorithm pairs you with people who share similar interests, values, and life goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 border shadow-sm" style={{ backgroundColor: '#FAFAFA' }}>
              <CardHeader>
                <Star className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-unbounded text-gray-950" >Curated Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat text-gray-950">
                  Hand-picked restaurants and thoughtfully planned activities that encourage natural conversation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 border shadow-sm" style={{ backgroundColor: '#FAFAFA' }}>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-unbounded text-gray-950">Small Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat text-gray-950">
                  Intimate group sizes of 6-8 people ensure everyone gets to know each other properly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-10 right-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-unbounded">How It Works</h2>
            <p className="text-lg text-gray-600 font-montserrat">Simple steps to your next great friendship</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-montserrat">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-unbounded">Fill the Form</h3>
                <p className="text-gray-600 font-montserrat">Tell us about your interests and what you're looking for in new friendships.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-montserrat">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-unbounded">Get Matched</h3>
                <p className="text-gray-600 font-montserrat">We pair you with compatible people for an upcoming dinner experience.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-montserrat">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-unbounded">Meet & Connect</h3>
                <p className="text-gray-600 font-montserrat">Join your group at a selected restaurant and let the magic happen!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-unbounded">
            Ready to Find Your Tribe?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-montserrat">
            Join hundreds of others who have found meaningful friendships through Dishcoveřy
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 px-12 py-4 text-lg font-semibold font-montserrat"
            onClick={() => window.location.href = 'https://app.youform.com/forms/efsue2vl'}
          >
            Book Your Seat Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-100 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-unbounded">COMMUNEÈ</h3>
          <p className="text-gray-600 font-montserrat mb-4">
            Building meaningful connections in your city.
          </p>
          <p className="text-sm text-gray-500 font-montserrat">
            © 2025 COMMUNEÈ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DishcoveryEvent;
