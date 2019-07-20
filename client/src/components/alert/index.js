import React from 'react'

const Alert = ({message, status}) => {
  return (
    <div className={`alert container ${status === 'danger' ? 'danger' : 'success'}` } >
      <p>{message}</p>
    </div>
  )
}

export default Alert
