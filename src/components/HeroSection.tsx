import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircle, Users } from "lucide-react";
import heroImage from "@/assets/hero-language-exchange.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-glow animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-secondary animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-accent animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Connect.
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Learn.
                </span>
                <br />
                Exchange.
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl">
                Join millions of language learners worldwide. Practice with native speakers, 
                make friends, and master new languages through real conversations.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="w-6 h-6" />
                <span className="text-lg font-semibold">2M+ Users</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Globe className="w-6 h-6" />
                <span className="text-lg font-semibold">150+ Languages</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">24/7 Practice</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Learning Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline-primary" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>

            {/* Language samples */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-primary-foreground/70">
              <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">👋 Hello</span>
              <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">🇪🇸 Hola</span>
              <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">🇫🇷 Bonjour</span>
              <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">🇨🇳 你好</span>
              <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">🇯🇵 こんにちは</span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Global language exchange community" 
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-card-custom animate-pulse">
              <Globe className="w-10 h-10 text-secondary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-card-custom animate-pulse delay-700">
              <MessageCircle className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;