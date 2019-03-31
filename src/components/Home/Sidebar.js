import React from 'react'

export default class Sidebar extends React.Component{

   constructor(props){
    super(props)
    this.state={
         departments:[],
         categories:[],
         isLoadedCat:false , 

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
      )
  }
  
  showCat= (e) =>{
    this.props.getDepartment(e.currentTarget.dataset.id);
    
   fetch(`https://backendapi.turing.com/categories/inDepartment/${e.currentTarget.dataset.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                isLoadedCat: true,
                categories: result
            });
          },
          (error) => {
            this.setState({
                isLoadedCat: true,
              error
            });
          }
        )
    }

    showcatData=()=>{
       
        if(this.state.isLoaded===true )
        {
           var listItems= this.state.departments.map((item,key)=>{   
            {           
                return <li onClick={this.showCat}  data-id={item.department_id}>
                          {item.name}
                      </li> 
            }              
            })
        }
        return <ul>{listItems}</ul>
    }

    showcatData2=()=>{

        if(this.state.isLoadedCat===true)
        {
           var listItems= this.state.categories.map((item,key)=>{  
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