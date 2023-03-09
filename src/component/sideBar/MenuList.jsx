

import React from 'react'
import { useSelector } from 'react-redux';
import MenuListItems from './MenuListItems';

const MenuList = () => {
  const menuObjectList = useSelector((state) => state.posts);

  // const listOfItems = props.numbers;
  // const listItems = genObject.map((item) =>
  //   <div key={item.toString()}>
  //     <li>{item}</li>
  //   </div>
  // )
  return (
    <ul>
      {menuObjectList.map((menuObject) => (

        <div key={menuObject.mnu_id}>
          <MenuListItems menuObject={menuObject} />
        </div>
      ))}

    </ul>
  );
}

export default MenuList;

// function MenuList(props) {
//   const listOfItems = props.numbers;
//   const listItems = listOfItems.map((item) =>
//     // Correct! Key should be specified inside the array.
//     <div key={item.toString()}>
//       <li>{item}</li>
//     </div>
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// export default MenuList;

// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function MenuList(props) {
//   const listOfItems = props.numbers;
//   const listItems = listOfItems.map((item) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={item.toString()}
//       value={item} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// export default MenuList;
