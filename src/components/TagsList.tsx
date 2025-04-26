
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const popularTags = [
  "react",
  "javascript",
  "typescript",
  "программирование",
  "фронтенд",
  "бэкенд",
  "css",
  "nodejs",
  "webdev",
  "дизайн",
];

interface TagsListProps {
  onSelectTag: (tag: string) => void;
  selectedTag?: string;
}

const TagsList = ({ onSelectTag, selectedTag }: TagsListProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Популярные теги</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "secondary"}
              className="cursor-pointer transition-colors"
              onClick={() => onSelectTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TagsList;
