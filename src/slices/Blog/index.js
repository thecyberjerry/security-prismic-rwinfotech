/**
 * @typedef {import("@prismicio/client").Content.BlogSlice} BlogSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogSlice>} BlogProps
 * @param {BlogProps}
 */
import { PrismicRichText } from "@prismicio/react";
const Blog = ({ slice }) => {
  return (
    <section
      className="container"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>
        {slice.primary.content.map((item, index) => {
          return <PrismicRichText key={index} field={item.content} />;
        })}
      </>
    </section>
  );
};

export default Blog;
