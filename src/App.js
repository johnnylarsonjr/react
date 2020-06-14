import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updateList = this.state.list.filter(isNotId);
    this.setState({ list: updateList });
  }
  render() {
    return (
      <header className="App-header">
        <div className="App">
          {this.state.list.map(item => 
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)} type="button">Dismiss</button>
            </span>
          </div>
          )}
        </div>
      </header>
    );
  }
}

class ExplainBindingsComponent extends Component {
  constructor() {
    super();
    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe () {
    console.log(this);
  }

  render() {
    return (
      <button
        onClick={this.onClickMe.bind(this)}
        type="button">
        Click Me    
      </button>
    );
  }
}

new ExplainBindingsComponent();

// class App extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <div className="App">
//           {list.map(function(item) {
//             return (
//               <div key={item.objectID}>
//                 <span>
//                   <a href={item.url}>{item.title}</a>
//                 </span>
//                 <span>{item.author}</span>
//                 <span>{item.num_comments}</span>
//                 <span>{item.points}</span>
//               </div>
//             );
//           })}
//         </div>
//       </header>
//     )
//   }
// }

// class Developer {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   getName() {
//     return this.firstname + ' ' + this.lastname;
//   }
// }

// const robin = new Developer('Olaf', "Meister");
// console.log(robin.getName());

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Let's make a React App MF!!!!</h2>
//         <h3>Putting another text here</h3>
//       </header>
//     </div>
//   );
// }

export default App;
