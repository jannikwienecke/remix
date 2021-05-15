import React from "react";
import { Outlet } from "react-router-dom";
import { LoaderFunction, MetaFunction, useRouteData } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Template",
  };
};

export let loader: LoaderFunction = async () => {
  return PROJECTS;
};

interface Todo {
  title: string;
}

export interface Category {
  title: string;
  description: string;
  ownerId?: number;
  todos: Todo[];
}

export const PROJECTS: Category[] = [
  {
    title: "First Project",
    todos: [{ title: "First Todo" }],
    description: "This is my first",
  },
];

interface ReturnValue {}

export default function Template() {
  let categories = useRouteData<Category[]>();

  return (
    <main>
      <Outlet />
    </main>
  );
}
