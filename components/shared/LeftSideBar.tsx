import { sidebarLinks } from "@/constants/navigation";
import { Heart, Home, Newspaper, Search, User2 } from "lucide-react";
import { MenuLink } from "@/components/shared/MenuLink";
import { SignOutButton } from "@/components/shared/SignOutButton";

export function renderIcon(icon: string) {
  switch (icon) {
    case "Home":
      return <Home size={18} />;
    case "Search":
      return <Search size={18} />;
    case "Heart":
      return <Heart size={18} />;
    case "Newspaper":
      return <Newspaper size={18} />;
    case "User2":
      return <User2 size={18} />;
  }
}
export function LeftSideBar() {
  return (
    <section
      className={
        "sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-slate-700 bg-slate-950 pb-5 pt-28 max-md:hidden"
      }
    >
      <div className={"flex w-full flex-1 flex-col gap-2 px-6"}>
        {sidebarLinks.map((item, index) => {
          return (
            <MenuLink path={item.path} key={index}>
              {renderIcon(item.icon)}
              <p className={"max-lg:hidden"}>{item.name}</p>
            </MenuLink>
          );
        })}
      </div>

      <div className={"mt-10 px-6"}>
        <SignOutButton />
      </div>
    </section>
  );
}
