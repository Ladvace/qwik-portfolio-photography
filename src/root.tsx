import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "virtual:uno.css";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
        <div
          id="loader"
          class="bg-darkslate-900 text-neutral-50 text-3xl font-black uppercase flex justify-center items-center w-screen h-screen z-50 fixed top-0 bottom-0 right-0 left-0"
        >
          {/* <h1 class="loading-name">Gianmarco Cavallo</h1> */}
        </div>
      </body>
    </QwikCityProvider>
  );
});
