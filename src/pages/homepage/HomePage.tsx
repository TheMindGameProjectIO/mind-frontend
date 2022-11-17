import Layout from "../../components/layout/Layout";
import AuthOpportunity from "./AuthOpportunity";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs"

const HomePage = () => {
    return (
        <Layout>
            <AuthOpportunity />
            <AboutUs />
            <ContactUs />
        </Layout>
    );
}

export default HomePage;