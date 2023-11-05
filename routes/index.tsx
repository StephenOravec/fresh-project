import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(69);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Hello, Fresh!</h1>
        <p class="my-4">
          This being my first deployment with Deno & Fresh.
        </p>
        <p class="my-4">
          You can make the number go up and down!
        </p>
        <Counter count={count} />
        <p class="font-serif text-blue-700">
          This is me playing with Tailwind.
        </p>
      </div>
    </div>

  );
}
