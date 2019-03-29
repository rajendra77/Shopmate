import React from 'react';
export default class HomepageImage extends React.Component{
    render(){
        return(
            <div class="jumbotron text-center">
              <h1>SHOPMATE<span class="glyphicon glyphicon-move"></span></h1>
           
             <form action="">
                <div class="input-group">
                    <input type="email" class="form-control"  size="30" placeholder="Email Address" />
                  
                <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">Subscribe</button>
                </div>
               </div>
             </form>
           </div>
        )
    }
}