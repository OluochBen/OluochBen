import { useState } from 'react';

export default function PoemForm({ onAddPoem }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    
    onAddPoem({
      title,
      author: author || 'Anonymous',
      content
    });
    
    // Reset form
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="poem-form">
      <input
        type="text"
        placeholder="Poem Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author (optional)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Write your poem here... *"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        required
      />
      <div className="form-actions">
        <button type="submit" className="submit-btn">Add Poem</button>
      </div>
    </form>
  );
}