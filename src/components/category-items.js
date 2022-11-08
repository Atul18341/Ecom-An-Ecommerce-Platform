import React from "react";
import { useState, useEffect } from "react";
const CategoryItems = (props) => {
  const [filterData, setFilterData] = useState("");

  const product = props.products.map((item, i) => {
    return item.category === props.currentCategory ? (
      <>
        <span className="products" key={i}>
          <img src={item.thumbnail} alt={item.title} />
          <h4>{item.title}</h4>${item.price}
        </span>
      </>
    ) : null;
  });

  const sortData = () => {
    if (filterData === "HighToLow")
      props.setProducts(props.products.sort((a, b) => a.price - b.price));
    else props.setProducts(props.products.sort((a, b) => b.price - a.price));
  };

  useEffect(() => {
    sortData();
  }, [filterData]);

  const button = `<div align="right">
    <button
      onClick={() => {
        setFilterData("HighToLow");
      }}
    >
      Price-High to Low
    </button>
    <button onClick={()=>setFilterData("LowToHigh")}>Price-Low to High</button>
  </div>`;

  return (
    <>
      <h2 align="center">{props.currentCategory}</h2>
      <div>
        <button className="btn"
          onClick={() => {
            props.setVisible(true);
            props.setVisibleTwo(false);
            props.setCurrentCategory("");
            props.setSearchVisible(false);
          }}
        >
          Back
        </button>
      </div>
      <div align="right">
        <button
          className="btn"
          onClick={() => {
            setFilterData("HighToLow");
          }}
        >
          Price-High to Low
        </button>
        <button className="btn" onClick={() => setFilterData("LowToHigh")}>
          Price-Low to High
        </button>
      </div>
      {props.visibleTwo && product}
    </>
  );
};
export default CategoryItems;
