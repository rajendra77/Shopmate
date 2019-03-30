import React from 'react';
export default class Content extends React.Component{

    
    showcatData=()=>{
       
        if(this.props.isLoaded===true && this.props.cat!=[])
        {
           var listItems= this.props.cat.rows.map((item,key)=>{
        
            {
                const img=`https://backendapi.turing.com/images/products/${item.thumbnail}`
            
                return <div className="col-md-4" style={{marginBottom:"2em"}}> 
                        <div className="product">
                         <img className="productImg" src={img} alt="new"  />
                          <div className="productText">
                             <p className='productTitle'>{item.name}</p>
                             <p>Price ${item.price}</p>
                             <p>discounted price ${item.discounted_price}</p>
                             <p>{item.description.length<20 ? `${item.description}` : `${item.description.substring(0,80)}...`}</p>
                           </div>
                        </div>
                       </div>    
            }              
            })
        }
        return <div className="row">{listItems}</div>
    }
   


    render(){
      
        return(
            <div id="about" className="container">
              {this.showcatData()}                
            </div>
        )
    }
}