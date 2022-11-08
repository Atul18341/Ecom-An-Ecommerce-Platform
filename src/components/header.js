import React from "react";
import logo from "../assets/img/logo.png";
import { useState } from "react";




const Header=(props)=>{
   const [searchParam] = useState(["title", "category"]);
   
   
   const searchResult =props.products.filter((item) => {
      return searchParam.some((newItem) => {
          return (
              item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(props.searchProduct.toLowerCase()) > -1
          );
      });
  });
  
   return(
      <>
       <div className="Header">
         <span className="logo">
            <img src={logo} width="100px" height="100px" alt="logo"/>
            
         </span>
         <span id="title">E-com</span>
         <div className="search" style={{float:"right"}}>
            <form>
          <input id="search-field" type="search" value={props.searchProduct} placeholder="Search by title" onChange={(e) =>props.setSearchProduct(e.target.value)} onInput={()=>{props.setSearchVisible(true);props.setVisible(false)}} />
          </form>
          
         </div>
        
       </div>
       {props.searchVisible && (searchResult.map((item,i)=>{
          return <span className="products" key={i}><img src={item.thumbnail} alt={item.title}/><h4>{item.title}</h4>${item.price}</span>
         })
      )}
       </>
   )
}
export default Header

