import './Filters.css';

export default function Filters({ handleVote, handleDate }) {
  return (
    <div className="inner-container">
      <label className="sortby">Sort By</label>
      <button
        data-testid="most-upvoted-link"
        className="small"
        onClick={() => handleVote()}
      >
        Most Upvoted
      </button>
      <button
        data-testid="most-recent-link"
        className="small"
        onClick={() => handleDate()}
      >
        Most Recent
      </button>
    </div>
  );
}
