import { GetStaticProps } from "next";

const Page404 = () => {
  return <div>404</div>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};

Page404.hideLayout = true;
export default Page404;