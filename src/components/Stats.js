import React from 'react';

const Stats = (props) => {
    return (props.stats.map(stat => (
        <p key={ props.id }>{stat.stat.name}: {stat.base_stat}</p>
        )))
}

export default Stats;