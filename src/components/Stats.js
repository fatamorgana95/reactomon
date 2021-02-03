import React, { Component } from 'react';

export class Stats extends Component {
    render() {
    return (this.props.stats.map(stat => (
        <p key={ this.props.id }>{stat.stat.name}: {stat.base_stat}</p>
        )))
}
}

export default Stats;