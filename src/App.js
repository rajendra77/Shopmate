import React from 'react';
import './App.css'
import NavigationBar from './components/NavigationBar'
import NavigationBar2 from './components/NavigationBar2'
import Homepage from './components/Homepage'
export default class App extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            items:[],
            error: null,
            isLoaded:false
        }
    }
    
    render(){
         return(
             <div >
                <NavigationBar2 />
                <NavigationBar />
                <Homepage />
             </div>

        )
    }
}