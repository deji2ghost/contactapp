import React from 'react'
import user from '../images/user.svg'

export const ContactList = ({contacts, handleDelete}) => {
  console.log(contacts)

    
  return (
    <div>
        {contacts.map(contact => (
            <div className='contactlist' key={contact.id}>
              <img className='image' src={user} alt='user' />
              <div className='header'>{ contact.name }</div>
              <div className='email'>{ contact.email }</div>
              <div className='number'>{ contact.number }</div>
              <button className='trash' onClick={() => handleDelete(contact.id)}>delete</button>
            </div>
        ))}
    </div>
  )
}
