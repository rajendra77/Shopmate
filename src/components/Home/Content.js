import React from 'react';
import Select from 'react-select'


export default class Content extends React.Component{
     
    constructor(props)
    {
      super(props)
      this.state={
        id:0,
        value:"coconut"
      }
    }   

    handleChange(event,data) {
      if(data===this.state.id)
        this.setState({value: event.target.value});
    }
    func=(data)=>{
          console.log("button id is  "+data)
      }
    mouseEnter=(data)=>{
        this.setState({
          id:data
        })
      }
   mouseOut=()=>{
        this.setState({
          id:0,
          value:''
        })
      }
    showcatData=()=>{
       
        if(this.props.isLoaded===true && this.props.cat!=[])
        {
           var listItems= this.props.cat.rows.map((item,key)=>{
            {           
                const img=`https://backendapi.turing.com/images/products/${item.thumbnail}`
                
        return <div onMouseEnter={()=>this.mouseEnter(item.product_id)}  onMouseOut={this.mouseOut} className="col-md-3 cart" style={{marginBottom:"2em"}}> 
                 <div className="product">
                      <img className="productImg" src={img} alt="new"  />
                      <select value={this.state.value} onChange={(e)=>this.handleChange(e,item.product_id)}>
                                 <option value="grapefruit">Grapefruit</option>
                                 <option value="lime">Lime</option>
                                 <option value="coconut">Coconut</option>
                                 <option value="mango">Mango</option>
                               </select>
                      <div className="productText">                
                         <p className='productTitle'>{item.name}</p>
                         <p className='price'>${item.price}</p>
                         <p className='discount'>${item.discounted_price>0 ? `${item.discounted_price}` : `${0}`}  </p>   
                         <button onClick={()=>this.func(item.product_id)}>Click</button>                
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