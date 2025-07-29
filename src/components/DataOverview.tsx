import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Users, 
  Globe, 
  Calendar,
  Star,
  Clock,
  Tag,
  Film,
  Tv,
  Info
} from "lucide-react";

const DataOverview = () => {
  const datasetFeatures = [
    { name: "show_id", icon: FileText, type: "Categorical", description: "Unique identifier for each show" },
    { name: "type", icon: Film, type: "Categorical", description: "Movie or TV Show classification" },
    { name: "title", icon: Tv, type: "Categorical", description: "Name of the content" },
    { name: "director", icon: Users, type: "Categorical", description: "Director information" },
    { name: "cast", icon: Users, type: "Categorical", description: "Main cast members" },
    { name: "country", icon: Globe, type: "Categorical", description: "Country of origin" },
    { name: "date_added", icon: Calendar, type: "Categorical", description: "Date added to Netflix" },
    { name: "rating", icon: Star, type: "Target", description: "Content rating (target variable)" },
    { name: "duration", icon: Clock, type: "Categorical", description: "Runtime or number of seasons" },
    { name: "listed_in", icon: Tag, type: "Categorical", description: "Genre categories" },
    { name: "description", icon: Info, type: "Categorical", description: "Content description" }
  ];

  const processingSteps = [
    { step: "Data Loading", description: "Load Netflix.csv dataset", progress: 100 },
    { step: "Label Encoding", description: "Convert categorical features to numerical", progress: 100 },
    { step: "Data Cleaning", description: "Remove null values and inconsistencies", progress: 100 },
    { step: "Feature Selection", description: "Separate features (X) and target (y)", progress: 100 },
    { step: "Scaling", description: "Apply StandardScaler normalization", progress: 85 },
    { step: "Train-Test Split", description: "80/20 split for model validation", progress: 90 }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Dataset <span className="text-primary">Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of Netflix content data with advanced preprocessing 
            and feature engineering for machine learning predictions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dataset Features */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Dataset Features
              </CardTitle>
              <CardDescription>
                11 features extracted and processed from Netflix content data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {datasetFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{feature.name}</span>
                          <Badge variant={feature.type === "Target" ? "default" : "secondary"} className="text-xs">
                            {feature.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Processing Pipeline */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-chart-2" />
                Processing Pipeline
              </CardTitle>
              <CardDescription>
                Step-by-step data preprocessing and model preparation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {processingSteps.map((step, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{step.step}</span>
                      <span className="text-sm text-muted-foreground">{step.progress}%</span>
                    </div>
                    <Progress value={step.progress} className="h-2" />
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-8 p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-3">Processing Summary</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Original Features:</span>
                    <div className="font-semibold">11 categorical</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Encoded Features:</span>
                    <div className="font-semibold">11 numerical</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Data Split:</span>
                    <div className="font-semibold">80% train / 20% test</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Scaling Method:</span>
                    <div className="font-semibold">StandardScaler</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataOverview;