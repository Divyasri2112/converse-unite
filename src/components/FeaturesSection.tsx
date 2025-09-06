import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  MessageCircle, 
  Calendar, 
  Award, 
  Shield, 
  Smartphone,
  Clock,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Video & Voice Chat",
    description: "Practice speaking with high-quality video and voice calls. Perfect your pronunciation with native speakers.",
    gradient: "bg-gradient-primary"
  },
  {
    icon: MessageCircle,
    title: "Text Messaging",
    description: "Start with text conversations. Built-in translation and correction tools help you learn as you chat.",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book conversation sessions that fit your schedule. Available 24/7 with speakers from every timezone.",
    gradient: "bg-gradient-accent"
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics, achievements, and personalized feedback.",
    gradient: "bg-gradient-primary"
  },
  {
    icon: Shield,
    title: "Safe Community",
    description: "Verified profiles, community guidelines, and moderation ensure a safe learning environment for everyone.",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Learn on the go with our responsive web app. Practice anywhere, anytime, on any device.",
    gradient: "bg-gradient-accent"
  },
  {
    icon: Clock,
    title: "Instant Matching",
    description: "Find conversation partners in seconds. Our AI matches you based on interests, level, and availability.",
    gradient: "bg-gradient-primary"
  },
  {
    icon: Heart,
    title: "Cultural Exchange",
    description: "Learn not just language but culture. Share traditions, food, music, and stories with global friends.",
    gradient: "bg-gradient-secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Master Languages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform provides all the tools and features you need for effective language exchange. 
            Learn faster, practice more, and connect deeper.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card-custom hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            Join the global conversation today
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;