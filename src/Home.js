import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
            <div>
                <h2>hello world 2</h2>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
            </div>
        )
    }
}

export default Home 