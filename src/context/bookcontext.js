import React, { createContext, useState } from 'react'; 
import uuid from 'react-uuid';

export const BookContext = createContext();

const BookContextProvider  = (props) => {

    const [booklist, setBookList] = useState([
         {id : 1, title : 'The act of Balancing', author :'Mavel'},
         {id : 2, title : 'Many Communicate but Few Connect', author : 'Mavel'},
         {id : 3, title : 'The Principle of Life', author : 'Mavel'}
    ]);
    
    const addBook =(title, author)=>{
        const newItem = {id : uuid(), title : title, author : author }
         setBookList([
             ...booklist,
             newItem
         ]);
    }
    const removeBook =(id)=>{
        setBookList(booklist.filter(items => items.id !== id ));
    }

    return ( 
       <BookContext.Provider value={{booklist, removeBook, addBook}}>
          {props.children}
       </BookContext.Provider>
     );
}
 
export default BookContextProvider;