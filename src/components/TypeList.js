import React from 'react'
import PropTypes from 'prop-types';

const TypeList = (props) => {

        return (
            props.types.map(type => (
                <li key={type.url}>{type.name}</li>
        )))
    }

TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

export default TypeList;