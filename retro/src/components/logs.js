import React from 'react';
import SingleLog from './log';

export default function Logs({ logs }) {

    return (
        <div>
            <h1>something</h1>
        {
            !!logs ? (
                logs.map(log => (
                    <SingleLog _id={log._id} text={log.text} classroom_id={log.classroom_id} />
                    
                ))
            ) : ('No Logs')
        }
        </div>
    )
}
