import type { Route } from "./+types/home";
import DIBinding from "../src/5-DI-Binding";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <DIBinding />;
}
