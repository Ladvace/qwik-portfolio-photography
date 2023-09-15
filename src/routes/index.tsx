import type { NoSerialize } from "@builder.io/qwik";
import {
  component$,
  useVisibleTask$,
  $,
  createContextId,
  useContextProvider,
  useStore,
  noSerialize,
} from "@builder.io/qwik";
import SplitType from "split-type";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import type { TimelineDefinition } from "motion";
import { animate, stagger, timeline } from "motion";
import Header from "~/components/starter/header/header";
import CollectionPreview from "~/components/CollectionPreview/CollectionPreview";
import Lenis from "@studio-freight/lenis";
import VideoPreview from "~/components/VideoPreview";
import { loaderAnimation } from "~/animations";
import { getContentfulClient } from "~/client";
import { format } from "date-fns";
import { PhotoProject, VideoProject } from "~/types";

interface ILenis {
  lenis: NoSerialize<Lenis> | null;
}

export const lenisContext = createContextId<ILenis>("context.lenis");

export const usePhotoProjects = routeLoader$(async (requestEvent) => {
  const contentful = getContentfulClient({
    space: requestEvent.env.get("CONTENTFUL_SPACE_ID") as string,
    environment: requestEvent.env.get("CONTENTFUL_ENVIROMENT") as string,
    accessToken: requestEvent.env.get("CONTENTFUL_ACCESS_TOKEN") as string,
  });

  const entries = await contentful.getEntries({ content_type: "photoProject" });
  return entries.items as PhotoProject[];
});

export const useVieoProjects = routeLoader$(async (requestEvent) => {
  const contentful = getContentfulClient({
    space: requestEvent.env.get("CONTENTFUL_SPACE_ID") as string,
    environment: requestEvent.env.get("CONTENTFUL_ENVIROMENT") as string,
    accessToken: requestEvent.env.get("CONTENTFUL_ACCESS_TOKEN") as string,
  });

  const entries = await contentful.getEntries({ content_type: "videoProject" });

  return entries.items as VideoProject[];
});

export default component$(() => {
  const state = useStore<ILenis>({ lenis: null });
  useContextProvider(lenisContext, state);
  const photoProjects = usePhotoProjects();
  const videoProjects = useVieoProjects();

  useVisibleTask$(() => {
    new SplitType("#name", {
      types: "words",
      wordClass: "word origin-left",
    });
    const sequence = [
      ...loaderAnimation,
      [
        "#outer-container",
        { opacity: [0, 1] },
        { duration: 0.5, easing: "ease-in-out", at: "-0.4" },
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

    animate(
      "#scroll-loader-bar",
      { height: ["10%", "120%"], scaleX: [0.3, 2] },
      { repeat: Infinity, duration: 2, direction: "alternate" }
    );
  });

  useVisibleTask$(() => {
    const lenis = new Lenis();

    state.lenis = noSerialize(lenis);

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const handleScroll = $(() => {
    const scrollLoader = document.getElementById("scroll-loader");
    if (!scrollLoader) return;
    if (window.scrollY > 0) {
      scrollLoader.style.opacity = "0";
    } else {
      scrollLoader.style.opacity = "1000";
    }
  });

  return (
    <div class="flex flex-col" document:onscroll$={handleScroll}>
      <div
        id="outer-container"
        class="z-0 w-screen h-full max-w-[1920px] p-8 box-border opacity-0 origin-bottom-center flex flex-col"
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
                  John Smith
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

            <div
              id="scroll-loader"
              class="absolute bottom-10 right-10 w-23 opacity-100 transition-all duration-500 ease-in-out"
            >
              <div
                id="scroll-loader-bar"
                class="origin-top absolute right-0 top-0 w-0.5 h-full rounded-full bg-primary-500"
              />
              <p class="m-0 text-3xl font-sans font-black">Scroll</p>
            </div>
          </div>
        </div>
        <div
          id="about"
          class="h-screen flex flex-col justify-center items-center"
        >
          <h2 class="mt-10 text-6xl md:text-8xl m-0">Who am I?</h2>
          <p class="text-white mb-0 text-2xl md:text-4xl max-w-4xl font-sans text-center p-4 mt-4 md:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            numquam. Nemo perspiciatis exercitationem, porro quidem cum
            architecto magni quae consequatur officia hic minus dignissimos
            temporibus necessitatibus aperiam quod est laboriosam?
          </p>
        </div>
        <div id="works" class="flex flex-col">
          <div id="photos" class="relative flex flex-col gap-20 mt-16 pt-30">
            <h4 class="absolute m-0 top-0 left-1/2 -translate-x-1/2 text-neutral-200 text-8xl md:text-9xl z-0 opacity-50">
              Photos
            </h4>
            {photoProjects.value.map((project) => (
              <CollectionPreview
                key={project.sys.id}
                id={project.sys.id}
                title={project.fields.title}
                date={format(
                  new Date(videoProjects.value[0].fields.projectDate),
                  "MMMM dd, yyyy"
                )}
                client={project.fields.clientName}
                imgs={project.fields.photos.map(
                  (photo) => photo.fields.file.url
                )}
              />
            ))}
          </div>
          <div
            id="videos"
            class="relative flex flex-col items-center gap-20 mt-16 pt-30"
          >
            <h4 class="absolute m-0 top-0 left-1/2 -translate-x-1/2 text-neutral-200 text-8xl md:text-9xl z-0 opacity-50">
              Videos
            </h4>
            {videoProjects.value.map((project) => (
              <VideoPreview
                key={project.sys.id}
                id={project.sys.id}
                title={project.fields.title}
                date={format(
                  new Date(videoProjects.value[0].fields.projectDate),
                  "MMMM dd, yyyy"
                )}
                client={project.fields.clientName}
                coverImage={project.fields.coverImage.fields.file.url}
              />
            ))}
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
