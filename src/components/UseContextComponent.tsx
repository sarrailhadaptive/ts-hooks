import { useState, useContext } from 'react'
import { context, UserState } from '../store/store'

function ConsumerComponent() {
  const user = useContext(context)
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

export default function UseContextComponent() {
  const [user, userSet] = useState<UserState>({
    first: 'Jane',
    last: 'Smith',
  })
  return (
    <context.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          userSet({
            first: 'Josie',
            last: 'Wales',
          })
        }
      >
        Change Context
      </button>
    </context.Provider>
  )
}
