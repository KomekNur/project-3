import { useEffect, useState } from "react";
import Card from "./Card";
// import "./cards.css";

export default function Cards({ products, setBasket }) {
  const [value, setValue] = useState("")
  const [cards, setCards] = useState(products)

  useEffect(() => {
    setCards(products.filter(p => p.text.toLowerCase().includes(value.toLowerCase())))
  },[value])

  return (
    <div className="cards">
      <div className="search">
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      </div>
      {cards.map((p) => (
        <Card key={p.id} product={p} setBasket={setBasket} data="cards" />
      ))}
    </div>
  );
}
