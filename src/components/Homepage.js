import React from 'react';
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
       
        if(this.props.isLoaded===true)
        {
           var listItems= this.props.cat.rows.map((item,key)=>{
            const img=`https://backendapi.turing.com/images/products/${item.thumbnail}`
            
                return <div  className="col-md-4" style={{marginBottom:"2em"}}> 
                     <div className="recipes__box">
                     <img className="recipe_box-img" src={img} alt="new"  />
                       <div className="recipe__text">
                          <p className='recipes__title'>{item.name}</p>
                         <p>Price ${item.price}</p>
                         <p>discounted price ${item.discounted_price}</p>
                         <p>{item.description}</p>
                        </div>
                     </div>
                    </div>
                       
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