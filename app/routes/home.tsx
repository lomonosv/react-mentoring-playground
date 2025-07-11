import type { Route } from "./+types/home";
import Playground from "../src/2-ContextProblems/Playground";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Playground />;
}
