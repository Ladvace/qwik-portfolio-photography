import { component$ } from "@builder.io/qwik";

type CollectionCardProps = {
  title?: string;
  date?: string;
  location?: string;
  class?: string[]; // Now an optional array
};

export default component$<CollectionCardProps>(
  ({ title, date, location, class: classArray }) => {
    const baseClasses = [
      "bg-white",
      "aspect-[3/4]",
      "p-3",
      "rounded-lg",
      "shadow-md",
    ];
    const allClasses = [...baseClasses, ...(classArray || [])];

    return (
      <div class={["flex flex-col cursor-pointer", allClasses]}>
        <div class="h-4/5 w-full rounded-md bg-dark-500 overflow-hidden flex justify-center items-center">
          <img
            class="object-cover object-center"
            width={300}
            height={300}
            src="https://images.pexels.com/photos/18277249/pexels-photo-18277249/free-photo-of-man-people-art-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div>
          {title && <h3 class="font-bold text-xl mb-0 mt-1">{title}</h3>}
          {date && <p class="text-sm mt-0 mb-1">{date}</p>}
          {location && <p class="text-sm m-0">{location}</p>}
        </div>
      </div>
    );
  }
);
