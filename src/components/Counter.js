import React, { useState } from 'react'

const Counter = ({ onClick, value }) => {
    return (
        <div>
            Votes: {value}
            <button onClick={onClick}>upvote
            </button>
        </div>
    )
}

export default Counter;