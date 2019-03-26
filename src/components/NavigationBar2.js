import React from 'react';
import {FaShoppingBag} from 'react-icons/fa'
export default class NavigationBar2 extends React.Component{
    render(){
        return(
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <a class="navbar-brand" href="#">SHOPMATE</a>


  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Daily Deals</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Sell</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Help & Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Shoes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Brands</a>
    </li>
    

  </ul>
 
          <span >Hello <FaShoppingBag /> </span>
       
</nav>
        )
    }
}