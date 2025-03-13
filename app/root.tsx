import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";

import "./tailwind.css";
import AppContextProvider from "./context/AppContextProvider";
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => [
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap",
  },
];

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
      <body className="bg-gray-100 text-slate-800 dark:bg-slate-900 dark:text-gray-200">
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
