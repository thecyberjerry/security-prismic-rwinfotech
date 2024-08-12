import Hero from "@/app/components/Hero";
import { createClient } from "@/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.HerosectionSlice} HerosectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HerosectionSlice>} HerosectionProps
 * @param {HerosectionProps}
 */
const Herosection = async ({ slice }) => {
  const client = createClient();
  const navbar = await client.getSingle("navbar");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero navData={navbar.data} herodata={slice.primary} />
    </section>
  );
};

export default Herosection;
