import { useState } from 'react'
import mealImg from './assets/meal.png'
import drinkImg from './assets/drink.png'
import Good from './components/Good/Good';
import './App.css';
import OrderItem from './components/OrderItem/OrderItem';
import Price from './components/Price/Price';

interface goodsInterface {
  name: string;
  count: number;
  img: string;
  id: number;
  price: number;
}

const App = () => {
  const [goods, setGoods] = useState<goodsInterface[]>([
    {img: mealImg,  name: "Hamburger", count: 0, id: 1, price: 80},
    {img: drinkImg,  name: "Tea", count: 0, id: 5, price: 50},
    {img: mealImg,  name: "Cheeseburger", count: 0, id: 2, price: 90},
    {img: drinkImg,  name: "Coffee", count: 0, id: 4, price: 70},
    {img: mealImg,  name: "Fries", count: 0, id: 3, price: 45},
    {img: drinkImg,  name: "Cola", count: 0, id: 6, price: 40},
  ]);
  const [price, setPrice] = useState<number>(0);

  const addClick = (id: number) => {
    setGoods(goods.map(item => {
      if (item.id === id) {
        setPrice(prevState => prevState + item.price)
        return {
          ...item,
          count: item.count + 1
        }
      }
      return item;
    }));
  };

  const deleteClick = (id: number) => {
    setGoods(goods.map(item => {
      if (item.id === id) {
        setPrice(prevState => prevState - item.price)
        return {
          ...item,
          count: item.count - 1
        }
      }
      return item;
    }));
  };

  return (
    <>
      <div className="container">

        <div className="goodsList">
          {goods.map(item => (
            <Good key={item.id}  item={item} addClick={addClick}/>
          ))}
        </div>

        <hr/>

          {price > 0 ?
            <>
              <div className="orderList">

                {goods.map(item => {
                    if(item.count > 0) {
                      return (
                        <OrderItem key={item.id}  item={item} deleteClick={deleteClick} />
                      )
                    }
                  }
                )}
              </div>
              <Price number={price}/>
            </>
            :
            <>
              <p>order is empty</p>
            </>
          }
      </div>
    </>
  )
};

export default App