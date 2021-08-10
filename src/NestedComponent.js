import React from 'react'

function NestedComponent() {
    return (
        <div>
            <h1>This is parent component</h1>
            <Child />
        </div>
    )
}

const Child = () => {
    return (
        <div>
            <h3>I am the kid</h3>
        </div>
    )
}

export default NestedComponent