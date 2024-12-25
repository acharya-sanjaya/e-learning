import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";

import "./tailwind.css";
import AppContextProvider from "./context/AppContextProvider";

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-gray-100 dark:bg-slate-900">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-gray-200">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <Outlet />
    </AppContextProvider>
  );
}
