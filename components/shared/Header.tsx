import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-30 flex w-full items-center justify-between bg-slate-950 px-6 py-3 border-b border-b-slate-700 max-md:hidden">
      <div className="flex items-center">
        <Link
          href={"/"}
          className={
            "font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-300"
          }
        >
          @Threads
        </Link>
      </div>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}
