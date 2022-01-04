import React, { useState } from 'react'

const Counter = ({ onClick, value }) => {
    return (
        <div>
            Likes: {value}
            <button onClick={onClick}>&#128077;
            </button>
        </div>
    )
}

export default Counter;