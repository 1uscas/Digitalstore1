import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductListingPage from "./ProductListingPage";
import Header from "../components/Header";
import PageLayout from "./PageLayout";
import NotFound from "./NotFound";
import ProductListing from "../components/ProductListing";
import ProductDetails from "../components/ProductDetails";


const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
       
         <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/produtos" element={<ProductListingPage />} />
                <Route path="/produto/:id/:nome" element={<ProductListing/>} />
                <Route path="/DetalhesDoProduto" element={<ProductDetails/>}>     </Route>
            </Route>

            <Route path="*" element={<NotFound />}/>
            
         </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Paths;