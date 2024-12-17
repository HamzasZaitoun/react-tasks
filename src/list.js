import PropTypes from 'prop-types'; 
function List({category="category",items=[]}) {
  // fruits.sort((a,b)=>a.name.localeCompare(b.name))

  // const lowCalFruits =fruits.filter(fruit=>fruit.calories<100)
  // const listItems=fruits.map(fruit => <li key={fruit.id}>
  //     {fruit.name}: &nbsp; <b>{fruit.calories} </b>
  //     </li>);

  const Category = category;
  const itemList = items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b> {item.calories}</b>
    </li>
  ));

  return (
    <>
      {listItems.length > 0 ? (
        <>
          <h3> {Category}</h3>
          <ol>{listItems}</ol>
        </>
      ) : (
        null
      )}
    </>
  );
}
export default List;
