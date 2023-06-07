const Button = (props) => {
  return (
    <div>
      <h1>{props.desc}</h1>
    <button className="button">{props.message}</button>
    </div>
  );
};


export default  Button ;
