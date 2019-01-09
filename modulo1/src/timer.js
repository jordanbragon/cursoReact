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

    componentWillUnmount (){
        clearInterval(this.timer)
    }

    componentWillReceiveProps (nextProps){
        console.log('componentWillReceiveProps timer', this.props, nextProps)
    }

    shouldComponentUpdate (nextProps, nextState){
        //console.log('shouldComponentUpdate timer', this.state, nextState)
        return this.props.time !== nextProps.time
        //somente renderiza o component se o return for true
        //pode usar para comparar os stados do component para que ele seja renderizado caso os estados (nextProps, nextState) sejam diferentes
    }

    componentWillUpdate (nextProps, nextState){
        //executa no momento em que o component vai ser atualizado
        console.log('componentWillUpdate timer', this.props, nextProps)
    }

    componentDidUpdate(prevProps, prevState){
        //executa após a renderização do component
        console.log('componentDidUpdate timer', this.props, prevProps)
    }

    render(){
        console.log('render timer')
        return <div>Timer: {this.state.time}</div>
    }
    
}

export default Timer