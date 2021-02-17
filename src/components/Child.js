import React, { forwardRef, useImperativeHandle } from 'react'

const Child = forwardRef((props, ref,pro) => {
    useImperativeHandle(
        ref,
        () => ({
            showAlert() {
                alert("Child function called")
            }
         }),
     )
     return (
         <div>Child Component <p>{pro}</p></div>
         
     )
})
export default Child