import { component$, useVisibleTask$ } from "@builder.io/qwik";
import SplitType from "split-type";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { TimelineDefinition } from "motion";
import { stagger, timeline } from "motion";
import Header from "~/components/starter/header/header";

export default component$(() => {
  useVisibleTask$(() => {
    new SplitType("#name", {
      types: "words",
      wordClass: "word origin-left"
    });

    const sequence = [
      [
        "#loader",
        { opacity: 0, pointerEvents: "none" },
        { easing: "ease-out" },
      ],
      [
        "#outer-container",
        { scale: [2, 1], opacity: [0, 1] },
        { duration: 0.3, easing: "ease-in-out" },
      ],
      ["#header-name", { y: ["100%", "0%"] }, { at: "+0.2" }],
      [
        ".word",
        {
          y: ["100%", "0%"],
          skewX: ["45deg", "0deg"],
          rotate: ["-10deg", "0deg"],
        },
        { delay: stagger(0.1), at: "+0.2" },
      ],
    ];

    timeline(sequence as TimelineDefinition);
  });

  return (
    <div
      id="outer-container"
      class="w-screen h-screen p-8 bg-darkslate-900 box-border"
    >
      <div class="relative w-full h-full overflow-hidden rounded-xl bg-darkslate-900 flex justify-center items-center">
        <Header />
        <div class="overflow-hidden absolute top-1/2 left-1/2 -translate-1/2 z-10">
          <h1
            id="name"
            class="m-0 cursor-pointer hover:tracking-wide transition-all duration-100 ease-in-out font-sans text-6xl font-extrabold text-white select-none"
          >
            Gianmarco Cavallo
          </h1>
        </div>
        <div class="bg-gradient-to-t from-black absolute inset-0 z-0" />
        <video autoplay class="w-full h-full object-cover">
          <source
            src=""
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
