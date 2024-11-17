import type {MetaFunction} from "@remix-run/node";
import {useNavigate} from "@remix-run/react";
import Logo from "~/Logo";

export const meta: MetaFunction = () => {
  return [{title: "Home"}, {name: "description", content: "Welcome to E-learning App!"}];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-500 w-full text-center">
        Start your coding experience with
      </h1>
      <div>
        <img src="/logo-light.svg" alt="Remix" className="block w-full dark:hidden" />
        <img src="/logo-dark.svg" alt="Remix" className="hidden w-full dark:block" />
      </div>
      <div>
        <Logo />
      </div>
      <button
        className="mt-10 py-2 px-5 bg-blue-500 text-white text-lg rounded-xl font-bold active:scale-90"
        onClick={() => {
          navigate("/quiz");
        }}
      >
        Start Quiz
      </button>

      <button
        className="mt-4 py-2 px-5 bg-blue-500 text-white text-lg rounded-xl font-bold active:scale-90"
        onClick={() => {
          navigate("/lesson");
        }}
      >
        Go to Lessons
      </button>
    </div>
  );
}
