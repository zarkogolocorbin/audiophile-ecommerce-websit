import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const onAdd = (product, quantity) => {
    if (cartItems.length === 0) {
      localStorage.setItem("cart", JSON.stringify([{ product, quantity }]));
      setCartItems([{ product, quantity }]);
    } else {
      if (!cartItems.some((item) => item.product.id === product.id)) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartItems, { product, quantity }])
        );
        setCartItems([...cartItems, { product, quantity }]);
      }
    }
    setQty(1);
  };

  const incrementQtyInCart = (id) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cartItems.map((value) =>
          value.product.id === id
            ? { ...value, quantity: value.quantity + 1 }
            : value
        )
      )
    );
    setCartItems(
      cartItems.map((value) =>
        value.product.id === id
          ? { ...value, quantity: value.quantity + 1 }
          : value
      )
    );
  };

  const decrementQtyInCart = (id) => {
    const currentItem = cartItems.find((item) => item.product.id === id);
    let updatedCartItems;

    if (currentItem.quantity === 1) {
      updatedCartItems = cartItems.filter((item) => {
        return item.product.id !== currentItem.product.id;
      });

      localStorage.setItem(
        "cart",
        JSON.stringify(
          cartItems.filter((item) => {
            return item.product.id !== currentItem.product.id;
          })
        )
      );

      setCartItems(updatedCartItems);
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cartItems.map((val) =>
            val.product.id === id ? { ...val, quantity: val.quantity - 1 } : val
          )
        )
      );

      setCartItems(
        cartItems.map((value) =>
          value.quantity > 1 && value.product.id === id
            ? { ...value, quantity: value.quantity - 1 }
            : value
        )
      );
    }
  };

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decrementQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      }
      return prevQty - 1;
    });
  };

  const removeAll = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const values = {
    showCart,
    setShowCart,
    cartItems,
    qty,
    incrementQty,
    decrementQty,
    incrementQtyInCart,
    decrementQtyInCart,
    onAdd,
    removeAll,
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
