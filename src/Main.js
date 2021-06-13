import logo from './logo.svg';
import './App.css';

function Main() {
  return (
    <main className="main">
      <div className="gif">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p>Hello React!!</p>
    </main>
  );
}

export default Main;