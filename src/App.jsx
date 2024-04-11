import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Rules from "./components/Rules";
import SecurityTemplate from "./components/SecurityTemplate";
import TelegramBot from "./components/TelegramBot";
import TemplateWeb from "./components/TemplateWeb/TemplateWeb";
import ProductsList from "./components/ProductsList";
import { useLayoutEffect } from "react";
import Team from "./components/Team";



function App() {
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  return (
    <div className="w-full mx-auto container md:px-4 px-2 font-sans ">
      <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/team" element={<Team />}/>
        
        <Route path="/template" element={<TemplateWeb />} />
        <Route path="/template/telegram" element={<TelegramBot />} />
        <Route path="/template/siber" element={<SecurityTemplate />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/rule" element={<Rules/>}/>
      </Routes>
      <Footer />
        
        </Wrapper>
    </div>
  );
}

export default App;
