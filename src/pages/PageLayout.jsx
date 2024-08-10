import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

const PageLayout = () => {
    return ( 
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
     );
}
 
export default PageLayout;