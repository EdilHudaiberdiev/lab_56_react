import { useState } from 'react'
import mealImg from './assets/meal.png'
import drinkImg from './assets/drink.png'
import './App.css'

interface goodsInterface {
  name: string;
  count: number;
  img: string;
  id: number;
  price: number;
}

function App() {
  const [goods, setGoods] = useState<goodsInterface[]>([
    {img: mealImg,  name: "Hamburger", count: 0, id: 1, price: 80},
    {img: mealImg,  name: "Cheeseburger", count: 0, id: 2, price: 90},
    {img: mealImg,  name: "Fries", count: 0, id: 3, price: 45},
    {img: drinkImg,  name: "Coffee", count: 0, id: 4, price: 70},
    {img: drinkImg,  name: "Tea", count: 0, id: 5, price: 50},
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
    }))
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
    }))
  };


  return (
    <>
      <div className="container">
        <div className="goodsList">
          {goods.map(item => (
            <div key={item.id}  className="goods" onClick={() => addClick(item.id)}>
              <img  src={item.img} className="goodsImg" alt={item.name}/>
              <p>{item.name}</p>
              <p className="priceString">{item.price}</p>
            </div>
          ))}
        </div>


        {price > 0 ?
          <>
            {goods.map(item => {
                if(item.count > 0) {
                  return (
                    <div key={item.id} className="goods" >
                      <p>{item.name} x</p>
                      <p>   {item.count}</p>
                      <p className="priceString">{item.price * item.count}</p>
                      <button onClick={() => deleteClick(item.id)} type="button">X</button>
                    </div>
                  )
                }
              }
            )}

            <div className="totalPrice">Price {price}</div>
          </>
          :
          <>
          <p>order is empty</p>
          </>
        }

      </div>
    </>
  )
}

export default App