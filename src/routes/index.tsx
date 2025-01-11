import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


import Hero from "~/components/widgets/Hero";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      
 
      {/* <Features id="Exchanges"
        highlight="Exchanges"
        title="Where to Buy KOIN"
        subtitle="We're currently listed on Chainge, Kaspiano and KSPR Bot with more exchanges coming soon."
        items={[
        
        ]}
      /> */}


   

    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
