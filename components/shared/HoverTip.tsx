import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tip: string;
}
export function HoverTip({ children, tip }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          className={"bg-indigo-500 border-0 text-slate-100 rounded"}
        >
          <p>{tip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
