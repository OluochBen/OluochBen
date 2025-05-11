import PoemCard from './PoemCard';

export default function PoemList({ poems, onToggleRead }) {
  return (
    <div className="poem-list">
      {poems.length > 0 ? (
        poems.map(poem => (
          <PoemCard 
            key={poem.id}
            poem={poem}
            onToggleRead={onToggleRead}
          />
        ))
      ) : (
        <p>No poems yet. Add your first poem!</p>
      )}
    </div>
  );
}