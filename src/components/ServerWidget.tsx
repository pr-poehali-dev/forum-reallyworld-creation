import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ServerIcon, UsersIcon } from "lucide-react";

interface ServerWidgetProps {
  serverName: string;
  onlinePlayers: number;
  maxPlayers: number;
  serverVersion: string;
  serverIp: string;
}

const ServerWidget = ({ 
  serverName, 
  onlinePlayers, 
  maxPlayers, 
  serverVersion, 
  serverIp 
}: ServerWidgetProps) => {
  const onlinePercentage = (onlinePlayers / maxPlayers) * 100;
  
  return (
    <Card className="bg-minecraft-dirt/5 overflow-hidden">
      <div className="h-3 bg-minecraft-grass"></div>
      <CardHeader className="pb-2 flex flex-row items-center gap-2">
        <ServerIcon className="w-5 h-5 text-minecraft-grass" />
        <CardTitle className="text-base minecraft-font">Статус сервера</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{serverName}</span>
              <span className="text-xs text-muted-foreground">IP: {serverIp}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <UsersIcon className="w-4 h-4 text-minecraft-grass" />
                <span className="text-sm text-muted-foreground">
                  {onlinePlayers} / {maxPlayers} игроков
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{serverVersion}</span>
            </div>
            <Progress value={onlinePercentage} className="h-2 mt-1" />
          </div>
          
          <div className="p-2 bg-minecraft-stone/10 rounded-md">
            <h4 className="text-sm font-medium mb-1">Сейчас онлайн:</h4>
            <div className="flex flex-wrap gap-1">
              <div className="px-2 py-1 text-xs bg-minecraft-dirt/20 rounded-sm">Steve</div>
              <div className="px-2 py-1 text-xs bg-minecraft-dirt/20 rounded-sm">Alex</div>
              <div className="px-2 py-1 text-xs bg-minecraft-dirt/20 rounded-sm">Notch_fan</div>
              <div className="px-2 py-1 text-xs bg-minecraft-dirt/20 rounded-sm">DiamondMiner</div>
              <div className="px-2 py-1 text-xs bg-minecraft-dirt/20 rounded-sm">Creeper007</div>
              <div className="px-2 py-1 text-xs bg-minecraft-dirt/20 rounded-sm">+{onlinePlayers - 5} игроков</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerWidget;
