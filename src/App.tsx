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
  const [goods, setFoods] = useState<goodsInterface[]>([
    {img: mealImg,  name: "Hamburger", count: 0, id: 1, price: 80},
    {img: mealImg,  name: "Cheeseburger", count: 0, id: 2, price: 90},
    {img: mealImg,  name: "Fries", count: 0, id: 3, price: 45},
    {img: drinkImg,  name: "Coffee", count: 0, id: 4, price: 70},
    {img: drinkImg,  name: "Tea", count: 0, id: 5, price: 50},
    {img: drinkImg,  name: "Cola", count: 0, id: 6, price: 40},
  ]);

  return (
    <>
      <div className="container">
        <div className="goodsList">
          {goods.map(item => (
            <div className="goods">
              <div></div>
              <img  src={item.img} className="goodsImg" alt={item.name}/>
              <p>{item.name}</p>
              <p className="priceString">{item.price}</p></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App