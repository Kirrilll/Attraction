import React, { Suspense } from 'react';
import './crossButton.css'

const CrossButton: React.FC<{ action: () => void }> = (props) => {
    return (
        <button className = 'crooss-btn' onClick = {props.action}>
            <div className = 'line left'></div>
            <div className = 'line right'></div>
        </button>
    )
}

export default CrossButton;