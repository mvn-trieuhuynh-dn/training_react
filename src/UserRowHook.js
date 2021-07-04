import React from 'react'

const UserRow = (props) => {
  // constructor(props) {
  //   super(props);
  // }

  function handleRemove() {
    props.onRemoveUser(props.user.id);
  }

  const user = props.user;
  return (
    <tr key={user.id}>
      <td>{user.email}</td>
      <td>{user.country}</td>
      <td>{user.gender === '0' ? 'Male' : 'Female'}</td>
      <td>{user.other}</td>
      <td className="txt-center">
        <button className="btn-transparent" onClick={handleRemove}>X</button>
      </td>
    </tr>
  )
}
export default UserRow;
