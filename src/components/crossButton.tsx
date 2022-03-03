import React, { Suspense } from 'react';

const CrossButton: React.FC<{ action: () => void }> = (props) => {
    return (
        <button onClick = {props.action}>
            Закрыть
        </button>
    )
}

export default CrossButton;