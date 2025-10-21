import axios from "axios";
import "./index.css";

export default function Note(props) {
  const deletarNota = () => {
    axios
      .delete(`http://localhost:8000/api/notes/${props.id}`)
      .then(() => {
        props.loadNotes();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{props.title}</h3>
        <button className="delete-btn" onClick={deletarNota}>
          ✕
        </button>
      </div>
      <div className="card-content">
        <p>{props.children}</p>
      </div>
    </div>
  );
}