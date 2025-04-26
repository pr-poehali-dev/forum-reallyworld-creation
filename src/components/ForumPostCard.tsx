import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ForumPostCardProps {
  id: string;
  title: string;
  description: string;
  body: string;
  category: string;
  createdAt: string;
  likesCount: number;
  author: {
    username: string;
    image: string;
    rank: string;
  };
  repliesCount: number;
  isPinned?: boolean;
}

const ForumPostCard = ({
  id,
  title,
  description,
  category,
  createdAt,
  likesCount,
  author,
  repliesCount,
  isPinned = false,
}: ForumPostCardProps) => {
  // Format date
  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <Card className={`transition-all hover:border-minecraft-grass block-card ${isPinned ? 'border-l-4 border-l-minecraft-grass' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10 border-2 border-minecraft-dirt">
              <AvatarImage src={author.image} alt={author.username} />
              <AvatarFallback className="bg-minecraft-stone text-white">{author.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <Link to={`/profile/${author.username}`} className="text-sm font-medium hover:underline">
                  {author.username}
                </Link>
                <Badge className="bg-minecraft-wood text-white text-xs">{author.rank}</Badge>
                {isPinned && <Badge className="bg-minecraft-leaf text-white text-xs">Закреплено</Badge>}
              </div>
              <p className="text-xs text-muted-foreground">{formattedDate}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <HeartIcon className="h-4 w-4" />
            <span className="ml-1 text-xs">{likesCount}</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Link to={`/post/${id}`}>
          <CardTitle className="mb-2 hover:text-minecraft-grass">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline" className="border-minecraft-dirt text-minecraft-dirt">
          {category}
        </Badge>
        <div className="flex items-center text-muted-foreground">
          <MessageCircleIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">{repliesCount} ответов</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForumPostCard;
