import React, {useState} from 'react'
import './PhoneBookForm.css'
export const PhoneBookForm = ({ addEntryToPhoneBook }) => {

  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userFirstname && userLastname && userPhone) {
      const newContact = {
        userFirstname,
        userLastname,
        userPhone
      };
      addEntryToPhoneBook(newContact);
      setUserFirstname('');
      setUserLastname('');
      setUserPhone('');
    }
  }
  return (
    <form onSubmit={handleSubmit} className='container'>
      <label>First name:</label>
      <br />
      <input 
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={userFirstname}
        onChange={(e) => setUserFirstname(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={userLastname}
        onChange={(e) => setUserLastname(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      />
      <br/>
      <div className='btn-container'>
        <input 
          className='submitButton'
          type='submit' 
          value='Add User' 
        />
      </div>
      
    </form>
  )
}
