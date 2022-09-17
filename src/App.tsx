import { useState } from 'react'
import { User, AppInterface } from './interfaces/User'
import UserForm from './components/UserForm'
import UserList from './components/UsersList'
import './App.css'

function App({ appTitle }: AppInterface) {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Francisco",
      lastname: "Rangel",
      age: 24,
      email: "francorangel@gmail.com"
    }
  ])

  // Arrow function for take the current date in timestamp format
  const getCurrentDateTimestamp = (): number => new Date().getTime()

  const deleteUser = (uid: number) => {
    const userDeleted = users.filter(user => user.id !== uid)
    setUsers(userDeleted)
  }

  const saveUser = (user: User) => {
    return setUsers([...users, { ...user, id: getCurrentDateTimestamp() + 2 }])
  }

  return (
    <div className="App" style={{ height: "100vh" }}>
      <h1>{appTitle}</h1>
      <main>
        <div className="row">
          <div className="col">
            <UserForm addUser={saveUser} />
          </div>
          <div className="col">
            <div className="row">
              <UserList users={users} deleteUser={deleteUser} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
