import React from 'react';
import './App.css'
import NavigationBar from './components/NavigationBar'
import NavigationBar2 from './components/NavigationBar2'
import HomepageImage from './components/HomepageImage'
import Homepage from './components/Homepage'
import Departments from './components/Departments'
export default class App extends React.Component{

   constructor(props){
       super(props)
       this.state={
            products:[],
            departments:[],
            isLoaded:false ,
            pageNumber:1,     
       }
   }
   componentDidMount() {
    fetch('https://backendapi.turing.com/products?limit=100')
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
      ).then(
        fetch('https://backendapi.turing.com/departments')
         .then(res => res.json())
         .then(
           (result) => {
             this.setState({
              departments:result
             })
           }
         )
      )
  }
  
  goToPage = (e) =>{
    const x=e.currentTarget.dataset.id 
    this.setState({
        pageNumber:x
    })
    console.log("vlaue is " + x)
}
 page=()=>{
    return(
        <ul class="pagination justify-content-center">
             <li onClick ={this.goToPage} class="page-item" data-id="1">1</li>
             <li onClick ={this.goToPage} class="page-item" data-id="21">2</li>
             <li onClick ={this.goToPage} class="page-item" data-id="41">3</li>
             <li onClick ={this.goToPage} class="page-item" data-id="61">4</li>
         </ul>
    )
}
    render(){   
         return(
             <div >
                
                <NavigationBar />
                <NavigationBar2 />
                <HomepageImage />
                <Departments />
                <Homepage page={this.state.pageNumber} isLoaded={this.state.isLoaded} cat={this.state.products} departments={this.state.departments}/>
                {this.page()}
                 
             </div>

        )
    }
}