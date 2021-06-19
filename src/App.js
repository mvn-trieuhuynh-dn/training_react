import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      itemList: [
        {
          id: 1,
          color: 'red',
          des: 'this is desription'
        },
        {
          id: 2,
          color: 'green',
          des: 'this is desription'
        },
        {
          id: 3,
          color: 'yellow',
          des: 'this is desription'
        },
        {
          id: 4,
          color: 'blue',
          des: 'this is desription'
        },
        {
          id: 5,
          color: 'orange',
          des: 'this is desription'
        },
      ]
    };
    // this.toggleColor = this.toggleColor.bind(this);
  }

  removeItem(index) {
    var { itemList }  = this.state;
    itemList.splice(index, 1);
    this.setState({
      itemList
    });
  }
  handleChangePage(page) {
    console.log(page);
    this.setState({
      page
    });
  }

  render() {
    const { itemList }  = this.state;
    return (
      <div className="App">
        <Header />
        <main className="page-main">
          {itemList.length ?
            <ul className='circles'>
              {itemList.map((i, index) => 
                <li style={{backgroundColor: i.color}} className="circle"><Circle size={50} number={1} />
                  <h5>item {i.id}</h5>
                  <p>{i.des}</p>
                  <button onClick={() => this.removeItem(index)}>X</button>
                </li>
              )}
            </ul>
          : <p> U have no item !</p>}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
