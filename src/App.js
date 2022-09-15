//import { Component } from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/serach-box/search-box.component";


const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monster, setMonster] = useState([]);
  const [filteredItems, setFilteredItems] = useState(monster);
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log('use effect function trigger');
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
      setMonster(users);
    });
  }, [])

  useEffect(() => {
    const newFilteredItems = monster.filter(user => user.name.toLowerCase().includes(searchField));
    setFilteredItems(newFilteredItems);
  }, [monster, searchField]);

  console.log(searchField);
  const onSearchChange = (event) => {
    const search = event.target.value;
    setSearchField(search);
  }
  const onTitleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  }
  return (
    <div className="App">
      <h1 className="app-title" >{title}</h1>
      <SearchBox
        onchangeEvent={onSearchChange}
        placeholder={'search-monsters'}
        monsterClassName='' />
      <br />
      <SearchBox
        onchangeEvent={onTitleChange}
        placeholder={'enter a title'}
        monsterClassName='' />
      <CardList monster={filteredItems} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       search: '',
//     }
//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('component did mount');
//     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
//       this.setState(() => {
//         return { monster: users }
//       }, () => {
//         // console.log(this.state.monster);
//       })
//     });
//   }
//   onchangeEvent = (event) => {
//     const search = event.target.value;
//     this.setState(() => {
//       return { search }
//     }, () => {
//       // this.state.monster = this.state.users;
//     })
//   }
//   render() {

//     const { monster, search } = this.state;
//     const { onchangeEvent } = this;

//     const filteredItems = monster.filter(user => user.name.toLowerCase().includes(search));

//     return (
//       <div className="App">
//         <h1 className="app-title" >Monsters Roladex</h1>
//         <SearchBox
//           onchangeEvent={onchangeEvent}
//           placeholder={'search-monsters'}
//           monsterClassName='' />
//         <CardList monster={filteredItems} />
//       </div>
//     );
//   }
// }

export default App;
