import React, { useState, useContext } from "react";
import { BookContext } from "../context/bookcontext";



const BookList = () => {

   const {booklist, removeBook} =  useContext(BookContext);

    return  booklist.length > 0 ?( 
        <div className="book-list">
          <ul>
            {
                booklist.map(items => {
               return ( <li key={items.id} onClick={()=>removeBook(items.id)}>
                     <div className='title'>{items.title}</div>
                     <div className='author'>{items.author}</div>
                   
                   </li>)
                })
            }
            </ul>
            </div>
             ): (
                 <div className="empty">No book to read. Hello free time :)</div>
             )
  
}
 
export default BookList ;