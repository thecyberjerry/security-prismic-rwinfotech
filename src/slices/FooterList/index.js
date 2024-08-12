/**
 * @typedef {import("@prismicio/client").Content.FooterListSlice} FooterListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterListSlice>} FooterListProps
 * @param {FooterListProps}
 */
const FooterList = ({ slice }) => {
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FooterList;
