import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { TimelineDefinition } from "motion";
import { timeline } from "motion";
import { loaderAnimation } from "~/animations";

export default component$(() => {
  const location = useLocation();

  useVisibleTask$(() => {
    timeline(loaderAnimation as TimelineDefinition, { duration: 4 });
  });

  return <div>{location.params.id}</div>;
});
