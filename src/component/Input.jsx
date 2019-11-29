import React, { useContext } from 'react'
import UserContext from '../context/user/userContext';


const Input = () => {
  const userContext = useContext(UserContext)
  const { setApiUsers, setUsers, setUser, user, users } = userContext;


  const handleSubmit = e => {
    e.preventDefault();
    if (user !== '') {
      setApiUsers()
      setUsers([user, ...users])
      setUser('')
    }
  }

  const handleChange = e => {
    setUser(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter a User:
         <input value={user} type="text" onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>

      < ul >
        {
          users.map((user, index) => {
            return (
              <li key={index}>{user}</li>
            )
          })
        }
      </ul >
    </>
  )
}

export default Input;