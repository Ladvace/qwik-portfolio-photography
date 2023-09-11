import { component$ } from "@builder.io/qwik";
import CollectionCard from "./CollectionCard";

interface Props {
  title: string;
  client?: string;
  date?: string;
  location?: string;
}

export default component$((props: Props) => {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="flex justify-center items-center">
        <h3 class="relative w-max m-0">TITOLO</h3>
        <div class="w-4 mx-4 border-white border-1 border-solid" />
        <h3>Armani</h3>
      </div>
      <div class="relative w-full max-w-1/2 h-full min-h-60 md:min-h-100 max-w-3xl flex justify-center items-center text-black">
        <CollectionCard
          class={[
            "absolute",
            "left-4",
            "bottom-0",
            "z-10",
            "-rotate-10 hover:-rotate-20 transition duration-100 ese-in-out",
            "transform",
            "w-1/3",
            "scale-80",
          ]}
        />
        <CollectionCard
          {...props}
          class={[
            "absolute",
            "z-30",
            "-rotate-3 hover:rotate-3 transition duration-100 ese-in-out",
            "w-1/3",
            "shadow-xl shadow-dark-500",
          ]}
        />
        <CollectionCard
          class={[
            "absolute",
            "right-4",
            "bottom-0",
            "z-10",
            "rotate-10 hover:rotate-20 transition duration-100 ese-in-out",
            "w-1/3",
            "scale-80",
          ]}
        />
      </div>
    </div>
  );
});
