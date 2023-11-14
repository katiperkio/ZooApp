const Card = ({ name, close, dislike, like, likes }) => {
  return (
    <div className="card">
      <div className="image">
        <img
          src={`https://source.unsplash.com/400x400/?${name}`}
          alt="unsplash random"
        />
      </div>
      <p className="title">{name}</p>
      <button onClick={close} className="close">
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="votes">
        <button onClick={dislike} className="downvote">
          <span className="material-symbols-outlined">remove</span>
        </button>
        <p className="hearts">
          {likes}
          <span className="material-symbols-outlined">favorite</span>
        </p>
        <button onClick={like} className="upvote">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
