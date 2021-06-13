import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };
    // this.toggleColor = this.toggleColor.bind(this);
  }

  handleChangePage(page) {
    console.log(page);
    this.setState({
      page
    });
  }

  render() {
    const { size,number, page }  = this.state;
    return (
      <div className="App">
        <Header />
        <main className="page-main">
          <button onClick={() => this.handleChangePage('home')}>Page Home</button>
          <button onClick={() => this.handleChangePage('about')}>Page About</button>
          <div className='circles'>
            {(page === 'home') && <div className="circle"><Circle size={50} number={1} /></div>}
            {(page === 'home') && <div className="circle"><Circle size={60} number={90} /></div>}
            {(page === 'home') && <div className="circle"><Circle size={70} number={80} /></div>}
          </div>
          {(page === 'about') && <div className="circles">About page</div>}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
