import "../styles/globals.scss";
import Layout from "../components/Layout";

const NotFound = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default NotFound;
