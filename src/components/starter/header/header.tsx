import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="absolute top-0 inset-x-0 w-full px-4 h-14 box-border text-white flex justify-between items-center z-10">
      <div class="overflow-hidden">
        <h2 id="header-name" class="m-0">
          Gianmarco
        </h2>
      </div>
      <ul class="list-none flex gap-4 m-0">
        <li class="cursor-pointer">About</li>
        <li class="cursor-pointer">Contact</li>
      </ul>
    </header>
  );
});
