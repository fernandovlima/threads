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
    name: "Create Thread",
    path: "/create-thread",
    icon: "Create",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "User2",
  },
];
