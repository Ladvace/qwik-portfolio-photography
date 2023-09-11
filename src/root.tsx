import { component$, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "virtual:uno.css";
import "./global.css";
import Lenis from "@studio-freight/lenis";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  useVisibleTask$(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" class="overflow-hidden">
        <RouterOutlet />
        <div
          id="global-loader"
          class="fixed inset-0 opacity-100 bg-darkslate-900 text-neutral-50 text-3xl font-black uppercase flex flex-col justify-center items-center w-screen h-screen z-50"
        >
          <h1 class="loading-name text-center m-0 leading-15">John Smith</h1>
        </div>
      </body>
    </QwikCityProvider>
  );
});
