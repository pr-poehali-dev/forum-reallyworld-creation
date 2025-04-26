
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";
import TagsList from "@/components/TagsList";
import { PenIcon } from "lucide-react";

// Моки данных для демонстрации
const mockArticles = [
  {
    id: "1",
    title: "Как создать современное SPA приложение в 2025 году",
    description: "Подробное руководство по созданию одностраничных приложений с использованием React, TypeScript и Vite.",
    body: "Lorem ipsum dolor sit amet...",
    tags: ["react", "typescript", "vite"],
    createdAt: "2025-04-20T12:00:00Z",
    favoritesCount: 42,
    author: {
      username: "Алексей",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    commentsCount: 12,
  },
  {
    id: "2",
    title: "Оптимизация производительности React приложений",
    description: "Лучшие практики и советы по улучшению производительности ваших приложений React.",
    body: "Lorem ipsum dolor sit amet...",
    tags: ["react", "performance", "optimization"],
    createdAt: "2025-04-15T10:30:00Z",
    favoritesCount: 27,
    author: {
      username: "Мария",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    commentsCount: 8,
  },
  {
    id: "3",
    title: "TypeScript 5.5: Новые возможности и улучшения",
    description: "Обзор новых функций и улучшений в TypeScript 5.5, которые сделают ваш код более надёжным.",
    body: "Lorem ipsum dolor sit amet...",
    tags: ["typescript", "javascript", "webdev"],
    createdAt: "2025-04-10T15:45:00Z",
    favoritesCount: 35,
    author: {
      username: "Иван",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    commentsCount: 15,
  },
];

const Index = () => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  
  const handleSelectTag = (tag: string) => {
    setSelectedTag(prevTag => prevTag === tag ? undefined : tag);
  };
  
  const filteredArticles = selectedTag 
    ? mockArticles.filter(article => article.tags.includes(selectedTag))
    : mockArticles;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="hero-gradient py-16 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">РеалФорум</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Место, где разработчики делятся знаниями, опытом и обсуждают все аспекты программирования
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register">
              <Button size="lg">Присоединиться</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">Узнать больше</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Последние статьи</h2>
          <Link to="/editor">
            <Button className="flex items-center gap-2">
              <PenIcon className="h-4 w-4" />
              Написать статью
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Tabs defaultValue="global" className="mb-6">
              <TabsList>
                <TabsTrigger value="global">Глобальная лента</TabsTrigger>
                <TabsTrigger value="feed">Мои подписки</TabsTrigger>
                {selectedTag && (
                  <TabsTrigger value="tag">#{selectedTag}</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="global" className="mt-4">
                <div className="space-y-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="feed" className="mt-4">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-lg font-medium mb-2">Войдите, чтобы увидеть статьи от авторов, на которых вы подписаны</h3>
                  <p className="text-muted-foreground mb-4">Персонализированная лента доступна только для авторизованных пользователей</p>
                  <div className="flex gap-4">
                    <Link to="/login">
                      <Button>Войти</Button>
                    </Link>
                    <Link to="/register">
                      <Button variant="outline">Регистрация</Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              
              {selectedTag && (
                <TabsContent value="tag" className="mt-4">
                  <div className="space-y-6">
                    {filteredArticles.map((article) => (
                      <ArticleCard key={article.id} {...article} />
                    ))}
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>
          
          <div>
            <TagsList onSelectTag={handleSelectTag} selectedTag={selectedTag} />
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© РеалФорум 2025. Современная платформа для обмена идеями и знаниями.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
