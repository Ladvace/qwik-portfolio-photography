import { component$ } from "@builder.io/qwik";

export const Column = component$(
  (props: { isMiddle?: boolean; isEdge?: boolean; isReversed?: boolean }) => {
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
            "flex flex-col flex-none justify-between items-stretch w-screen h-full",
          ]}
        >
          <div id="img-container" class="w-screen h-screen box-border relative overflow-hidden rounded-2xl ">
            <img
              width={300}
              height={100}
              class="w-full h-full min-w-full rounded-2xl object-cover"
              src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div id="img-container" class="w-screen h-screen box-border relative overflow-hidden rounded-2xl ">
            <img
              width={300}
              height={100}
              class="w-full h-full min-w-full rounded-2xl object-cover"
              src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div
            id="img-container"
            class={[
              props.isMiddle ? "isMiddle p-8" : "",
              "w-screen h-screen box-border relative overflow-hidden rounded-2xl",
            ]}
          >
            <img
              width={300}
              height={100}
              class="w-full h-full min-w-full rounded-2xl object-cover"
              src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div id="img-container" class="w-screen h-screen box-border relative overflow-hidden rounded-2xl ">
            <img
              width={300}
              height={100}
              class="w-full h-full min-w-full rounded-2xl object-cover"
              src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div id="img-container" class="w-screen h-screen box-border relative overflow-hidden rounded-2xl ">
            <img
              width={300}
              height={100}
              class="w-full h-full min-w-full rounded-2xl object-cover"
              src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
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
