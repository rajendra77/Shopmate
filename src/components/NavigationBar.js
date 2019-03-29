import React from 'react';
export default class NavigationBar extends React.Component{
    render(){
        return(
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                
                <a class="navbar-brand" href="#">SignIN</a>
                <a class="navbar-brand" href="#">Register</a>

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
                 
               </ul>
 
       </nav>

        )
    }
}