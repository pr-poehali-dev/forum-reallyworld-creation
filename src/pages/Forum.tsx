import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import ForumPostCard from "@/components/ForumPostCard";
import CategoryList from "@/components/CategoryList";
import ServerWidget from "@/components/ServerWidget";
import { PenIcon, FilterIcon, ArrowUpIcon, MessageCircleIcon } from "lucide-react";

// Моки данных для демонстрации
const mockPosts = [
  {
    id: "1",
    title: "Добро пожаловать на сервер CraftLand!",
    description: "Правила сервера, информация для новичков и другая важная информация, которую нужно знать всем игрокам.",
    body: "Lorem ipsum dolor sit amet...",
    category: "news",
    createdAt: "2025-04-20T12:00:00Z",
    likesCount: 142,
    author: {
      username: "AdminCraft",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
      rank: "Администратор"
    },
    repliesCount: 56,
    isPinned: true
  },
  {
    id: "2",
    title: "Показываю свою новую постройку: Средневековый замок",
    description: "Строил две недели, использовал только выживание. Внутри есть система редстоуна и автоматическая ферма.",
    body: "Lorem ipsum dolor sit amet...",
    category: "builds",
    createdAt: "2025-04-18T10:30:00Z",
    likesCount: 87,
    author: {
      username: "MasterBuilder",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
      rank: "Строитель"
    },
    repliesCount: 23,
    isPinned: false
  },
  {
    id: "3",
    title: "Нужна помощь с настройкой плагина Essentials",
    description: "Не могу правильно настроить права доступа и экономику. Кто может помочь с конфигурацией?",
    body: "Lorem ipsum dolor sit amet...",
    category: "plugins",
    createdAt: "2025-04-15T15:45:00Z",
    likesCount: 12,
    author: {
      username: "ServerGuru",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      rank: "Игрок"
    },
    repliesCount: 8,
    isPinned: false
  },
  {
    id: "4",
    title: "Ивент на выходных: Охота за сокровищами!",
    description: "В субботу в 18:00 по МСК приглашаем всех на грандиозную охоту за сокровищами по всей карте!",
    body: "Lorem ipsum dolor sit amet...",
    category: "events",
    createdAt: "2025-04-12T14:20:00Z",
    likesCount: 56,
    author: {
      username: "EventManager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      rank: "Модератор"
    },
    repliesCount: 19,
    isPinned: true
  },
  {
    id: "5",
    title: "Набор в клан 'Лесные Странники'",
    description: "Ищем активных игроков для совместного строительства и исследования. Требования: опыт от 3 месяцев, возраст 16+.",
    body: "Lorem ipsum dolor sit amet...",
    category: "community",
    createdAt: "2025-04-08T09:15:00Z",
    likesCount: 34,
    author: {
      username: "ForestWalker",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rank: "Лидер клана"
    },
    repliesCount: 27,
    isPinned: false
  },
  {
    id: "6",
    title: "Гайд: Эффективная добыча древних обломков",
    description: "Подробное руководство по поиску древних обломков в Нижнем мире с минимальными затратами времени.",
    body: "Lorem ipsum dolor sit amet...",
    category: "guides",
    createdAt: "2025-04-05T18:30:00Z",
    likesCount: 112,
    author: {
      username: "NetherExplorer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rank: "Опытный игрок"
    },
    repliesCount: 42,
    isPinned: false
  },
  {
    id: "7",
    title: "Скриншоты нашего нового спавна",
    description: "Делюсь скриншотами нового спавна, который мы строили целый месяц! Есть мини-игры, магазины и многое другое.",
    body: "Lorem ipsum dolor sit amet...",
    category: "builds",
    createdAt: "2025-04-02T11:20:00Z",
    likesCount: 76,
    author: {
      username: "BuildMaster",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rank: "Строитель"
    },
    repliesCount: 31,
    isPinned: false
  }
];

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = useState<"recent" | "popular">("recent");
  
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(prevCategory => prevCategory === category ? undefined : category);
  };
  
  const filteredPosts = selectedCategory 
    ? mockPosts.filter(post => post.category === selectedCategory)
    : mockPosts;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likesCount - a.likesCount;
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  const pinnedPosts = sortedPosts.filter(post => post.isPinned);
  const regularPosts = sortedPosts.filter(post => !post.isPinned);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-minecraft-dirt/20 border-b border-minecraft-wood/20 py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold minecraft-font text-minecraft-wood mb-4">Форум сервера CraftLand</h1>
          <p className="text-muted-foreground max-w-2xl">
            Обсуждайте игровые моменты, делитесь своими постройками, ищите единомышленников
            и будьте в курсе всех событий нашего сервера.
          </p>
        </div>
      </div>
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2 bg-muted rounded-md p-1">
              <Button 
                variant={sortBy === "recent" ? "default" : "ghost"} 
                size="sm" 
                onClick={() => setSortBy("recent")}
                className={sortBy === "recent" ? "bg-minecraft-grass text-white" : ""}
              >
                <MessageCircleIcon className="h-4 w-4 mr-1" />
                Новые
              </Button>
              <Button 
                variant={sortBy === "popular" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setSortBy("popular")}
                className={sortBy === "popular" ? "bg-minecraft-grass text-white" : ""}
              >
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                Популярные
              </Button>
            </div>
            {selectedCategory && (
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Фильтр:</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-minecraft-grass/10 border-minecraft-grass/20 text-minecraft-grass flex items-center gap-1"
                  onClick={() => setSelectedCategory(undefined)}
                >
                  {selectedCategory}
                  <span className="ml-1">×</span>
                </Button>
              </div>
            )}
          </div>
          
          <Link to="/create-post">
            <Button className="w-full sm:w-auto flex items-center gap-2 bg-minecraft-grass hover:bg-minecraft-leaf text-white">
              <PenIcon className="h-4 w-4" />
              Создать тему
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="mb-6">
              <TabsList className="mb-4">
                <TabsTrigger value="all">Все темы</TabsTrigger>
                <TabsTrigger value="news">Новости</TabsTrigger>
                <TabsTrigger value="guides">Гайды</TabsTrigger>
                <TabsTrigger value="builds">Постройки</TabsTrigger>
                <TabsTrigger value="my">Мои темы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4 space-y-6">
                {pinnedPosts.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m2 7 5 5-5 5"></path><path d="m7 7 5 5-5 5"></path><path d="m12 7 5 5-5 5"></path><path d="m17 7 5 5-5 5"></path></svg>
                      Закрепленные темы
                    </h3>
                    <div className="space-y-4">
                      {pinnedPosts.map((post) => (
                        <ForumPostCard key={post.id} {...post} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15V6"></path><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M12 12H3"></path><path d="M16 6H3"></path><path d="M12 18H3"></path></svg>
                    Обсуждения
                  </h3>
                  <div className="space-y-4">
                    {regularPosts.map((post) => (
                      <ForumPostCard key={post.id} {...post} />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="news" className="mt-4">
                <div className="space-y-4">
                  {sortedPosts
                    .filter(post => post.category === "news")
                    .map((post) => (
                      <ForumPostCard key={post.id} {...post} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="guides" className="mt-4">
                <div className="space-y-4">
                  {sortedPosts
                    .filter(post => post.category === "guides")
                    .map((post) => (
                      <ForumPostCard key={post.id} {...post} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="builds" className="mt-4">
                <div className="space-y-4">
                  {sortedPosts
                    .filter(post => post.category === "builds")
                    .map((post) => (
                      <ForumPostCard key={post.id} {...post} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="my" className="mt-4">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-minecraft-dirt/10 p-8 rounded-lg border border-minecraft-wood/20 max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-muted-foreground"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <h3 className="text-xl font-medium mb-2">Войдите, чтобы увидеть свои темы</h3>
                    <p className="text-muted-foreground mb-6">Чтобы просматривать свои темы и сообщения, необходимо войти в аккаунт сервера</p>
                    <div className="flex gap-4 justify-center">
                      <Link to="/login">
                        <Button className="bg-minecraft-wood hover:bg-minecraft-wood/80 text-white">Войти</Button>
                      </Link>
                      <Link to="/register">
                        <Button variant="outline" className="border-minecraft-wood/50 text-minecraft-wood hover:bg-minecraft-wood/10">Регистрация</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Показано {regularPosts.length + pinnedPosts.length} тем</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Предыдущая
                </Button>
                <Button variant="outline" size="sm" className="font-medium bg-minecraft-grass/10 border-minecraft-grass/20 text-minecraft-grass">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Следующая
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <ServerWidget 
              serverName="CraftLand Survival"
              onlinePlayers={87}
              maxPlayers={150}
              serverVersion="1.20.4"
              serverIp="play.craftland.ru"
            />
            
            <div className="bg-card rounded-lg border shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium flex items-center gap-2">
                  <FilterIcon className="h-4 w-4 text-minecraft-grass" />
                  Категории
                </h3>
              </div>
              
              <CategoryList onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
            </div>
            
            <div className="bg-card rounded-lg border shadow-sm p-4">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-minecraft-grass"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                Правила форума
              </h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-minecraft-grass">•</span>
                  <span>Уважайте других участников форума</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-minecraft-grass">•</span>
                  <span>Запрещена реклама сторонних проектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-minecraft-grass">•</span>
                  <span>Запрещены оскорбления и провокации</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-minecraft-grass">•</span>
                  <span>Создавайте темы в соответствующих разделах</span>
                </li>
              </ul>
              <div className="mt-3">
                <Link to="/rules" className="text-xs text-minecraft-grass hover:underline">
                  Подробнее о правилах →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t border-minecraft-wood/20 bg-minecraft-dirt/5">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© CraftLand 2025. Майнкрафт-сервер и сообщество игроков.</p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <Link to="/rules" className="hover:text-minecraft-grass">Правила</Link>
            <Link to="/team" className="hover:text-minecraft-grass">Команда</Link>
            <Link to="/donate" className="hover:text-minecraft-grass">Поддержать</Link>
            <Link to="/contact" className="hover:text-minecraft-grass">Контакты</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Forum;
