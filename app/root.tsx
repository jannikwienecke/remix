import Base, {
  DashboardLayoutContainer,
  DashboardLayoutContent,
  DashboardLayoutRoot,
  DashboardLayoutWrapper,
} from "./components/layout/dashboard/base";
import i18next from "i18next";
import Provider from "./provider";
import React from "react";
import { Outlet } from "react-router-dom";
import type { LinksFunction, LoaderFunction } from "remix";
import { Links, LiveReload, Meta, Scripts, useRouteData } from "remix";
import DashboardNavbar from "./components/layout/dashboard/DashboardNavbar";
import DashboardSidebar from "./components/layout/dashboard/DashboardSidebar";
import useSettings from "./hooks/useSettings";
import stylesUrl from "./styles/global.css";
import { createTheme } from "./theme";
import common_de from "./translations/de/common";
import common_en from "./translations/en/common";

i18next
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: ["en", "de"],
    resources: {
      en: {
        common: common_en,
      },
      de: {
        common: common_de,
      },
    },
  })
  .catch((error: any) => console.error(error));

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { date: new Date() };
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <Meta />
        <Links />
      </head>

      <Provider>
        <body>
          <Base>{children}</Base>
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </Provider>
    </html>
  );
}

export default function App() {
  let data = useRouteData();
  return (
    <Document>
      <Outlet />
      <footer>
        <p>This page was rendered at {data.date.toLocaleString()}</p>
      </footer>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}
