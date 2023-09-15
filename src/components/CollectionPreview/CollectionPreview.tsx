import { component$ } from "@builder.io/qwik";
import CollectionCard from "./CollectionCard";
import { Link } from "@builder.io/qwik-city";

interface Props {
  title: string;
  client?: string;
  date?: string;
  location?: string;
  imgs: string[];
  id: string;
}

export default component$((props: Props) => {
  // useVisibleTask$(() => {
  //   inView(`cards-container-${props.title}`, ({ target }) => {
  //     animate(
  //       target,
  //       { scale: [0, 1] },
  //       { delay: 0.5, duration: 0.9, easing: "ease-in-out" }
  //     );
  //   });
  // });

  return (
    <Link href={`/projects/${props.id}`}>
      <div class="flex flex-col justify-center items-center">
        <header class="flex justify-center items-center text-neutral-100">
          <h3 class="m-0 font-200 font-['Satoshi']">{props.date}</h3>
          <div class="w-4 mx-2 border-neutral-100 border-1 border-solid" />
          <h3 class="m-0 font-200 font-['Satoshi']">{props.client}</h3>
        </header>
        <h2 class="relative w-max m-0 text-3xl">{props.title}</h2>
        <div
          id={`cards-container-${props.title}`}
          class="relative w-full max-w-1/2 h-full min-h-60 md:min-h-100 max-w-3xl flex justify-center items-center text-black origin-bottom-center"
        >
          <CollectionCard
            img={props.imgs[0]}
            class={[
              "absolute",
              "left-4",
              "bottom-0",
              "z-10",
              "-rotate-10 hover:-rotate-20 transition duration-100 ese-in-out",
              "transform",
              "w-1/3",
              "scale-80",
              // "origin-[0%_100%]",
            ]}
          />
          <CollectionCard
            img={props.imgs[1]}
            class={[
              "absolute",
              "z-30",
              "-rotate-3 hover:rotate-3 transition duration-100 ese-in-out",
              "w-1/3",
              "shadow-xl shadow-dark-500",
              // "origin-[50%_100%]",
            ]}
          />
          <CollectionCard
            img={props.imgs[2]}
            class={[
              "absolute",
              "right-4",
              "bottom-0",
              "z-10",
              "rotate-10 hover:rotate-20 transition duration-100 ese-in-out",
              "w-1/3",
              "scale-80",
              // "origin-[100%_100%]",
            ]}
          />
        </div>
      </div>
    </Link>
  );
});
