import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Dashboard",
  };
};

// export let links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

// export let loader: LoaderFunction = async () => {
//   return { message: "this is awesome 😎" };
// };

export default function Dashboard() {
  //   let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Dashboard</h2>
    </div>
  );
}
