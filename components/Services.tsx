import { Blocks, Gem } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description: 'Experienced full-stack developer proficient in JavaScript and TypeScript. Capable of crafting dynamic web solutions from front to back end with precision and innovation.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Machine Learning',
    description: 'Skilled in machine learning with expertise in projects such as YOLO, Generative AI, and prediction models. Proficient in developing innovative solutions to complex problems using advanced algorithms and techniques.',
  }
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 xl:pt-14 relative">
      <div className="container mx-auto ">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        <div className="grid xl:grid-cols-2 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">{servicesData.map((item, index) => {
          return (
            <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">{item.icon}</div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">{item.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}</div>
      </div>
    </section>
  );
};

export default Services;
