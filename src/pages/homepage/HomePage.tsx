import Layout from "../../components/layout/Layout";
import AuthOpportunity from "./AuthOpportunity";
import AboutUs from "./AboutGame";
import ContactUs from "./ContactUs";
import Copyright from "../../components/ui/Copyright";

const HomePage = () => {
  return (
    <div>
      <AuthOpportunity />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
