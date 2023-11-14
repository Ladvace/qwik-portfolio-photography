import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import LoaderContainer from "~/components/LoaderContainer";
import Footer from "~/components/starter/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <div
        id="outer-animation-container"
        class="fixed inset-0 w-full h-screen overflow-hidden flex justify-center items-center bg-darkslate-900"
      >
        <LoaderContainer />
      </div>
      <main class="min-h-screen">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
