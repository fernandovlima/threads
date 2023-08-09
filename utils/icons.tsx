import {
  Heart,
  Home,
  ImagePlus,
  MessageCircle,
  Search,
  Tag,
  User2,
  Users,
} from "lucide-react";

export function renderIcon(icon: string) {
  switch (icon) {
    case "Home":
      return <Home size={18} />;
    case "Search":
      return <Search size={18} />;
    case "Heart":
      return <Heart size={18} />;
    case "Create":
      return <ImagePlus size={18} />;
    case "User2":
      return <User2 size={18} />;
    case "Thread":
      return <MessageCircle size={18} />;
    case "Members":
      return <Users size={18} />;
    case "Tag":
      return <Tag size={18} />;
  }
}
