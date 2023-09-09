import { component$, useVisibleTask$ } from "@builder.io/qwik";
import SplitType from "split-type";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Starter from "~/components/starter/next-steps/next-steps";
import { TimelineDefinition, stagger, timeline } from "motion";

export default component$(() => {
  useVisibleTask$(() => {
    new SplitType("#name", {
      types: "words",
    });

    const sequence = [
      [
        "#loader",
        { opacity: 0, pointerEvents: "none" },
        { easing: "ease-out" },
      ],
      ["#outer-container", { padding: ["0px", "4rem"] }, { duration: 0.3 }],
      [".word", { y: ["100%", "0%"] }, { delay: stagger(0.1), at: "+0.2" }],
    ];

    timeline(sequence as TimelineDefinition);
  });

  return (
    <div
      id="outer-container"
      class="w-screen h-screen bg-darkslate-900 box-border"
    >
      <div class="relative w-full h-full overflow-hidden rounded-xl bg-darkslate-900 flex justify-center items-center">
        <video autoplay class="w-full h-full object-cover">
          <source
            src="https://uploads-ssl.webflow.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4"
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <div class="bg-gradient-to-t from-black absolute inset-0" />

        <div class="overflow-hidden absolute top-1/2 left-1/2 -translate-1/2">
          <h1
            id="name"
            class="m-0 cursor-pointer hover:tracking-wide transition-all duration-100 ease-in-out font-sans text-6xl font-extrabold text-white select-none"
          >
            Amalia D'onofrio
          </h1>
        </div>
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
