import React, { Component } from 'react';
import BooksTable from "./BooksTable/BooksTable";
import UsersTable from "./UsersTable/UsersTable";
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <BooksTable/>
        <UsersTable/>
      </div>
    );
  }
}

export default App;
