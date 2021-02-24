//jshint esversion: 6
import React ,{useState}from "react";
import Header from './Header';
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea"

function App(){
    const [items, setItems] = useState([]);

    function addItem(note) {
        
        setItems(prevItems => ([...prevItems, note]))
        
    }
    function deleteNote(id) {
        setItems(prevItems => {return prevItems.filter((item, index)=>{
            return index !== id;
        })})
    }
    return <div>

      <Header />
      <CreateArea addItem={addItem}/>
      <div>
      {items.map(({title, text}, index) =>{ return <Note key={index} id={index} title={title} content={text} deleteNote={deleteNote}/>})}
      </div>
      
     
      <Footer />

    </div>
}

export default App