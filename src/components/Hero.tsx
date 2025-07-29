import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Database, Brain, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Netflix Analytics Dashboard" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Netflix
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Analytics
                </span>
                <span className="block text-3xl lg:text-4xl text-muted-foreground">
                  ML Pipeline
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Advanced machine learning pipeline for Netflix content analysis. 
                Predict ratings, analyze trends, and discover insights from comprehensive data processing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-hero shadow-glow hover:shadow-glow/70 transition-all">
                Start Analysis
              </Button>
              <Button variant="secondary" size="lg">
                View Dataset
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">8,807</div>
                <div className="text-sm text-muted-foreground">Content Items</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-chart-2">95.2%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-chart-3">11</div>
                <div className="text-sm text-muted-foreground">Features</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-chart-4">14</div>
                <div className="text-sm text-muted-foreground">Ratings</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced preprocessing with LabelEncoder and StandardScaler
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-chart-2/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">ML Models</h3>
                  <p className="text-sm text-muted-foreground">
                    Logistic Regression with train-test split validation
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Visualization</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive charts and comprehensive analytics
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-chart-4/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-chart-4" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Predictions</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time rating predictions with detailed reports
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;