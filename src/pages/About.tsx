
import { useEffect } from 'react';
import { Check, Users, Target, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const objectives = [
    "Deploy smart dustbins across major urban centers, achieving a 70% adoption rate within five years.",
    "Reduce landfill waste by 60% in participating cities through efficient segregation and processing.",
    "Generate renewable energy from 80% of collected waste, contributing to the local power grid.",
    "Engage and educate communities, achieving a 90% user satisfaction rate with our services.",
    "Implement sensor-based notification system in smart dustbins to optimize waste collection routes.",
    "Establish direct partnerships with factories to sell segregated waste, ensuring resource recovery.",
    "Minimize human intervention in waste collection by utilizing automated systems."
  ];

  const leadershipTeam = [
    {
      name: "Purbi Chandra",
      role: "Chief Executive Officer",
      bio: "Environmental engineer with expertise in sustainable waste management and urban infrastructure development.",
      avatar: "PC"
    },
    {
      name: "Manohar Sha",
      role: "Chief Technology Officer",
      bio: "IoT specialist with extensive background in sensor technologies, AI integration, and smart city solutions.",
      avatar: "MS"
    },
    {
      name: "Sudhanshu Jha",
      role: "Chief Operations Officer",
      bio: "Logistics expert specializing in route optimization and sustainable operations management.",
      avatar: "SJ"
    },
    {
      name: "Gayatri Palai",
      role: "Chief Marketing Officer",
      bio: "Marketing strategist with focus on community engagement and environmental awareness campaigns.",
      avatar: "GP"
    },
    {
      name: "Subrat Kumar Jena",
      role: "Chief Financial Officer",
      bio: "Financial analyst with expertise in sustainable business models and green investments.",
      avatar: "SJ"
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-green-50 dark:bg-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoWaste Innovations</h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing urban waste management with cutting-edge technology and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl border border-green-100 dark:border-green-800 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-6">
                <Target className="text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To revolutionize urban waste management by integrating cutting-edge technologies, fostering community engagement, and promoting sustainable practices that convert waste into valuable resources.
              </p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl border border-green-100 dark:border-green-800 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-6">
                <Rocket className="text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                To lead the global transition towards smart, efficient, and sustainable waste management systems that contribute to a circular economy and a healthier planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Objectives</h2>
            <p className="text-muted-foreground">
              Through innovation and collaboration, we aim to achieve these core objectives in waste management.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center flex-shrink-0">
                    <Check className="text-green-600 dark:text-green-400" size={14} />
                  </div>
                  <p className="text-muted-foreground">{objective}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the dedicated professionals driving innovation in waste management technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl border border-green-100 dark:border-green-800 shadow-sm text-center hover:shadow-md transition-shadow">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-green-100 dark:border-green-800">
                  <AvatarFallback className="bg-green-600 text-white text-xl font-semibold">{member.avatar}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
