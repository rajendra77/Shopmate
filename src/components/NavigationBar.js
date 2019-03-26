import React from 'react';
import {FaShoppingBag} from 'react-icons/fa'
export default class NavigationBar extends React.Component{
    render(){
        return(
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <a class="navbar-brand" href="#">SHOPMATE</a>


  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Women</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Men</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Kids</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Shoes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Brands</a>
    </li>
    

  </ul>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
    <button class="btn btn-success" type="submit">Search</button>
   </form>

          <span >Hello <FaShoppingBag /> </span>
       
</nav>
        )
    }
}