
export type SkillCategory = 
  | "Arts & Crafts"
  | "Technology"
  | "Music"
  | "Cooking"
  | "Languages"
  | "Sports & Fitness"
  | "Academic"
  | "Business"
  | "Home Improvement"
  | "Personal Development"
  | "Auto Maintenance"
  | "Financial"
  | "Professional Skills";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  location?: string;
  duration?: string;
  rating?: number;
  userAvatar?: string;
  userName?: string;
  matchPercentage?: number;
  distance?: string;
}

export const skillCategories: SkillCategory[] = [
  "Technology", 
  "Arts & Crafts", 
  "Music", 
  "Cooking", 
  "Languages",
  "Sports & Fitness", 
  "Academic", 
  "Business", 
  "Home Improvement", 
  "Personal Development",
  "Auto Maintenance",
  "Financial",
  "Professional Skills"
];

export const availableSkills: Skill[] = [
  {
    id: "1",
    name: "Gardening Basics",
    category: "Home Improvement",
    description: "Learn plant care, composting, and seasonal growing techniques for beginners."
  },
  {
    id: "2",
    name: "Chess Fundamentals",
    category: "Academic",
    description: "Master chess openings, strategies, and endgame techniques for all skill levels."
  },
  {
    id: "3",
    name: "CAD Design Basics",
    category: "Technology",
    description: "Introduction to 2D/3D modeling and common CAD software tools for beginners."
  },
  {
    id: "4",
    name: "Workplace Etiquette",
    category: "Professional Skills",
    description: "Essential industrial behavior and professional workplace etiquette guidelines."
  },
  {
    id: "5",
    name: "IoT Sensors & Electronics",
    category: "Technology",
    description: "Fundamentals of IoT sensors, circuits, and basic electronics for beginners."
  },
  {
    id: "6",
    name: "Home Maintenance",
    category: "Home Improvement",
    description: "Essential repairs and maintenance skills for homeowners and renters."
  },
  {
    id: "7",
    name: "Basic Car Maintenance",
    category: "Auto Maintenance",
    description: "Learn oil changes, tire maintenance, and basic auto troubleshooting."
  },
  {
    id: "8",
    name: "Digital Marketing",
    category: "Business",
    description: "Introduction to SEO, social media, and content marketing strategies."
  },
  {
    id: "9",
    name: "Photography Essentials",
    category: "Arts & Crafts",
    description: "Master composition, lighting, and camera settings for better photos."
  },
  {
    id: "10",
    name: "Cooking Techniques",
    category: "Cooking",
    description: "Learn fundamental cutting, cooking, and flavor-pairing techniques."
  },
  {
    id: "11",
    name: "Financial Literacy",
    category: "Financial",
    description: "Basics of budgeting, saving, investing, and financial planning."
  },
  {
    id: "12",
    name: "Public Speaking",
    category: "Professional Skills",
    description: "Overcome stage fright and develop confident presentation skills."
  },
  {
    id: "13",
    name: "HTML/CSS Basics",
    category: "Technology",
    description: "Create your first web pages with fundamental HTML and CSS."
  },
  {
    id: "14",
    name: "Graphic Design Principles",
    category: "Arts & Crafts",
    description: "Learn color theory, typography, and layout fundamentals for design."
  },
  {
    id: "15",
    name: "Musical Instrument Basics",
    category: "Music",
    description: "Introduction to reading music and playing an instrument of your choice."
  },
  {
    id: "16",
    name: "Language Learning",
    category: "Languages",
    description: "Effective techniques for beginning your journey with a new language."
  },
  {
    id: "17",
    name: "Fitness & Nutrition",
    category: "Sports & Fitness",
    description: "Balanced workout routines and nutrition principles for overall health."
  },
  {
    id: "18",
    name: "Art Techniques",
    category: "Arts & Crafts",
    description: "Fundamentals of drawing and painting for aspiring artists."
  },
  {
    id: "19",
    name: "Creative Writing",
    category: "Academic",
    description: "Develop storytelling skills and creative expression through writing."
  },
  {
    id: "20",
    name: "Time Management",
    category: "Personal Development",
    description: "Productivity techniques and systems to make the most of your time."
  }
];
