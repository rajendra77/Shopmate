import React from 'react'

export default class Sidebar extends React.Component{

   constructor(props){
    super(props)
    this.state={
         departments:[],
         categories:[],
         isLoadedCat:false ,
         activeDepartment:null,
         activeCategories:null
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
    var position=e.currentTarget.dataset.id
    
      if(this.state.activeDepartment === position) {
        this.setState({activeDepartment : null})
      } else {
        this.setState({activeDepartment : position})
      }

   fetch(`https://backendapi.turing.com/categories/inDepartment/${e.currentTarget.dataset.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                isLoadedCat: true,
                categories: result,
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

    myColorDepartment = (position) =>{
        if (this.state.activeDepartment == position) {
            return "blue";
          }
          else
            return "";
    }
    myColorCategories = (position) =>{
        if (this.state.activeCategories == position) {
            return "blue";
          }
          else
            return "";
    }


    showcatData=()=>{
       
        if(this.state.isLoaded===true)
        {
           var listItems= this.state.departments.map((item,key)=>{   
            {           
                return <li style={{background: this.myColorDepartment(item.department_id)}} onClick={this.showCat}  data-id={item.department_id}>
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
                 return <li style={{background: this.myColorCategories(item.category_id)}} onClick={this.showCatPro} data-id={item.category_id}>
                            {item.name}
                       </li> 
               }                          
            })
        }
        return <ul>{listItems}</ul>
    }

    showCatPro= (e) =>{

        this.props.getCategory(e.currentTarget.dataset.id);

        var position=e.currentTarget.dataset.id
    
      if(this.state.activeCategories === position) {
        this.setState({activeCategories : null})
      } else {
        this.setState({activeCategories : position})
      }
    }

    render(){
        return(
            <div>
               <h5>Departmets</h5>
                  {this.showcatData()}  
               <h5>Categories</h5>  
                  {this.showcatData2()}    
            </div>
        )
    }
 }