import React from 'react';

interface Props {
  item: {
    id: number;
    name: string;
    price: number;
    count: number;
  };

  deleteClick: (id: number) => void;

}
const OrderItem: React.FC<Props>  = ({item, deleteClick}) => {
  return (
      <div className="order" >
        <p>{item.name} x</p>
        <p>   {item.count}</p>
        <p className="priceString">  {item.price * item.count}</p>
        <button className="button" onClick={() => deleteClick(item.id)} type="button">X</button>
      </div>
  );
};

export default OrderItem;
