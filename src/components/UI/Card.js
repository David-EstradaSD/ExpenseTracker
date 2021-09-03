import "./Card.css";

function Card(props) {
  // this will be a reusable wrapper component !
  const classes = "card " + props.className;
  // anything we receive as a className from outside is concatenated to this string
  // then we can dynamically point at this classes constant below!
  return <div className={classes}>{props.children}</div>;
  // children is a reserved name and this is a special props
  // it will always be the content of the opening and closing Card tag
  // of our ExpenseItem.js component
}

export default Card;

// this Card component is a custom component made by us
// it will go in ExpenseItem to replace the "outer div"
// but we have to build "wrapper components"
