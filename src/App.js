import React from 'react';
import './App.css'
import NavigationBar from './components/NavigationBar'
import NavigationBar2 from './components/NavigationBar2'
import HomepageImage from './components/HomepageImage'
import Homepage from './components/Homepage'
export default class App extends React.Component{

   constructor(props){
       super(props)
       this.state={
            products:[],
            departments:[],
            isLoaded:false ,
            pageNumber:1,   
            departmentID:0,
            categoryID:0,
       }
   }
   componentDidMount() {
    fetch('https://backendapi.turing.com/products?page=1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
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
  
  goToPage = (e) =>{
    const x=e.currentTarget.dataset.id 
    this.setState({
        pageNumber:x,
        
    })
      
      fetch(`https://backendapi.turing.com/products?page=${this.state.pageNumber}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result
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
 page=()=>{
    return(
        <ul class="pagination justify-content-center">
             <li onClick ={this.goToPage} class="page-item" data-id="1">1</li>
             <li onClick ={this.goToPage} class="page-item" data-id="2">2</li>
             <li onClick ={this.goToPage} class="page-item" data-id="3">3</li>
             <li onClick ={this.goToPage} class="page-item" data-id="4">4</li>
         </ul>
    )
}

  getDepartment= (data) =>{
      
        fetch(`https://backendapi.turing.com/products/inDepartment/${data}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result
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
  
  
  getCategory= (data) =>{
    
     fetch(`https://backendapi.turing.com/products/inCategory/${data}`)
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           products: result
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


    render(){
     
         return(
             <div >
                
                <NavigationBar />
                <NavigationBar2 />
                <HomepageImage />    
                <Homepage getDepartment={this.getDepartment} getCategory={this.getCategory} page={this.state.pageNumber} isLoaded={this.state.isLoaded} cat={this.state.products} />
                  {this.page()}
                 
             </div>

        )
    }
}