import React from 'react'

const UserRow = (props) => {

  function handleRemove() {
    props.onRemoveUser(props.user.id);
  }

  const user = props.user;
  return (
    <tr key={user.id}>
      <td>{user.email}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <img src={user.avatar} />
      <td className="txt-center">
        <button className="btn-transparent" onClick={handleRemove}>X</button>
      </td>
    </tr>
  )
}
export default UserRow;
