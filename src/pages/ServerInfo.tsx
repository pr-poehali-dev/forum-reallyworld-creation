import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import ServerWidget from "@/components/ServerWidget";
import { DownloadIcon, ServerIcon, UsersIcon, BookOpenIcon, ShieldIcon } from "lucide-react";

const ServerInfo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="hero-gradient py-16 px-4 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 minecraft-font">Информация о сервере</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Подробная информация о нашем сервере CraftLand, правилах и особенностях игры
          </p>
        </div>
      </div>
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Tabs defaultValue="about" className="mb-6">
              <TabsList className="mb-6">
                <TabsTrigger value="about">О сервере</TabsTrigger>
                <TabsTrigger value="rules">Правила</TabsTrigger>
                <TabsTrigger value="commands">Команды</TabsTrigger>
                <TabsTrigger value="faq">ЧаВо</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ServerIcon className="h-5 w-5 text-minecraft-grass" />
                      О сервере CraftLand
                    </CardTitle>
                    <CardDescription>
                      Наш сервер был создан в 2023 году и уже собрал более 5000 игроков
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      CraftLand — это ванильный сервер Minecraft с акцентом на выживание и строительство. 
                      Мы предлагаем дружелюбное сообщество, где каждый игрок может найти себе занятие по душе.
                    </p>
                    
                    <h3 className="text-lg font-medium mt-4">Особенности сервера:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Последняя версия Minecraft (1.20.4)</li>
                      <li>Минимум плагинов, максимум ванильного геймплея</li>
                      <li>Активное сообщество и регулярные мероприятия</li>
                      <li>Защита территорий и экономика</li>
                      <li>Отзывчивая администрация, всегда готовая помочь</li>
                    </ul>
                    
                    <div className="mt-6 border p-4 rounded-lg bg-muted/50">
                      <h4 className="font-medium mb-2">Как начать играть:</h4>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Убедитесь, что у вас установлен Minecraft Java Edition версии 1.20.4</li>
                        <li>Запустите игру и перейдите в меню "Мультиплеер"</li>
                        <li>Нажмите "Добавить сервер" и введите адрес: <code className="bg-muted p-1 rounded">play.craftland.ru</code></li>
                        <li>Присоединяйтесь к серверу и наслаждайтесь игрой!</li>
                      </ol>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Button size="lg" className="bg-minecraft-wood hover:bg-minecraft-wood/80 text-white">
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Начать играть
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UsersIcon className="h-5 w-5 text-minecraft-grass" />
                      Наше сообщество
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Наше сообщество — это сердце сервера CraftLand. Мы гордимся дружелюбной атмосферой и совместным творчеством.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-minecraft-grass flex items-center justify-center text-white mb-3">
                          <UsersIcon className="h-6 w-6" />
                        </div>
                        <h4 className="font-medium mb-2">5,000+</h4>
                        <p className="text-muted-foreground text-sm">зарегистрированных игроков</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-minecraft-wood flex items-center justify-center text-white mb-3">
                          <BookOpenIcon className="h-6 w-6" />
                        </div>
                        <h4 className="font-medium mb-2">1,200+</h4>
                        <p className="text-muted-foreground text-sm">тем на форуме</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rules" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldIcon className="h-5 w-5 text-minecraft-grass" />
                      Правила сервера
                    </CardTitle>
                    <CardDescription>
                      Правила созданы для комфортной игры всех участников
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="pb-3 border-b">
                        <h3 className="font-medium mb-2">1. Общие правила поведения</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Уважайте других игроков и администрацию</li>
                          <li>Запрещены оскорбления, угрозы и любые формы дискриминации</li>
                          <li>Запрещен спам и флуд в чате и на форуме</li>
                          <li>Запрещена реклама других серверов</li>
                        </ul>
                      </div>
                      
                      <div className="pb-3 border-b">
                        <h3 className="font-medium mb-2">2. Правила игрового процесса</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Запрещено использование читов, эксплойтов и багов игры</li>
                          <li>Запрещена кража ресурсов с чужих территорий</li>
                          <li>Запрещено создание лаг-машин и других конструкций, вызывающих проблемы сервера</li>
                          <li>Запрещено гриферство и намеренная порча построек других игроков</li>
                        </ul>
                      </div>
                      
                      <div className="pb-3 border-b">
                        <h3 className="font-medium mb-2">3. Правила защиты территорий</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Каждый игрок может защитить до 4 регионов</li>
                          <li>Минимальное расстояние между регионами разных игроков — 100 блоков</li>
                          <li>Запрещено захватывать природные спавнеры мобов</li>
                          <li>Администрация оставляет за собой право удалить заброшенные регионы</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">4. Наказания за нарушения</h3>
                        <p className="text-sm mb-2">В зависимости от тяжести нарушения могут быть применены следующие санкции:</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Предупреждение</Badge>
                          <Badge variant="outline">Мут (запрет писать в чат)</Badge>
                          <Badge variant="outline">Временный бан</Badge>
                          <Badge variant="outline">Постоянный бан</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="commands" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Полезные команды</CardTitle>
                    <CardDescription>
                      Список основных команд, доступных на сервере
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-minecraft-dirt/10">
                              <th className="px-4 py-2 text-left">Команда</th>
                              <th className="px-4 py-2 text-left">Описание</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/spawn</td>
                              <td className="px-4 py-2">Телепортация на спавн</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/home</td>
                              <td className="px-4 py-2">Телепортация домой</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/sethome</td>
                              <td className="px-4 py-2">Установить точку дома</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/tpa [игрок]</td>
                              <td className="px-4 py-2">Запрос телепортации к игроку</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/msg [игрок] [сообщение]</td>
                              <td className="px-4 py-2">Отправить личное сообщение</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/rg claim [название]</td>
                              <td className="px-4 py-2">Защитить территорию</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/money</td>
                              <td className="px-4 py-2">Проверить баланс</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 font-mono text-sm">/pay [игрок] [сумма]</td>
                              <td className="px-4 py-2">Перевести деньги игроку</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Примечание:</h4>
                        <p className="text-sm">Некоторые команды могут быть недоступны новым игрокам. Дополнительные команды открываются по мере игрового прогресса и достижения определенных рангов.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faq" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Часто задаваемые вопросы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Как зарегистрироваться на сервере?</h3>
                        <p className="text-sm text-muted-foreground">
                          Регистрация происходит автоматически при первом входе на сервер. Введите команду <code className="bg-muted p-1 rounded">/register [пароль] [пароль]</code> для установки пароля.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">Как защитить свою территорию?</h3>
                        <p className="text-sm text-muted-foreground">
                          Используйте деревянную лопату для выделения территории (левый клик по одному углу, правый клик по противоположному), затем введите <code className="bg-muted p-1 rounded">/rg claim [название_региона]</code>.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">Как заработать игровую валюту?</h3>
                        <p className="text-sm text-muted-foreground">
                          Вы можете заработать деньги, продавая ресурсы другим игрокам, выполняя задания от NPС на спавне или участвуя в серверных мероприятиях.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">Что делать, если меня убили/обокрали?</h3>
                        <p className="text-sm text-muted-foreground">
                          PVP разрешен только в специальных зонах. Если вас убили или обокрали вне этих зон, сообщите об этом администрации через команду <code className="bg-muted p-1 rounded">/report [игрок] [причина]</code>.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">Как получить донат-привилегии?</h3>
                        <p className="text-sm text-muted-foreground">
                          Донат-привилегии можно приобрести на нашем сайте в разделе "Донат". После оплаты привилегии активируются автоматически в течение 5 минут.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <Link to="/forum">
                        <Button variant="outline">
                          Задать вопрос на форуме
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <ServerWidget 
              serverName="CraftLand Survival"
              onlinePlayers={87}
              maxPlayers={150}
              serverVersion="1.20.4"
              serverIp="play.craftland.ru"
            />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Связаться с администрацией</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-minecraft-grass flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 17.5c0 2.5-2 4.5-4.5 4.5h-7a8 8 0 0 1-8-8 5 5 0 0 1 5-5h8.5c1.93 0 3.5 1.57 3.5 3.5v.5H19a2 2 0 0 1 2 2v1.5Z"></path>
                        <path d="M14 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"></path>
                        <path d="M6 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"></path>
                      </svg>
                    </div>
                    <span className="text-sm">Discord: CraftLand#1234</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-minecraft-wood flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </div>
                    <span className="text-sm">Telegram: @craftland_mc</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                        <path d="m21 9-9-7-9 7"></path>
                        <path d="M12 13v5"></path>
                        <path d="m8 13 4 5 4-5"></path>
                      </svg>
                    </div>
                    <span className="text-sm">Email: admin@craftland.ru</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/contact">
                    <Button variant="outline" className="w-full text-sm">
                      Обратная связь
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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

export default ServerInfo;
