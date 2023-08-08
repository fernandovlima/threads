"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignOutButton as SignOut } from "@clerk/nextjs";

export function SignOutButton() {
  const router = useRouter();
  return (
    <SignOut signOutCallback={() => router.push("/sign-in")}>
      <div
        className={
          "flex items-center gap-2 justify-center cursor-pointer group transition-colors hover:text-indigo-300"
        }
      >
        <LogOut className={"h-5 w-5"} />
        <p className={"max-lg:hidden "}>Sign Out</p>
      </div>
    </SignOut>
  );
}
