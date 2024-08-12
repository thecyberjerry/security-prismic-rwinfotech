import Credentials from "@/app/components/Credentials";

/**
 * @typedef {import("@prismicio/client").Content.CredentialsSlice} CredentialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CredentialsSlice>} CredentialsProps
 * @param {CredentialsProps}
 */
const Creds = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Credentials creds={slice.primary} />
    </section>
  );
};

export default Creds;
