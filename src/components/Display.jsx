import { React, useContext } from 'react'
import {UserContext} from '../index.js'

function Display() {
  const user = useContext(UserContext)
  return (
    <div className="text-xl text-white">
      {user.login}
    </div>
  )
}

export default Display
