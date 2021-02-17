import React from 'react'
import {useState} from 'react'

const Form = ({onAdd}) => {
    const[pseudo,setPseudo] = useState('')
    const[password,setPassword]= useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if(!pseudo && !password){
            alert('Rempliser les champs SVP ! ')
            return
        }
        onAdd({ pseudo,password})
        setPseudo('')
        setPassword('')
      }
        return (
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label> Pseudo </label>
                    <input 
                    type='text' 
                    placeholder='Pseudo' 
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label> Password </label>
                    <input 
                    type='password' 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type='submit' value = 'Saugarder User' className='btn btn-block'/>
            </form>     
        )
}

export default Form
