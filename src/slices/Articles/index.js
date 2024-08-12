import Articles from "@/app/components/Articles";

/**
 * @typedef {import("@prismicio/client").Content.ArticlesSlice} ArticlesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlesSlice>} ArticlesProps
 * @param {ArticlesProps}
 */
const Article = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Articles articlesData={slice.primary} />
    </section>
  );
};

export default Article;
