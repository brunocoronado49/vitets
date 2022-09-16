import { User } from '../interfaces/User'

interface Props {
  user: User,
  deleteUser: (uid: number) => void
}

const UserCard = ({ user, deleteUser }: Props) => {
  return (
    <div>
      <h2>{user.name} {user.lastname}</h2>
      <p>Información del usuario:</p>
      <p>{user.email}</p>
      <p>{user.age}</p>
      <button onClick={() => user.id && deleteUser(user.id)}>Eliminar</button>
    </div>
  )
}

export default UserCard