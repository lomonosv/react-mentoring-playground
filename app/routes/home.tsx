import type { Route } from "./+types/home";
import Playground from "../src/Playground";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Playground />;
}
