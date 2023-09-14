import { component$ } from "@builder.io/qwik";

const images = [
  "https://images.pexels.com/photos/17860201/pexels-photo-17860201/free-photo-of-yellow-full-moon-in-the-evening-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/18091901/pexels-photo-18091901/free-photo-of-light-city-road-traffic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18306269/pexels-photo-18306269.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function getImagesForColumn(props: {
  isMiddle?: boolean;
  isEdge?: boolean;
  isReversed?: boolean;
}) {
  const columnImages = [...images];

  if (props.isReversed) {
    columnImages.reverse();
  }

  return columnImages;
}

export const Column = component$(
  (props: { isMiddle?: boolean; isEdge?: boolean; isReversed?: boolean }) => {
    const columnImages = getImagesForColumn(props);
    return (
      <div
        id="column-container"
        class="flex flex-col even:justify-end justify-start items-stretch px-[7vh]"
      >
        <div
          id="inner-column-container"
          class={[
            props.isMiddle ? "isCenter" : "",
            props.isReversed ? "isReversed" : "",
            props.isEdge ? "isEdge" : "",
            "flex flex-col flex-none justify-between items-stretch w-screen h-full will-change-transform",
          ]}
        >
          {columnImages.map((imageUrl, index) => (
            <div
              key={index}
              id="img-container"
              class={[
                index === 2 && props.isMiddle ? "isMiddle p-8" : "",
                "w-screen h-screen box-border relative overflow-hidden rounded-2xl",
              ].join(" ")}
            >
              <img
                alt={`Image ${index}`}
                width={300}
                height={100}
                class="w-full h-full min-w-full rounded-2xl object-cover"
                src={imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default component$(() => {
  return (
    <div
      id="animation-container"
      class="scale-[0.1] flex justify-start items-stretch h-[561vh]"
    >
      <Column isEdge />
      <Column isReversed />
      <Column isMiddle />
      <Column isReversed />
      <Column isEdge />
    </div>
  );
});
