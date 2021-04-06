import React from 'react';

const DeleteButton = (props) => {
    const { _id, deletePirateFunc } = props

    return (
        <button onClick={() => deletePirateFunc(_id)}>Walk the Plank</button>
    )
}

export default DeleteButton;