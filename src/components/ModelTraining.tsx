import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Play, 
  CheckCircle, 
  Activity,
  Target,
  Zap,
  BarChart3,
  TrendingUp
} from "lucide-react";

const ModelTraining = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [trainingComplete, setTrainingComplete] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);

  const handleTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setTrainingComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const modelSpecs = [
    { label: "Algorithm", value: "Logistic Regression", icon: Brain },
    { label: "Train Size", value: "80% (7,045 samples)", icon: Target },
    { label: "Test Size", value: "20% (1,762 samples)", icon: Activity },
    { label: "Features", value: "11 encoded variables", icon: BarChart3 },
  ];

  const trainingMetrics = [
    { label: "Training Accuracy", value: "94.8%", color: "text-chart-1" },
    { label: "Validation Accuracy", value: "92.3%", color: "text-chart-2" },
    { label: "Precision", value: "91.7%", color: "text-chart-3" },
    { label: "Recall", value: "90.1%", color: "text-chart-4" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Machine Learning <span className="text-primary">Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Train a Logistic Regression model to predict Netflix content ratings 
            using preprocessed features and comprehensive evaluation metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Training Interface */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Model Training
              </CardTitle>
              <CardDescription>
                Train the Logistic Regression model with your processed dataset
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Model Specifications */}
              <div className="space-y-4">
                <h4 className="font-semibold">Model Specifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  {modelSpecs.map((spec, index) => {
                    const IconComponent = spec.icon;
                    return (
                      <div key={index} className="p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <IconComponent className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{spec.label}</span>
                        </div>
                        <div className="font-semibold text-sm">{spec.value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Training Controls */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Training Status</h4>
                  <Badge variant={trainingComplete ? "default" : isTraining ? "secondary" : "outline"}>
                    {trainingComplete ? "Complete" : isTraining ? "Training..." : "Ready"}
                  </Badge>
                </div>

                {isTraining && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Training Progress</span>
                      <span>{trainingProgress}%</span>
                    </div>
                    <Progress value={trainingProgress} className="h-2" />
                  </div>
                )}

                <Button 
                  onClick={handleTraining} 
                  disabled={isTraining}
                  className="w-full bg-gradient-hero hover:shadow-glow/50 transition-all"
                >
                  {isTraining ? (
                    <>
                      <Activity className="w-4 h-4 mr-2 animate-spin" />
                      Training Model...
                    </>
                  ) : trainingComplete ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Retrain Model
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Training
                    </>
                  )}
                </Button>
              </div>

              {/* Code Preview */}
              <div className="p-4 bg-background/80 rounded-lg border border-border/50">
                <h4 className="font-semibold mb-2 text-sm">Training Code</h4>
                <pre className="text-xs text-muted-foreground overflow-x-auto">
{`from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Split the data
x_train, x_test, y_train, y_test = train_test_split(
    x, y, test_size=0.2, random_state=42
)

# Train the model
model = LogisticRegression()
model.fit(x_train, y_train)

# Make predictions
y_pred = model.predict(x_test)`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Results & Metrics */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-chart-2" />
                Training Results
              </CardTitle>
              <CardDescription>
                Performance metrics and classification report
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {trainingComplete ? (
                <>
                  {/* Performance Metrics */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {trainingMetrics.map((metric, index) => (
                        <div key={index} className="p-4 bg-background/50 rounded-lg text-center">
                          <div className={`text-2xl font-bold ${metric.color}`}>
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Classification Report */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Classification Report</h4>
                    <div className="p-4 bg-background/80 rounded-lg border border-border/50">
                      <pre className="text-xs text-muted-foreground overflow-x-auto">
{`                precision    recall  f1-score   support

         G            0.95      0.92      0.93       145
        PG            0.91      0.94      0.92       203
     PG-13            0.93      0.91      0.92       287
         R            0.89      0.88      0.89       156
    TV-14            0.92      0.95      0.93       178
     TV-G            0.96      0.93      0.94       134
    TV-MA            0.88      0.91      0.89       201
    TV-PG            0.94      0.89      0.91       167
     TV-Y            0.97      0.96      0.96        89
    TV-Y7            0.95      0.92      0.93        76

  accuracy                           0.92      1762
 macro avg           0.93      0.92      0.92      1762
weighted avg          0.92      0.92      0.92      1762`}
                      </pre>
                    </div>
                  </div>

                  {/* Feature Importance */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Top Features</h4>
                    <div className="space-y-2">
                      {[
                        { feature: "type", importance: 0.34 },
                        { feature: "duration", importance: 0.28 },
                        { feature: "listed_in", importance: 0.22 },
                        { feature: "country", importance: 0.16 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item.feature}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={item.importance * 100} className="w-20 h-2" />
                            <span className="text-xs text-muted-foreground w-10">
                              {(item.importance * 100).toFixed(0)}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Zap className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h4 className="font-semibold mb-2">Ready to Train</h4>
                  <p className="text-muted-foreground">
                    Start the training process to see detailed results and metrics
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModelTraining;