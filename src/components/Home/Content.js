import React from 'react';
export default class Content extends React.Component{

    
    showcatData=()=>{
       
        if(this.props.isLoaded===true && this.props.cat!=[])
        {
           var listItems= this.props.cat.rows.map((item,key)=>{
        
            {
                const img=`https://backendapi.turing.com/images/products/${item.thumbnail}`
            
                return <div className="col-md-3" style={{marginBottom:"2em"}}> 
                        <div className="product">
                         <img className="productImg" src={img} alt="new"  />
                          <div className="productText">
                             <p className='productTitle'>{item.name}</p>
                             <p className='price'>${item.price}</p>
                             <p className='discount'>${item.discounted_price>0 ? `${item.discounted_price}` : `${0}`}  </p>
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