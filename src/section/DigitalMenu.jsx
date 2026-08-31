import { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Black truffle · Parmigiano · Wild herbs",
    price: 920,
    category: "Mains",
    image: "/images/dish-1.jpg",
  },
  {
    id: 2,
    name: "Golden Sea Bass",
    description: "Saffron · Citrus · Beurre blanc",
    price: 1280,
    category: "Mains",
    image: "/images/dish-2.jpg",
  },
  {
    id: 3,
    name: "Fire Roasted Duck",
    description: "Black cherry · Thyme · Jus",
    price: 1450,
    category: "Mains",
    image: "/images/dish-3.jpg",
  },
  {
    id: 4,
    name: "Midnight Chocolate",
    description: "Dark chocolate · Vanilla · Hazelnut",
    price: 620,
    category: "Desserts",
    image: "/images/dish-4.jpg",
  },
];

function DigitalMenu() {
  const [category, setCategory] = useState("All");
  const [order, setOrder] = useState([]);

  const categories = ["All", "Starters", "Mains", "Desserts"];

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  const addToOrder = (dish) => {
    setOrder((current) => {
      const existing = current.find((item) => item.id === dish.id);

      if (existing) {
        return current.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...dish, quantity: 1 }];
    });
  };

  const removeFromOrder = (id) => {
    setOrder((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="digital-menu" id="order">

      <div className="digital-menu-heading">
        <div>
          <p className="label">DIGITAL MENU</p>

          <h2>
            Choose
            <span>your evening.</span>
          </h2>
        </div>

        <p>
          Explore our menu, build your order
          and send it directly to our kitchen.
        </p>
      </div>

      <div className="menu-tabs">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="digital-menu-layout">

        <div className="digital-dishes">

          {filteredDishes.map((dish) => (
            <article
              className="digital-dish"
              key={dish.id}
            >
              <div className="digital-dish-image">
                <img
                  src={dish.image}
                  alt={dish.name}
                />
              </div>

              <div className="digital-dish-info">

                <div>
                  <span>
                    {String(dish.id).padStart(2, "0")}
                  </span>

                  <h3>{dish.name}</h3>

                  <p>{dish.description}</p>
                </div>

                <div className="digital-dish-action">
                  <strong>
                    ₺{dish.price.toLocaleString()}
                  </strong>

                  <button
                    onClick={() => addToOrder(dish)}
                  >
                    ADD +
                  </button>
                </div>

              </div>
            </article>
          ))}

        </div>


        <aside className="order-panel">

          <div className="order-panel-header">
            <span>YOUR ORDER</span>
            <strong>
              {order.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}
            </strong>
          </div>

          {order.length === 0 ? (
            <div className="empty-order">
              <p>Your order is empty.</p>
              <span>
                Choose something from the menu.
              </span>
            </div>
          ) : (
            <div className="order-items">

              {order.map((item) => (
                <div
                  className="order-item"
                  key={item.id}
                >
                  <div>
                    <h4>{item.name}</h4>
                    <span>
                      ₺{item.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="quantity">
                    <button
                      onClick={() =>
                        removeFromOrder(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        addToOrder(item)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

            </div>
          )}

          <div className="order-total">
            <span>TOTAL</span>

            <strong>
              ₺{total.toLocaleString()}
            </strong>
          </div>

          <button
            className="send-order"
            disabled={order.length === 0}
          >
            SEND ORDER
            <span>↗</span>
          </button>

        </aside>

      </div>

    </section>
  );
}

export default DigitalMenu;


