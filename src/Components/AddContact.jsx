import React, { useState } from 'react'

export const Addcontact = ({AddContact}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState()
    const [message, setMessage] = useState(null)
    const [modal, setModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regEx.test(email)){
            setMessage(false)
            const contact = { number, email, name}
            AddContact(contact)
            setModal(!modal)
            setEmail('')
            setName('')
            setNumber()
        }else{
            setMessage('The email is not valid')
        }
    }

    const togglemodal = () => {
        setModal(!modal)
    }

   
  return (
    <div className='main'>

        <div className='addcontact'>
            <h2>Add Contact</h2>
            <button className="addcon" onClick={togglemodal}>CLICK ME TO ADD CONTACT</button>
        </div>
        

        { modal && <div className='modal'>
            <div className="overlay" onClick={togglemodal}></div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='close-btn' onClick={togglemodal}>&times;</div>
                <div className='field'>
                    <label>Name</label>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>email</label>
                    <input 
                        type='text' 
                        name='email' 
                        placeholder='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    { message && <div>{ message }</div>}
                </div>
                <div className='field'>
                    <label>number</label>
                    <input 
                        type='text' 
                        name='number'
                        placeholder='number'
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <button type='submit' className='add'>ADD</button>
            </form>
        </div>}
        
        
    </div>
  )
}
