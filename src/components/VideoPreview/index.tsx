import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Props {
  title: string;
  client?: string;
  date?: string;
  location?: string;
  img: string;
  id: string;
}

export default component$((props: Props) => {
  const card = useSignal<HTMLDivElement | undefined>(undefined);

  return (
    <Link href={`/projects/${props.id}`}>
      <div class="flex flex-col items-center w-full">
        <header class="flex justify-center items-center text-neutral-100">
          <h3 class="m-0 font-200 font-['Satoshi']">{props.date}</h3>
          <div class="w-4 mx-2 border-neutral-100 border-1 border-solid" />
          <h3 class="m-0 font-200 font-['Satoshi']">{props.client}</h3>
        </header>
        <h2 class="relative w-max mt-0 mb-4 text-3xl">{props.title}</h2>
        <div
          ref={card}
          style={{
            "will-change": "transform",
            "transform-style": "preserve-3d",
            transition: "transform 0.5s ease-out",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
          class="shadow-3xl shadow-darkslate-50 relative flex flex-col justify-center items-center rounded-3xl overflow-hidden w-full max-w-150 max-h-100"
          onMouseMove$={(e) => {
            if (!card.value) return;

            const rect = card.value.getBoundingClientRect();
            const relX = e.pageX - rect.left;
            const relY = e.pageY - rect.top;

            const xAxis = (rect.width / 2 - relX) / 25;
            const yAxis = (rect.height / 2 - relY) / 25;

            const cappedXAxis = Math.min(Math.max(xAxis, -10), 10);
            const cappedYAxis = Math.min(Math.max(yAxis, -10), 10);

            // For the translation effect
            const translateX = (rect.width / 2 - relX) / 10;

            card.value.style.transform = `
              translate3d(0px, 0px, 0px) 
              scale3d(1, 1, 1) 
              rotateX(${cappedYAxis}deg) 
              rotateY(${cappedXAxis}deg) 
              rotateZ(0deg) 
              skew(0deg, 0deg)
            `;

            const img = card.value.querySelector("img");
            if (img) {
              img.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
            }
          }}
          onMouseLeave$={() => {
            if (card.value) {
              card.value.style.transition = "transform 0.5s ease-out";
              card.value.style.transform =
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
            }
          }}
        >
          <div class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkslate-700 border-1 border-solid border-darkslate-50 cursorpointer flex justify-center items-center rounded-full w-20 h-20 cursor-pointer hover:scale-110 transition-all ease-in-out hover:border-white">
            <div class="i-heroicons:play-20-solid text-2xl" />
          </div>
          <img
            style={{
              "will-change": "transform",
              "transform-style": "preserve-3d",
              transition: "transform 0.5s ease-out",
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            }}
            class="object-cover"
            width="1160"
            height="768"
            src={props.img}
          />
        </div>
      </div>
    </Link>
  );
});
