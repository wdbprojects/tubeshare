import {
  FlameIcon,
  HistoryIcon,
  HomeIcon,
  ListVideoIcon,
  PlaySquareIcon,
  ThumbsUpIcon,
} from "lucide-react";

export const mainMenuItems = [
  { title: "Home", url: "/", icon: HomeIcon },
  {
    title: "Subscriptions",
    url: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  { title: "Trending", url: "/feed/trending", icon: FlameIcon },
];

export const personalMenuItems = [
  {
    title: "History",
    url: "/playlists/liked",
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: "Liked videos",
    url: "/playlists/history",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All playlists ",
    url: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
];
