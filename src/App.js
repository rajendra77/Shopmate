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
            isLoaded:false      
       }
   }
   componentDidMount() {
    fetch("https://backendapi.turing.com/products")
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
                <Homepage cat={this.state.products}/>
               
             </div>

        )
    }
}