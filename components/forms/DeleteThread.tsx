"use client";

import { usePathname, useRouter } from "next/navigation";

import { deleteThread } from "@/lib/actions/thread.actions";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

export default function DeleteThread({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  if (currentUserId !== authorId || pathname === "/") return null;

  return (
    <Button
      className="cursor-pointer text-red-400 hover:text-red-600 transition-colors"
      onClick={async () => {
        await deleteThread(JSON.parse(threadId), pathname);
        if (!parentId || !isComment) {
          router.push("/");
        }
        setTimeout(() => {
          toast({
            title: "Thread deleted.",
            className: "bg-green-600 border-0",
          });
        }, 600);
      }}
    >
      <Trash size={18} />
    </Button>
  );
}
