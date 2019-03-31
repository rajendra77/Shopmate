import React from 'react';
import Content from './Home/Content'
import Sidebar from './Home/Sidebar'

export default class Homepage extends React.Component{

  
    render(){  
        return(
            <div className='Homepage'>
                <Sidebar getDepartment={this.props.getDepartment}/>
                <Content page={this.props.pageNumber} isLoaded={this.props.isLoaded} cat={this.props.cat}/>
            </div>
            
        )
    }
}