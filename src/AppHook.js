import React, { useState, useEffect } from 'react';
import './App.css';
import UserRow from './UserRowHook';
import Footer from './Footer';
import Header from './Header';

const App = () => {

  const [userList, setUserList] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const json = await response.json();
        console.log(json);
        setUserList(json.data);
        makeArrTotalPage(json.total_pages);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, [page]);

  function makeArrTotalPage(pages) {
    let arrTotal = [];
    for (let i = 1; i <= pages; i++) {
      arrTotal.push(i)
    }
    setTotalPages(arrTotal);
  }

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    setPage(page - 1);
  }
  function toPage(event) {
    setPage(event.target.id);
    console.log(event);
  }
  function removeItem(id) {
    setUserList(userList.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <main className="page-main">
        <table className="list-users table table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avatar</th>
              <th className="txt-center">Delete</th>
            </tr>
          </thead>
          <tbody>
          {userList.length ? userList.map((user) =>
            <UserRow key={user.id} user={user} onRemoveUser={removeItem}/>)
          : <tr><td className="txt-center" colSpan="5">Register new user to see it here</td></tr>}
          </tbody>
        </table>
        <div className="page-navigator">
          <button onClick={prevPage}>&lt;&lt;</button>
          <ul className="page-list">
            {totalPages.map((p) => <li style={ p == page ? {border: 'double'} : {}} className="page-item" id={p} onClick={toPage}>{p}</li>)}
          </ul>
          <button onClick={nextPage}>&gt;&gt;</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
