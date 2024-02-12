import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Addcontact } from './Components/AddContact'
import { ContactList } from './Components/ContactList'
import { v4 as uuidv4 } from 'uuid'
import { Detailsbanner } from './Components/Detailsbanner'
import { Navbar } from './Components/Navbar'
uuidv4();

function App() {
  const [contacts, setContacts] = useState([])

  const AddContact = ({ email, name, number }) => {
    setContacts([...contacts, {id: uuidv4(), email: email, name: name, number: number}])
    console.log(contacts)
  }

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
    console.log('clicked', contacts)
  }

  return (
    <>
      <div className='container'>
        <Navbar />
        <Header />
        <Addcontact AddContact={AddContact}/>
        <div>
          <Detailsbanner />
        </div>
        <ContactList contacts={contacts} handleDelete={handleDelete}/>
      </div>
    </>
  );
}

export default App
