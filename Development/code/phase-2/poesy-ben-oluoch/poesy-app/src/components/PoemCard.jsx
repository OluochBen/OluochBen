export default function PoemCard({ poem, onToggleRead }) {
    return (
      <div className={`poem-card ${poem.isRead ? 'read' : ''}`}>
        <h3>{poem.title}</h3>
        <p className="author">By {poem.author}</p>
        <div className="poem-content">
          {poem.content.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <button 
          onClick={() => onToggleRead(poem.id)}
          className="read-btn"
        >
          {poem.isRead ? 'Mark as Unread' : 'Mark as Read'}
        </button>
      </div>
    );
  }