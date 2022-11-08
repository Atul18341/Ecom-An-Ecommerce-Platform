import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Categories from "./components/categories";
import CategoryItems from "./components/category-items";

import Footer from './components/footer';
import axios from "axios";
const APILink = "https://dummyjson.com/products";

function App() {
  const [visible, setVisible] = useState(true);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  const fetchApiData = async () => {
    try {
      const { data } = await axios.get(APILink);
      setProducts(data.products);
    } catch (err) {
      console.log("err-", err);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  return (
    <div>
      <Header
        setVisible={setVisible}
        products={products}
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
        searchVisible={searchVisible}
        setSearchVisible={setSearchVisible}
      />

      <Categories
        visible={visible}
        setVisible={setVisible}
        setVisibleTwo={setVisibleTwo}
        setCurrentCategory={setCurrentCategory}
      />

      <CategoryItems
        visible={visible}
        setVisible={setVisible}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        visibleTwo={visibleTwo}
        setVisibleTwo={setVisibleTwo}
        products={products}
        setProducts={setProducts}
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
      />
      <Footer />
    </div>
  );
}

export default App;
