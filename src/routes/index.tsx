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
import type { DocumentHead } from "@builder.io/qwik-city";
import type { TimelineDefinition } from "motion";
import { animate, stagger, timeline } from "motion";
import Header from "~/components/starter/header/header";
import CollectionPreview from "~/components/CollectionPreview/CollectionPreview";
import Lenis from "@studio-freight/lenis";
import VideoPreview from "~/components/VideoPreview";
import { loaderAnimation } from "~/animations";

interface ILenis {
  lenis: NoSerialize<Lenis> | null;
}

export const lenisContext = createContextId<ILenis>("context.lenis");

export default component$(() => {
  const state = useStore<ILenis>({ lenis: null });
  useContextProvider(lenisContext, state);

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
            <CollectionPreview
              id="38jdej"
              title="India"
              date="10/05/2021"
              client="Armani"
              imgs={[
                "https://images.pexels.com/photos/3536704/pexels-photo-3536704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/18277249/pexels-photo-18277249/free-photo-of-man-people-art-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/3019411/pexels-photo-3019411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              ]}
            />
            <CollectionPreview
              id="38jdej"
              title="Dark"
              date="10/05/2021"
              client="Armani"
              imgs={[
                "https://images.pexels.com/photos/8686618/pexels-photo-8686618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/16943740/pexels-photo-16943740/free-photo-of-light-dark-vintage-lamp.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                "https://images.pexels.com/photos/18048413/pexels-photo-18048413/free-photo-of-vintage-dresser-under-mirror.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
              ]}
            />
            <CollectionPreview
              id="38jdej"
              title="Nature"
              date="10/05/2021"
              client="Armani"
              imgs={[
                "https://images.pexels.com/photos/17233954/pexels-photo-17233954/free-photo-of-house-in-a-grassy-land.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                "https://images.pexels.com/photos/12583003/pexels-photo-12583003.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                "https://images.pexels.com/photos/18210785/pexels-photo-18210785/free-photo-of-road-near-green-mountain-slope.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
              ]}
            />
          </div>
          <div
            id="videos"
            class="relative flex flex-col items-center gap-20 mt-16 pt-30"
          >
            <h4 class="absolute m-0 top-0 left-1/2 -translate-x-1/2 text-neutral-200 text-8xl md:text-9xl z-0 opacity-50">
              Videos
            </h4>
            <VideoPreview
              id="38jdej"
              title="Motion"
              date="10/05/2021"
              client="Armani"
              img="https://images.pexels.com/photos/11948417/pexels-photo-11948417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <VideoPreview
              id="38jdej"
              title="Motion"
              date="10/05/2021"
              client="Armani"
              img="https://images.pexels.com/photos/11948417/pexels-photo-11948417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <VideoPreview
              id="38jdej"
              title="Motion"
              date="10/05/2021"
              client="Armani"
              img="https://images.pexels.com/photos/11948417/pexels-photo-11948417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
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
