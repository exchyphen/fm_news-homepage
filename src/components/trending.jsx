import "./trending.css";

const Trending = (props) => {
  return (
    <div className="trending-single-container">
      <img
        className="trending-img"
        src={props.img}
        alt={`trending img ${props.number}`}
      ></img>
      <div className="trending-text-container">
        <div className="trending-number">{props.number}</div>
        <div className="trending-title">{props.title}</div>
        <div className="trending-text">{props.text}</div>
      </div>
    </div>
  );
};

export default Trending;
