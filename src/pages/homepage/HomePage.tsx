import AuthOpportunity from "./AuthOpportunity";
import AboutUs from "./AboutGame";
import ContactUs from "./ContactUs";
import Layout from "../../components/layout/Layout";

const HomePage = () => {
  return (
    <Layout currentLink={1}>
      <AuthOpportunity />
      <AboutUs />
      <ContactUs />
    </Layout>
  );
};

export default HomePage;
