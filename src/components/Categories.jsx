import React, { useState } from 'react';

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Всі</li>
//           {items.map((category, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${category}_${index}`}>
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Всі
        </li>
        {items?.map((category, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${category}_${index}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
