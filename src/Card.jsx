const Card = ({ name, close, dislike, like, votes }) => {
  return (
    <div className="card">
      <img src="https://source.unsplash.com/random" alt="unsplash random" />
      <p className="title">{name}</p>
      <button onClick={close} className="close">
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="votes">
        <button className="downvote">
          <span className="material-symbols-outlined">remove</span>
        </button>
        <p className="hearts">
          0 <span className="material-symbols-outlined">favorite</span>
        </p>
        <button className="upvote">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
