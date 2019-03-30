import React from 'react'

export default class Sidebar extends React.Component{

    
   constructor(props){
    super(props)
    this.state={
         departments:[],
         categories:[],
         isLoaded:false , 
    }
}

componentDidMount() {
    fetch('https://backendapi.turing.com/departments')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            departments: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ).then(
        fetch('https://backendapi.turing.com/categories')
         .then(res => res.json())
         .then(
           (result) => {
             this.setState({
                categories:result
             })
           }
         )
      )
  }

    showcatData=()=>{
       
        if(this.state.isLoaded===true)
        {
           var listItems= this.state.departments.map((item,key)=>{
           console.log(item.name + "  "+item.description)
            {
                return <li>
                    {item.name}
                </li> 
            }              
            })
        }
        return <ul>{listItems}</ul>
    }
    showcatData2=()=>{
       
        if(this.state.isLoaded===true)
        {
           var listItems= this.state.categories.rows.map((item,key)=>{
           console.log(item.name + " raj "+item.name)
            {
                return <li>
                    {item.name}
                </li> 
            }              
            })
        }
        return <ul>{listItems}</ul>
    }

    render(){
        return(
            <div>
               <h2>Departmets</h2>
               {this.showcatData()}  
               <h2>Categories</h2>  
               {this.showcatData2()}    
            </div>
        )
    }
}