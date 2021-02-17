import React,{  useRef } from 'react'
import Child from './Child' 

const Parent = () => {
    const childRef = useRef();
    const yahya = "yahya"
    return (
        <div className="container">
            <div>
                Parent Component
            </div>
            <button
                onClick={() => { childRef.current.showAlert() }}
            >
            Call Function
            </button>
            <Child ref={childRef} pro={yahya}/>
        </div>
    )
}

export default Parent