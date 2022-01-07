import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{Index: '', name: 'Buddy the Elf', post: 'Merry Christmas', status: 'Thumbs Up'}, {index: '', name: 'Scrooge', post: 'Bah Humbug', status: 'Thumbs Down'}])

  function addNewEntry(entry) {

    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }

  return (
    <div >
      <DisplayEntries parentEntries={entries} /> 
      <AddEntryForm addNewEntryProperty={addNewEntry}/> 
      <EntriesChartTracker parentEntries={entries} />
    </div>
  );
}

export default App;
