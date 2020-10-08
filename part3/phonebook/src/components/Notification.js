import React from 'react'

const Notification = ({notification}) => {
  console.log(notification)
  if (notification.message === null) return null

  const color = notification.error ? 'red' : 'green'
  const style = {
    background: 'lightgray',
    borderStyle: 'solid',
    borderColor: color,
    color: color,
    padding: 10,
    fontSize: 20,
    fontStyle: 'italic',
  }

  return (
    <div style={style}>{notification.message}</div>
  )
}

export default Notification
