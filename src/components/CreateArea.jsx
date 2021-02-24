import React ,{useState}from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
    const [content, setContent] = useState({title:"", text:""})
    const [isExpanded, setExpanded] = useState(false)
    function expand() {
        setExpanded(true)
    }
    function handleChange(e) {
        const{name, value} = e.target;
        setContent(content => ({...content, [name]: value}))
    }
  return (
    <div>
      <form className="create-note">
      {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={content.title} />: null}
        
        <textarea  onClick={expand}  onChange={handleChange} name="text" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={content.text}/>
        <Zoom in={isExpanded}>
        <Fab  color="primary" aria-label="add" onClick={(e)=> {props.addItem(content);  e.preventDefault(); setContent({title:"", text:""})}}>
        <AddIcon />
        </Fab>

        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;