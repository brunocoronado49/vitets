import { User } from '../interfaces/User'
import UserCard from './UserCard'

interface Props {
  users: User[],
  deleteUser: (uid: number) => void
}

const UsersList = ({users, deleteUser}: Props) => {
  return (
    <div>
      {
        users.map(user => (
          <div key={user.id}>
            <UserCard user={user} deleteUser={deleteUser} />
          </div>
        ))
      }
    </div>
  )
}

export default UsersList