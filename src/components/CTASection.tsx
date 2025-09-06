import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 rounded-full bg-primary-glow blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 rounded-full bg-accent blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-secondary blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-primary-foreground/80 ml-2">4.9/5 from 50,000+ reviews</span>
          </div>

          {/* Main content */}
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
            Ready to Start Your
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Language Journey?
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Join millions of learners who have already transformed their lives through language exchange. 
            Your next conversation could change everything.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Started Free
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button variant="outline-primary" size="lg" className="text-xl px-12 py-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>

          {/* Benefits list */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
              <span>Start in 2 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;