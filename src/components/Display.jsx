import React from 'react'
import {UserContext} from '../index.js'

function Display() {
  return (
    <UserContext.Consumer>
      {value => (
        <div>
          {value.name}
        </div>
      )}
    </UserContext.Consumer>
  )
}

export default Display
