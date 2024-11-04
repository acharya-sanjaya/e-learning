import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{title: "Home"}, {name: "description", content: "Welcome to E-learning App!"}];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-500 w-full text-center">
        Start your coding experience with
      </h1>
      <div>
        <img src="/logo-light.png" alt="Remix" className="block w-full dark:hidden" />
        <img src="/logo-dark.png" alt="Remix" className="hidden w-full dark:block" />
      </div>
    </div>
  );
}
