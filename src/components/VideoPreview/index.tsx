import { component$, useSignal } from "@builder.io/qwik";

interface Props {
  title: string;
  client?: string;
  date?: string;
  location?: string;
  img: string;
}

export default component$((props: Props) => {
  const card = useSignal<HTMLDivElement | undefined>(undefined);

  return (
    <div class="flex flex-col items-center w-full">
      <header class="flex justify-center items-center text-neutral-100">
        <h3 class="m-0 font-200 font-['Satoshi']">10/05/2021</h3>
        <div class="w-4 mx-2 border-neutral-100 border-1 border-solid" />
        <h3 class="m-0 font-200 font-['Satoshi']">Armani</h3>
      </header>
      <h2 class="relative w-max mt-0 mb-4 text-3xl">{props.title}</h2>
      <div
        ref={card}
        style={{
          "will-change": "transform",
          "transform-style": "preserve-3d",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(1.0118deg) rotateY(0.002deg) rotateZ(0deg) skew(0deg, 0deg)",
        }}
        class="relative flex flex-col justify-center items-center rounded-3xl overflow-hidden w-full max-w-150 max-h-100"
        onMouseMove$={(e) => {
          if (!card.value) return;

          const rect = card.value.getBoundingClientRect();
          const relX = e.pageX - rect.left;
          const relY = e.pageY - rect.top;

          const xAxis = (rect.width / 2 - relX) / 25;
          const yAxis = (rect.height / 2 - relY) / 25;

          const cappedXAxis = Math.min(Math.max(xAxis, -10), 10);
          const cappedYAxis = Math.min(Math.max(yAxis, -10), 10);

          // For the translation effect, the farther the cursor is from the center,
          // the more the image should translate. This can be modified.
          const translateX = (rect.width / 2 - relX) / 10; // Adjust the divisor as needed

          card.value.style.transform = `
              translate3d(0px, 0px, 0px) 
              scale3d(1, 1, 1) 
              rotateX(${cappedYAxis}deg) 
              rotateY(${cappedXAxis}deg) 
              rotateZ(0deg) 
              skew(0deg, 0deg)
            `;

          // Apply the translation to the image
          const img = card.value.querySelector("img");
          if (img) {
            img.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
          }
        }}
      >
        <div class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkslate-700 border-1 border-solid border-darkslate-50 cursorpointer flex justify-center items-center rounded-full w-20 h-20 cursor-pointer">
            <div class="i-heroicons:play-20-solid text-2xl" />
        </div>
        <img
          style={{
            "will-change": "transform",
            "transform-style": "preserve-3d",
            transform:
              "translate3d(-0.013px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
          class="object-cover"
          width="1160"
          height="768"
          src={props.img}
        />
      </div>
    </div>
  );
});
