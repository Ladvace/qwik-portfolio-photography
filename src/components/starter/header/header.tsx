import { component$, $, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { lenisContext } from "~/routes";

export default component$(() => {
  const lenisState = useContext(lenisContext);

  useVisibleTask$(() => {
    console.log("LENIS OBJS", lenisState.lenis);
  });

  const scrollTo = $((target: string) => {
    console.log("scrollTo", target, (lenisState.lenis as Lenis).scrollTo);
    lenisState.lenis.scrollTo(target);
  });

  return (
    <nav class="absolute top-0 inset-x-0 w-full px-4 h-14 box-border text-white flex justify-between items-center z-10">
      <div class="overflow-hidden">
        <a id="header-name" class="m-0 font-display text-xl font-bold">
          John
        </a>
      </div>
      <div class="overflow-hidden">
        <ul id="header-menu" class="list-none flex gap-4 m-0">
          <li
            class="cursor-pointer"
            onClick$={() => {
              scrollTo("#works");
            }}
          >
            Works
          </li>
          <li class="cursor-pointer">About</li>
          <li class="cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
});
