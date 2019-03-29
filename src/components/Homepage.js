import React from 'react';
import { createRequireFromPath } from 'module';
export default class Homepage extends React.Component{

   constructor(props){
       super(props)
       this.state={
           status:false
       }
   }

    showcat=()=>{
        this.setState({
            status:true
        })
    }
    
    showcatData=()=>{
       
        if(this.state.status===true)
        {
           var listItems= this.props.cat.rows.map((item,key)=>{
            const img=`https://backendapi.turing.com/images/products/${item.thumbnail}`
            
                return <li> 
                         <img src={img} alt="new"  />
                         <p>{item.name}</p>
                         <p>Price ${item.price}</p>
                         <p>discounted price ${item.discounted_price}</p>
                         <p>{item.description}</p>
                        </li>
            })
        }
        return <ul>{listItems}</ul>
    }
    render(){
        
       
        return(
            <div id="about" class="container-fluid">
            <div class="row">
                <div class="col-md-8 col-xs-12">
                   <h3>About Us{this.props.data}</h3>
                      <button onClick={this.showcat}>Show Cat</button>
                      <p class="p1">
                        One of the largest privately-owned fitness centers in the Grand Strand area! 
                      </p>
                
                          {this.showcatData()}
                      
                     
                </div>
            </div>
  
            </div>
        )
    }
}