'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { Button } from '@/components/ui/button'
import {cn} from "@/lib/utils";

export const Header = ({ header, desc, onClick }: { header: string; desc?: string; onClick?: () => void }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" onClick={onClick} className="border px-1 min-w-10">
          {header}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>{desc}</span>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

type IconHeaderProps = {
  icon: React.ReactNode;
  desc: string;
  onClick: () => void;
} | {
  src: string;
  desc: string;
  onClick: () => void;
};

export const IconHeader = ({ desc, onClick, className, ...props }: IconHeaderProps & React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={className}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" className={cn("size-6 dark:bg-transparent dark:border")} onClick={onClick}>
            {'icon' in props ? props.icon : <img alt={desc} src={props.src} width={16} height={16}/>}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>{desc}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
}
