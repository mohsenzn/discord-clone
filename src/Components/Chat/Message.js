import React from 'react'
import { Avatar } from '@material-ui/core'

function Message({timestamp, user, message}) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    
                    <span className="message__timestamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>

                <p></p>
            </div>
        </div>
    )
}

export default Message
