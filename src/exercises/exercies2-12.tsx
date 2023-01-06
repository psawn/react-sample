import { useEffect, useState } from 'react';
import noteService from '../services/notes.service';

const Test06 = () => {
  const [notes, setNotes] = useState([] as any[]);
  const [newNote, setNewNote] = useState<any>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
    });
  }, []);

  const toggleImportanceOf = (id: any) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((response) => {
        setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
      })
      .catch((error) => {
        setErrorMessage(error);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const deleteNote = async (id: any) => {
    if (window.confirm('Are you sure you want to delete')) {
      await noteService.deleteNote(id);
      const response = await noteService.getAll();
      setNotes(response.data);
    }
  };

  const Note = ({ note, toggleImportance, clickDeleteNote }: any) => {
    const label = note.important ? 'make not important' : 'make important';

    return (
      <li>
        {note.content} - important: {String(note.important)}
        <button onClick={toggleImportance}>{label}</button>
        <button onClick={clickDeleteNote}>Delete</button>
      </li>
    );
  };

  const Notification = ({ message }: any) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

  const addNote = (event: any) => {
    event.preventDefault();

    if (!newNote) {
      return;
    }

    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote('');
    });
  };

  return (
    <>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <form onSubmit={addNote}>
        <div>
          <span>content</span>
          <input
            value={newNote || ''}
            name="name"
            onChange={(e) => setNewNote(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            clickDeleteNote={() => deleteNote(note.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Test06;
