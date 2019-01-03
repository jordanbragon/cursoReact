'use strict'

import React, { Component } from 'react'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
    
    constructor () {
        super()
        this.state = {
            text: 'Jordan'
        }
    }
    
    render () {
        return (
            <div className='container' onClick={() => (this.setState({
                text: 'Outro texto'
            }))}>
                {this.state.text}
            </div>
        )
    }
}

export default App