
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
import { HomeIcon, MessageCircleIcon, UserIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">РеалФорум</h1>
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
              <Link to="/articles">
                <Button variant="ghost" className="flex items-center gap-2">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span>Статьи</span>
                </Button>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Аккаунт</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/login"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Войти</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Вход в существующий аккаунт
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/register"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Регистрация</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Создать новый аккаунт
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
