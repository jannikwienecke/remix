import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";

import stylesUrl from ".css";
import { Category, PROJECTS } from "../categories";
import React from "react";
import {
  ButtonGroup,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export let meta: MetaFunction = () => {
  return {
    title: "Category",
  };
};

// export let links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

export let loader: LoaderFunction = async ({ params }) => {
  return PROJECTS[+params.id];
};

export default function Category() {
  let category = useRouteData<Category>();

  return (
    <div>
      <h2>{category.title}</h2>
      <h1></h1>
      <h4>{category.description}</h4>
      <ul>
        {category.todos.map((todo) => {
          return <li key={todo.title}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}
