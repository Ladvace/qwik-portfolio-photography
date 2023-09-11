import { component$, useVisibleTask$ } from "@builder.io/qwik";
import SplitType from "split-type";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { TimelineDefinition } from "motion";
import { stagger, timeline } from "motion";
import Header from "~/components/starter/header/header";
import LoaderContainer from "~/components/LoaderContainer";
import CollectionPreview from "~/components/CollectionPreview/CollectionPreview";

export default component$(() => {
  useVisibleTask$(() => {
    new SplitType("#name", {
      types: "words",
      wordClass: "word origin-left",
    });
    const sequence = [
      [
        "#global-loader",
        { opacity: [1, 0], pointerEvents: "none" },
        { easing: "ease-in-out", duration: 0.2 },
      ],
      [
        "#inner-column-container",
        { height: ["350%", "100%"] },
        { easing: "ease-in-out", duration: 2.5, name: "initial-scale" },
      ],
      [
        ".isReversed",
        { y: ["-40%", 0] },
        { easing: "ease-in-out", duration: 2.5, at: "<" },
      ],
      [
        ".isEdge",
        { y: ["70%", 0] },
        { easing: "ease-in-out", duration: 2.5, at: "<" },
      ],
      [
        ".isCenter",
        { y: ["40%", "0"] },
        { easing: "ease-in-out", duration: 2.5, at: "<" },
      ],
      [
        "#animation-container",
        { scale: ["0.23", "1"] },
        { easing: "ease-in-out", duration: 2, delay: 2 },
      ],
      [
        ".isMiddle img",
        { scale: ["1.5", "1"] },
        { easing: "ease-in-out", duration: 2, delay: 2, at: "<" },
      ],
      // ----
      [
        "#outer-container",
        { opacity: [0, 1] },
        { duration: 0.5, easing: "ease-in-out" },
      ],
      [
        "#animation-container",
        { opacity: ["1", "0"] },
        { easing: "ease-in-out" },
      ],
      [
        "#header-name",
        {
          y: ["100%", "0%"],
          skewX: ["45deg", "0deg"],
          rotate: ["10deg", "0deg"],
        },
        { at: "+0.1" },
      ],
      [
        "#header-menu li",
        {
          y: ["100%", "0%"],
          skewX: ["45deg", "0deg"],
          rotate: ["10deg", "0deg"],
        },
        { at: "<", delay: stagger(0.3), duration: 0.6 },
      ],
      [
        ".word",
        {
          y: ["150%", "0%"],
          skewX: ["45deg", "0deg"],
          rotate: ["10deg", "0deg"],
        },
        { delay: stagger(0.1), at: "+0.1" },
      ],
      [
        "#profession",
        {
          y: ["150%", "0%"],
          skewX: ["45deg", "0deg"],
          rotate: ["10deg", "0deg"],
        },
        { delay: 1 },
      ],
      ["body", { overflow: ["hidden", "auto"] }],
    ];

    timeline(sequence as TimelineDefinition, { duration: 4 });
  });

  return (
    <div class="flex flex-col h-[300vh]">
      <div class="fixed inset-0 w-full h-screen overflow-hidden flex justify-center items-center bg-darkslate-900">
        <LoaderContainer />
      </div>
      <div
        id="outer-container"
        class="z-0 w-screen h-full p-8 box-border opacity-0 origin-bottom-center flex flex-col"
      >
        <div
          id="frame"
          class="relative w-full h-[calc(100vh-4rem)] box-border overflow-hidden rounded-2xl bg-darkslate-900 flex flex-col justify-center items-center"
        >
          <div class="relative w-full h-full overflow-hidden rounded-2xl bg-darkslate-900 flex flex-col justify-center items-center">
            <Header />
            <div class="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center z-10">
              <div class="overflow-hidden flex flex-col items-center">
                <h1
                  id="name"
                  class="m-0 flex gap-4 uppercase cursor-pointer hover:tracking-wide transition-all duration-100 ease-in-out text-2xl md:text-6xl font-extrabold text-white select-none"
                >
                  Gianmarco Cavallo
                </h1>
              </div>
              <div class="overflow-hidden flex flex-col items-center">
                <h2 id="profession" class="m-0 text-white font-sans">
                  Photographer
                </h2>
              </div>
            </div>
            <div class="bg-gradient-to-b from-black opacity-50 absolute inset-0 z-0" />
            <video autoPlay class="w-full h-full object-cover">
              <source
                src="https://cdn.coverr.co/videos/coverr-windsurfer-and-a-yacht-in-the-ocean-1930/1080p.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="flex flex-col">
          <h2 class="mt-10 text-base md:text-3xl">Works</h2>
          <p class="text-white m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            numquam. Nemo perspiciatis exercitationem, porro quidem cum
            architecto magni quae consequatur officia hic minus dignissimos
            temporibus necessitatibus aperiam quod est laboriosam?
          </p>

          <div class="flex flex-col gap-4 mt-8">
            <CollectionPreview />
          </div>
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
