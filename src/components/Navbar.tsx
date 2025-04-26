import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
  HomeIcon, 
  MessageCircleIcon,
  UsersIcon,
  MapIcon,
  ShieldIcon,
  GiftIcon,
  ServerIcon 
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-minecraft-wood/40 bg-minecraft-dirt/10">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-minecraft-grass rounded flex items-center justify-center text-white font-bold">
            MC
          </div>
          <h1 className="text-2xl font-bold minecraft-font text-minecraft-grass">CraftForum</h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <Button variant="ghost" className="flex items-center gap-2">
                  <HomeIcon className="w-4 h-4" />
                  <span>Главная</span>
                </Button>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Сервер</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/server-info"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <ServerIcon className="w-4 h-4" />
                          Информация
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Всё о нашем сервере
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/map"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <MapIcon className="w-4 h-4" />
                          Карта мира
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Интерактивная карта мира
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/forum">
                <Button variant="ghost" className="flex items-center gap-2">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span>Форум</span>
                </Button>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Сообщество</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/players"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <UsersIcon className="w-4 h-4" />
                          Игроки
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Участники нашего сервера
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/rules"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <ShieldIcon className="w-4 h-4" />
                          Правила
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Правила сервера
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/donate"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <GiftIcon className="w-4 h-4" />
                          Донат
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Поддержать сервер
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2">
          <Link to="/login">
            <Button variant="outline" className="text-minecraft-wood border-minecraft-wood hover:bg-minecraft-wood hover:text-white">
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-minecraft-grass hover:bg-minecraft-leaf text-white">
              Регистрация
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
