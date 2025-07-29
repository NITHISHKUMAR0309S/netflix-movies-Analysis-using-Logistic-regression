import Hero from "@/components/Hero";
import DataOverview from "@/components/DataOverview";
import ModelTraining from "@/components/ModelTraining";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <DataOverview />
      <ModelTraining />
    </div>
  );
};

export default Index;
