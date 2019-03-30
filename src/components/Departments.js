import React from 'react'
import Depa from './Depa'

export default class Departments extends React.Component{

   constructor(props){
      super(props)
      this.state={
        items:[],
        isLoaded: false,
      }
   }
    componentDidMount() {
        fetch("https://backendapi.turing.com/departments")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
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


    render()
    {
        return(
            <div>
                <h2></h2>
                <Depa items={this.state.items}/>
            </div>
        )
    }
}