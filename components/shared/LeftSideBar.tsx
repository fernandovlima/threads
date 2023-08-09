import { sidebarLinks } from "@/constants/navigation";
import { MenuLink } from "@/components/shared/MenuLink";
import { SignOutButton } from "@/components/shared/SignOutButton";
import { renderIcon } from "@/utils/icons";

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
