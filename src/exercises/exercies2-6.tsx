import { useState } from 'react';
// import Note from '../components/note.component';

interface IPerson {
  name: string;
  number: number | string;
}

const Test04 = () => {
  const [persons, setPersons] = useState([] as IPerson[]);
  const [newPerson, setNewPerson] = useState({} as IPerson);
  const [filter, setFilter] = useState();

  const addPerson = (event: any) => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;

    if (name && number) {
      const newPresonObj: IPerson = {
        name,
        number,
      };

      setNewPerson(newPresonObj);
      persons.push(newPresonObj);
      setPersons(persons);
    }

    setNewPerson({
      name: '',
      number: '',
    });
  };

  const handleFilter = (event: any) => {
    setFilter(event.target.value);
  };

  const personsToShow = filter
    ? persons.filter((person) => person.name === filter)
    : persons;

  return (
    <>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input onChange={handleFilter} />
      </div>

      <h1>Add a new</h1>
      <form onSubmit={addPerson}>
        <div>
          <span>name</span>
          <input
            value={newPerson.name || ''}
            name="name"
            onChange={(e) =>
              setNewPerson({
                ...newPerson,
                name: e.target.value,
              })
            }
          />
        </div>
        <div>
          <span>number</span>
          <input
            value={newPerson.number || ''}
            name="number"
            onChange={(e) =>
              setNewPerson({
                ...newPerson,
                number: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <div>
        <h1>Number</h1>
        <ul>
          {personsToShow.map((person, index) => {
            return (
              <li key={index}>
                {person.name} - {person.number}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Test04;

// const Test04 = (props: any) => {
//   const [notes, setNotes] = useState([] as any[]);
//   const [newNote, setNewNote] = useState('a new note...');
//   const [showAll, setShowAll] = useState(true);

//   const addNote = (event: any) => {
//     event.preventDefault();

//     if (newNote) {
//       const noteObject = {
//         content: newNote,
//         date: new Date().toISOString(),
//         important: Math.random() < 0.5,
//         id: notes.length + 1,
//       };
//       notes.push(noteObject);
//       setNotes(notes);
//     }

//     setNewNote('');
//   };

//   const handleNoteChange = (event: any) => {
//     console.log(event.target);
//     setNewNote(event.target.value);
//   };

//   const notesToShow = showAll
//     ? notes
//     : notes.filter((note: any) => note.important === true);

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note: any) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// };

// export default Test04;
