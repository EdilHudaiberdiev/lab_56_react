import React from 'react';

interface Props {
  item: {
    id: number;
    img: string;
    name: string;
    price: number;
  };
  addClick: (id: number) => void;

}
const Good:React.FC<Props>  = ({item, addClick}) => {
  return (
    <div>
      <div key={item.id}  className="goods" onClick={() => addClick(item.id)}>
        <img src={item.img} className="goodsImg" alt={item.name}/>
        <p>{item.name}</p>
        <p className="priceString">{item.price}</p>
      </div>
    </div>
  );
};

export default Good;