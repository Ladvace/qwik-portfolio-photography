import { component$ } from "@builder.io/qwik";

type CollectionCardProps = {
  title?: string;
  date?: string;
  image?: string;
  location?: string;
  class?: string[]; // Now an optional array
  img: string;
};

export default component$<CollectionCardProps>(
  ({ title, date, location, class: classArray, img }) => {
    const baseClasses = [
      "bg-white",
      "aspect-[3/4]",
      "p-3",
      "rounded-lg",
      "shadow-md",
    ];
    const allClasses = [...baseClasses, ...(classArray || [])];

    return (
      <figure class={["flex flex-col cursor-pointer", allClasses]}>
        <div class="h-4/5 w-full rounded-md bg-dark-500 overflow-hidden flex justify-center items-center">
          <img
            alt={`${title} card image`}
            class="object-cover object-center"
            width={300}
            height={300}
            src={img}
          />
        </div>
        <figcaption>
          {title && <h3 class="font-bold text-xl mb-0 mt-1">{title}</h3>}
          {date && <p class="text-sm mt-0 mb-1">{date}</p>}
          {location && <p class="text-sm m-0">{location}</p>}
        </figcaption>
      </figure>
    );
  }
);
