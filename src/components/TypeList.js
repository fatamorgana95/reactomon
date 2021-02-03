import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TypeList extends Component {

    render() {
        return (
            this.props.types.map(type => (
                <li key={type.url}>{type.name}</li>
        )))
    }
}

TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

export default TypeList;