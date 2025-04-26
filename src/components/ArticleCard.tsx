
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
  createdAt: string;
  favoritesCount: number;
  author: {
    username: string;
    image: string;
  };
  commentsCount: number;
}

const ArticleCard = ({
  id,
  title,
  description,
  tags,
  createdAt,
  favoritesCount,
  author,
  commentsCount,
}: ArticleCardProps) => {
  // Format date
  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <Card className="transition-all hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.image} alt={author.username} />
              <AvatarFallback>{author.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <Link to={`/profile/${author.username}`} className="text-sm font-medium hover:underline">
                {author.username}
              </Link>
              <p className="text-xs text-muted-foreground">{formattedDate}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <HeartIcon className="h-4 w-4" />
            <span className="ml-1 text-xs">{favoritesCount}</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Link to={`/article/${id}`}>
          <CardTitle className="mb-2 hover:text-primary">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2 flex-wrap">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-muted-foreground">
          <MessageCircleIcon className="h-4 w-4 mr-1" />
          <span className="text-xs">{commentsCount}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
