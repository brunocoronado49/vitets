import { ChangeEvent, FormEvent, useState } from 'react'
import { User } from '../interfaces/User'

interface Props {
  addUser: (user: User) => void
}

const initialState = {
  name: "",
  lastname: "",
  age: 0,
  email: ""
}

const UserForm = ({ addUser }: Props) => {
  const [user, setUser] = useState(initialState)
  type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

  const onChange = (event: handleInputChange) => {
    const name = event.target.name
    const value = event.target.value
    setUser({...user, [name]: value})
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addUser(user)
    setUser(initialState)
  }

  return (
    <div>
      <h2>Agrega un usuario</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Ingresa tu nombre" name="name" onChange={onChange} />
        <input type="text" placeholder="Ingresa tu apellido" name="lastname" onChange={onChange} />
        <input type="number" placeholder="Ingresa tu edad" name="age" onChange={onChange} />
        <input type="text" placeholder="Ingresa tu correo" name="email" onChange={onChange} />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default UserForm