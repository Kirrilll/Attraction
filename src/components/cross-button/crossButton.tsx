import React, { Suspense } from 'react';
import './crossButton.css'

const CrossButton: React.FC<{ action: () => void }> = (props) => {
    return (
        <button className = 'crooss-btn' onClick = {props.action}></button>
    )
}

export default CrossButton;