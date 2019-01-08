'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
   
    constructor(){
        console.log('constructor')
        super()
        this.state = {
            showTimer: true
        }
    }

    componentWillMount(){
        //Executa antes do render
        //executa no front-end e no back-end
        //Quando esse método é exeutado, os elementos do render() ainda não estão no DOM3
        console.log('componentWillMount')
    }

    componentDidMount(){
        //executa após o componente ser renderizado
        //executa somente no front-end
        console.log('componentDidMount')
    }

    render () {
        console.log('render')
        return (
            <div>
                {this.state.showTimer && <Timer />}
                <button onClick={() => {
                    this.setState({showTimer: !this.state.showTimer})
                }}>Show / hide timer</button>
            </div>
        )
    }
}

export default App