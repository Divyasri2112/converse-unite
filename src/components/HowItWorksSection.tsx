import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Tell us what languages you speak and want to learn. Add your interests and goals.",
    color: "bg-primary"
  },
  {
    icon: Search,
    title: "Find Your Match",
    description: "Our smart algorithm connects you with native speakers who want to learn your language.",
    color: "bg-secondary"
  },
  {
    icon: MessageSquare,
    title: "Start Practicing",
    description: "Chat via text, voice, or video. Practice real conversations with patient native speakers.",
    color: "bg-accent"
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Monitor your improvement with our progress tracking and earn achievements.",
    color: "bg-gradient-primary"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your language exchange journey in just four simple steps. 
            Join a global community of learners and speakers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-none shadow-card-custom hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative -mt-32 mb-16">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-primary opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-2/4 w-3 h-3 bg-secondary rounded-full transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary rounded-full transform translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;