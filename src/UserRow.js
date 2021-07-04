import React, { Component } from 'react'

export default class UserRow extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove = () => {
    this.props.onRemoveUser(this.props.user.id);
  }

  render() {
    const user = this.props.user;
    return (
      <tr key={user.id}>
        <td>{user.email}</td>
        <td>{user.country}</td>
        <td>{user.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{user.other}</td>
        <td className="txt-center">
          <button className="btn-transparent" onClick={this.handleRemove}>X</button>
        </td>
      </tr>
    )
  }
}
