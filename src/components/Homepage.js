import React from 'react';
import Content from './Home/Content'
import Sidebar from './Home/Sidebar'

export default class Homepage extends React.Component{
    render(){  
        return(
            <div className='Homepage'>
                <Sidebar isLoaded={this.props.isLoaded} departments={this.props.departments}/>
                <Content page={this.props.pageNumber} isLoaded={this.props.isLoaded} cat={this.props.cat}/>
            </div>
            
        )
    }
}