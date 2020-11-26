import React from 'react'

export const ChatMessage = (props) => {
    const { text, uid } = props.message;

    return (
        <p>{text}</p>
    )
}

