import Testimonials from "@/app/components/Testimonials";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonial = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Testimonials testimonialdata={slice.primary} />
    </section>
  );
};

export default Testimonial;
