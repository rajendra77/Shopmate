import React from 'react';
import './App.css'
import NavigationBar from './components/NavigationBar'
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
                <NavigationBar />
             </div>

        )
    }
}