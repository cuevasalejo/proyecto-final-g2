const Nota = props => {
<<<<<<< HEAD
  const { title, text } = props;
  return (
    <div className="nota">
    <h2>{title}</h2>
    <p>{text}</p>
=======
  const { id, title, text, deleteNote, updateNote} = props;
  return (
    <div className="nota">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{id}</p>
      <button onClick={() => deleteNote(id)}>Borrar</button>
      <button onClick={() => updateNote(id)}>Editar</button>
>>>>>>> e169fe8 (Actualizacion)
    </div>
  );
};

export default Nota;
