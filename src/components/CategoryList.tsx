import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GemIcon, HammerIcon, MapIcon, PuzzleIcon, RocketIcon, UsersIcon } from "lucide-react";

const categories = [
  {
    id: "news",
    name: "Новости сервера",
    count: 42,
    icon: <RocketIcon className="w-4 h-4 text-minecraft-grass" />,
  },
  {
    id: "builds",
    name: "Постройки",
    count: 127,
    icon: <HammerIcon className="w-4 h-4 text-minecraft-wood" />,
  },
  {
    id: "plugins",
    name: "Плагины и моды",
    count: 95,
    icon: <PuzzleIcon className="w-4 h-4 text-minecraft-stone" />,
  },
  {
    id: "community",
    name: "Сообщество",
    count: 183,
    icon: <UsersIcon className="w-4 h-4 text-minecraft-leaf" />,
  },
  {
    id: "events",
    name: "События",
    count: 56,
    icon: <GemIcon className="w-4 h-4 text-purple-500" />,
  },
  {
    id: "worlds",
    name: "Миры",
    count: 87,
    icon: <MapIcon className="w-4 h-4 text-blue-500" />,
  },
];

interface CategoryListProps {
  onSelectCategory: (category: string) => void;
  selectedCategory?: string;
}

const CategoryList = ({ onSelectCategory, selectedCategory }: CategoryListProps) => {
  return (
    <Card className="bg-minecraft-dirt/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-base minecraft-font text-minecraft-wood">Категории</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex justify-between items-center p-2 rounded-md cursor-pointer transition-colors ${
                selectedCategory === category.id
                  ? "bg-minecraft-grass/20 text-minecraft-grass"
                  : "hover:bg-accent"
              }`}
              onClick={() => onSelectCategory(category.id)}
            >
              <div className="flex items-center gap-2">
                {category.icon}
                <span className="text-sm">{category.name}</span>
              </div>
              <Badge variant="outline" className="bg-background">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryList;
