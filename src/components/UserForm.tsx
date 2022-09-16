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
      <form>
        <input type="text" placeholder="Ingresa tu nombre" name="name" />
        <input type="text" placeholder="Ingresa tu apellido" name="lastname" />
        <input type="number" placeholder="Ingresa tu edad" name="age" />
        <input type="text" placeholder="Ingresa tu correo" name="email" />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default UserForm