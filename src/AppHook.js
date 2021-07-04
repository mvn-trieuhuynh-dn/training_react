import React, { useState } from 'react';
import './App.css';
import UserRow from './UserRowHook';
import Footer from './Footer';
import Header from './Header';

let id = 0;
const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    other: ''
  });
  const [userList, setUserList] = useState([]);

  function removeItem(id) {
    setUserList(userList.filter(item => item.id !== id));
  }

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...form, [name]: value});
  }

  function HandleSubmit(event) {
    event.preventDefault();
      setUserList([...userList, {...form, id: ++id}]);//id
  }

  return (
    <div className="App">
      <Header />
      <main className="page-main">
        <form className="resgister-form" onSubmit={HandleSubmit}>
          <h2 className="text-uppercase">Register User </h2>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input type="text" name="email" className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Your country</label>
            <div className="form-select">
              <select name="country" value={form.country} onChange={handleChange}>
                <option value="">Please choose your country</option>
                <option value="Vietnam">Viet Nam</option>
                <option value="Lao">Laos Cai</option>
                <option value="USA">USA Tho</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Gender</label>
            <div className="form-radio">
              <input type="radio" name="gender" id="male" value="0" checked={form.gender === '0'} onChange={handleChange} />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form-radio">
              <input type="radio" name="gender" id="female" value="1" checked={form.gender === '1'} onChange={handleChange} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Other information</label>
            <textarea name="other" onChange={handleChange}></textarea>
          </div>
          <div className="form-button">
            <button className="btn">Submit</button>
          </div>
        </form>
        <table className="list-users table table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Other information</th>
              <th className="txt-center">Delete</th>
            </tr>
          </thead>
          <tbody>
          {userList.length ? userList.map((user) =>
            <UserRow key={user.id} user={user} onRemoveUser={removeItem}/>)
          : <tr><td className="txt-center" colSpan="5">Register new user to see it here</td></tr>}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default App;
