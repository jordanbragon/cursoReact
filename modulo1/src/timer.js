'use strict'

import React, {Component} from 'react'

class Timer extends Component {
    constructor(){
        super()
        this.state = {
            time: 0
        }

        this.timer;
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', this.props, nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', this.state, nextState)
        return this.state.time !== nextState.time
        //somente renderiza o component se o return for true
        //pode usar para comparar os stados do component para que ele seja renderizado caso os estados (nextProps, nextState) sejam diferentes
    }

    render(){
        return <div>Timer: {this.state.time}</div>
    }
    
}

export default Timer