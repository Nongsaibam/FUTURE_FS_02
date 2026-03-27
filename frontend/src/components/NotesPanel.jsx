const NotesPanel = ({ notes }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h3>Notes</h3>
      {notes?.map((n, i) => <p key={i}>• {n}</p>)}
    </div>
  );
};

export default NotesPanel;