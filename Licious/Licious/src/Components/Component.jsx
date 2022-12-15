import "./Component.css";
const Component = ({ srcs, names }) => {
  return (
    <div className="flext">
      {srcs.map((el, i) => (
        <div>
            <span className="img-div"><a href=""><img className="pro-img" src={srcs[i]} alt="img" /></a></span>
            <span className="names">{names[i]}</span>
        </div>
      ))}
    </div>
  );
};

export default Component;
