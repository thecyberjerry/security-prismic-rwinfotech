import Contact from "@/app/components/Contact";

/**
 * @typedef {import("@prismicio/client").Content.ContactUsSlice} ContactUsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactUsSlice>} ContactUsProps
 * @param {ContactUsProps}
 */
const ContactUs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Contact contactData={slice.primary} />
    </section>
  );
};

export default ContactUs;
