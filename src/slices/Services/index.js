import Services from "@/app/components/Services";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSlice} ServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSlice>} ServicesProps
 * @param {ServicesProps}
 */
const Service = ({ slice }) => {
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Services serviceData={slice.primary} />
    </section>
  );
};

export default Service;
