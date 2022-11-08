import React from "react";

const CategoryArray = [
  {
    id: "1",
    imgsrc:
      "https://th.bing.com/th/id/OIP.XoGMvXYD9_n7ugigDLLeVAHaGn?pid=ImgDet&rs=1",
    title: "smartphones",
    heading: "Smartphones",
  },
  {
    id: "2",
    imgsrc:
      "https://purepng.com/public/uploads/large/purepng.com-laptoplaptoptechnologyelectronicskeyboard-1121525119750ab9ua.png",
    title: "laptops",
    heading: "Laptops",
  },
  {
    imgsrc:
      "https://th.bing.com/th/id/OIP.yXx82ki8oTwGtYuJvxcgnAHaEe?pid=ImgDet&rs=1",
    title: "fragrances",
    heading: "Fragrances",
  },
  {
    imgsrc:
      "https://cdn.pngsumo.com/skin-care-silk-vision-beauty-products-png-800_501.png",
    title: "skincare",
    heading: "Skin-Cares",
  },
  {
    imgsrc:
      "https://www.freepngimg.com/thumb/grocery/53973-6-grocery-free-hq-image.png",
    title: "groceries",
  },
  {
    imgsrc:
      "https://www.amazinginteriordesign.com/wp-content/uploads/2016/09/40-cozy-fall-home-decor-ideas-for-your-inspiration-fi.jpg",
    title: "home-decoration",
  },
];

const Categories = (props) => {
  const Category = CategoryArray.map((category, i) => {
    return (
      <span
        className="categories"
        key={i}
        onClick={() => {
          props.setVisible(false);
          props.setVisibleTwo(true);
          props.setCurrentCategory(category.title);
        }}
      >
        <img
          className="category-icon"
          src={category.imgsrc}
          alt={category.title}
        />
        <h4>{category.title}</h4>
      </span>
    );
  });
  return <div>{props.visible && Category}</div>;
};

export default Categories;
