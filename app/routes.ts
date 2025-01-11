import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

export default [
  layout("./Layout/Header.tsx", [
    index("routes/home.tsx"),
    route("Projects", "routes/Projects.tsx"),
    route("About", "routes/About.tsx"),
  ]),
] satisfies RouteConfig;
