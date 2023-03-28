import React from "react";
import './Buy.css';
const Buy=({img,name,des,price})=>{
    return(
    <div>   
<div className="card" id="car">
  <img src={img} alt="product"></img>
  <div className="card-body">
<h1 className="card-title">{name}</h1>
<p className="card-text">{des}</p>
<p className="card-text">{price}</p>
<a href="#" className="btn btn-primary">Show details</a>
  </div>
</div>

</div>


    )
};
export default Buy;




