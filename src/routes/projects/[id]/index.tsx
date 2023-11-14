import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { timeline } from "motion";
import { loaderAnimation } from "~/animations";

export default component$(() => {
  const location = useLocation();

  useVisibleTask$(() => {
    timeline(loaderAnimation, { duration: 4 });
  });

  return <div class="text-white g">ID: {location.params.id}</div>;
});
