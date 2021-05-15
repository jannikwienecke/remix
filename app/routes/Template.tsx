import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";

import stylesUrl from ".css";

export let meta: MetaFunction = () => {
  return {
    title: "Template",
  };
};

// export let links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

// export let loader: LoaderFunction = async () => {
//   return { message: "this is awesome 😎" };
// };

interface ReturnValue {}

export default function Template() {
  //   let data = useRouteData<ReturnValue>();

  return (
    <div>
      <h2>Template</h2>
    </div>
  );
}
