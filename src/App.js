import React from 'react';
import BookContextProvider from './context/bookcontext';
import NavBar from './component/navbar';
import BookList from './component/booklist';
import BookForm from './component/bookform';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <NavBar />
      <BookList />
      <BookForm />
    </BookContextProvider>
    </div>
  );
}

export default App;
