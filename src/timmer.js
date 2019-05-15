import React, {Component} from 'react'
import Time from './time'
import './timmer.css'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        
    }
    start = () => {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    pause = () => {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    reset  = () => {

        this.setState({timeMs: 0})

    }
    render() {
        return <div className='chrono'>
        <Time ms={this.state.timeMs} />
        <div>
        <input
            className="btn1"
            type="button"
            value="Start"
            onClick={this.start} />
        </div>
        <div>
        <input
            className="btn2"
            type="button"
            value="Pause"
            onClick={this.pause} />
        </div>
        <div>
        <input
            className="btn3"
            type="button"
            value="Reset"
            onClick={this.reset} />
        </div>
         
    </div>
    }
}

export default Timer