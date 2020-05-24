import React, { useContext } from 'react';
import { BookContext } from '../context/bookcontext';


const NavBar = () => {
    
    const {booklist} =  useContext(BookContext);
     
    return (
         <div className="navbar">
             <h1>Ninja reading list</h1>
             <p>you have {booklist.length} to read</p>
         </div>
      );

    }
        
export default NavBar;
