import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions'

class Clock extends Component {
    componentDidMount() {
        setInterval( () => {
            this.props.updateTime();
        }), 1000
    }

    render() {
        console.log(this.props)
        return (
            <div className="text-center mt-5">
                <h1>{this.props.clock.time}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        clock: state.clock
    }
}

export default connect(mapStateToProps, {
    updateTime: updateTime,
})(Clock);