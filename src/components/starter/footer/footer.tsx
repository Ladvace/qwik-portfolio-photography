import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="relative text-white grid grid-cols-auto justify-center md:grid-cols-[1fr_auto_1fr] py-8 md:px-8 box-border text-sm max-w-[1920px] mx-auto">
      <div class="text-white flex justify-around items-center gap-1 max-w-fit md:justify-self-start">
        <span>Ladvace</span>
        <div class="i-ri:copyright-line" /> <span>2023</span>
      </div>
      <ul class="list-none flex gap-4 m-0 mb-4 md:mb-0 p-0 font-bold row-start-1 md:row-start-auto row-end-2 md:row-end-auto col-start-1 md:col-start-auto col-end-2 md:col-end-auto">
        <li class="cursor-pointer">instagram</li>
        <li class="cursor-pointer">twitter</li>
      </ul>
      <div class="text-white md:justify-self-end">Made by Ladvace</div>
    </footer>
  );
});
