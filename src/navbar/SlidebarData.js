import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Vigilance",
    path: "/vig",
    icon: <AiIcons.AiFillAlert />,
    cName: "nav-text"
  },
  {
    title: "Cool",
    path: "/cool",
    icon: <FaIcons.FaSkiing />,
    cName: "nav-text"
  },
  {
    title: "Shared",
    path: "/shared",
    icon: <FaIcons.FaShareAlt />,
    cName: "nav-text"
  }
];
