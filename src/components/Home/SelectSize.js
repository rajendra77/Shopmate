import React from 'react'

export default class SelectSize extends React.Component{
    
    show = () =>{
        var x=this.props.id
        console.log('hey there'+x)
        if(this.props.hover && (this.props.id===this.props.productID))
          {
              return(
                  <h2>Hello</h2>
              )
          }
          else
          {
            return(
                <h2>kjfhjk</h2>
            )
          }
    }
    render()
    {
        return(
            <div>
               {this.show()}
            </div>
        )
    }
}