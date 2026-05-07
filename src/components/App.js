import React, { useState } from "react";
import Menu from "./Menu";
import './../styles/App.css';

function App() {
  const menuData = [
    {
      id: 1,
      title: "Pancakes",
      category: "breakfast",
      price: "$10",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 2,
      title: "Burger",
      category: "lunch",
      price: "$15",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 3,
      title: "Milkshake",
      category: "shakes",
      price: "$8",
      image:
        "https://images.unsplash.com/photo-1577805947697-89e18249d767",
    },
    {
      id: 4,
      title: "Omelette",
      category: "breakfast",
      price: "$12",
      image:
        "https://images.unsplash.com/photo-1510693206972-df098062cb71",
    },
    {
      id: 5,
      title: "Pizza",
      category: "lunch",
      price: "$18",
      image:
        "https://images.unsplash.com/photo-1548365328-9f547fb0953b",
    },
  ];

  const [items, setItems] = useState(menuData);

  // Filter Items
  const filterItems = (category) => {
    const filteredItems = menuData.filter(
      (item) => item.category === category
    );

    setItems(filteredItems);
  };

  return (
    <div id="main" className="container">
      <h1>Menu</h1>

      <div className="buttons">
        <button
          id="filter-btn-1"
          onClick={() => filterItems("breakfast")}
        >
          Breakfast
        </button>

        <button
          id="filter-btn-2"
          onClick={() => filterItems("lunch")}
        >
          Lunch
        </button>

        <button
          id="filter-btn-3"
          onClick={() => filterItems("shakes")}
        >
          Shakes
        </button>
      </div>

      <Menu items={items} />
    </div>
  );
}

export default App;

