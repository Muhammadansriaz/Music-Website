function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const listOfItems = props.numbers;
  const listItems = listOfItems.map((item) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={item.toString()}
      value={item} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}




export default NumberList;