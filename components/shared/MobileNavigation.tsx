import { sidebarLinks } from "@/constants/navigation";
import { MenuLink } from "@/components/shared/MenuLink";
import { renderIcon } from "@/components/shared/LeftSideBar";

export function MobileNavigation() {
  return (
    <section
      className={
        " fixed bottom-0 z-10 w-full rounded-t-3xl bg-slate-900 p-4 backdrop-blur-lg xs:px-7 md:hidden"
      }
    >
      <div className={"flex items-center justify-between gap-3 xs:gap-5"}>
        {sidebarLinks.map((item, index) => {
          return (
            <MenuLink path={item.path} key={index}>
              {renderIcon(item.icon)}
              <p className={"text-subtle-medium max-sm:hidden"}>
                {item.name.split(/\s+/)[0]}
              </p>
            </MenuLink>
          );
        })}
      </div>
    </section>
  );
}
