import { useState } from 'react';
import PoemForm from './components/PoemForm';
import PoemList from './components/PoemList';

export default function App() {
  const [poems, setPoems] = useState([
    {
      id: 1,
      title: "The Song About the Song",
      author: "Bryan Higgins",
      content: "This is the song about the show! And it's a show with a song about\nThe Songs we're gonna sing We'll sing you the songs about The\nsong about the show! Songs about the singing we'll do! Songs\nabout the songs about The song about the show! Songs that we'll\nbe singing to you! You'll hear us singing songs about The songs\nabout the songs, The songs about the songs about the songs-\nSongs about the songs about The songs about the songs, The\nsongs about the songs about the show!",
      isRead: false
    },
    {
      id: 2,
      title: "My Pickle",
      author: "Jon Glass",
      content: "...may my pickle stroll about hungryand fearless and thirsty and\nsugheard even if it's sunday may it be wrongfor whenever gherkins\nare green they are not young and may my sweet and sour do\nnothing usefullyand love yourself so more than pickle-julceythere's\nnever been quite such a fool who could fallpulling all the sky over\nhim with one bite.",
      isRead: false
    }
  ]);
  
  const [showForm, setShowForm] = useState(false);

  const addPoem = (newPoem) => {
    setPoems([...poems, {
      ...newPoem,
      id: Date.now(),
      isRead: false
    }]);
    setShowForm(false);
  };

  const toggleReadStatus = (id) => {
    setPoems(poems.map(poem => 
      poem.id === id ? {...poem, isRead: !poem.isRead} : poem
    ));
  };

  return (
    <div className="app">
      <header>
        <h1>Poesy</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="toggle-btn"
        >
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
      </header>
      
      {showForm && <PoemForm onAddPoem={addPoem} />}
      
      <PoemList poems={poems} onToggleRead={toggleReadStatus} />
    </div>
  );
}