import "./main.css";
import Header from "./components/Header";
import Sale from "./components/Sale";
import FlashSale from "./components/FlashSale";
import ProductPortfolio from "./components/ProductPortfolio";
import ProductTrends from "./components/ProductTrends";
import Footer from "./components/Footer";
import ProductOfSchool from "./components/ProductOfSchool";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import DetailProduct from "./components/DetailProduct";
import Account from "./components/account/Account";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/detail" element={<DetailProduct></DetailProduct>}></Route>
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
