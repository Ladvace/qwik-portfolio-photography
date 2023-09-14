import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="relative text-white flex items-center justify-between py-8 md:px-8 box-border text-sm max-w-[1920px] mx-auto">
      <span class="text-white flex justify-around items-center gap-1">
        <span>Ladvace</span>
        <div class="i-ri:copyright-line" /> <span>2023</span>
      </span>
      <ul class="list-none flex gap-4 m-0 p-0">
        <li class="cursor-pointer">instagram</li>
        <li class="cursor-pointer">twitter</li>
      </ul>
      <span class="text-white">Made by Ladvace</span>
    </footer>
  );
});
