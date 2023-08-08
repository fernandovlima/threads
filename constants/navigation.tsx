type SidebarLink = {
  name: string;
  path: string;
  icon: string;
};

export const sidebarLinks: SidebarLink[] = [
  {
    name: "Home",
    path: "/",
    icon: "Home",
  },
  {
    name: "Search",
    path: "/search",
    icon: "Search",
  },
  {
    name: "Activity",
    path: "/activity",
    icon: "Heart",
  },
  {
    name: "Create",
    path: "/create-thread",
    icon: "Newspaper",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "User2",
  },
];
