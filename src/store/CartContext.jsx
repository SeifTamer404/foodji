import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //have an exsiting item in the array
    const exsitingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (exsitingItemIndex > -1) {
      const exsitingItem = state.items[exsitingItemIndex];
      const updatedItem = {
        ...exsitingItem,
        quantity: exsitingItem.quantity + 1,
      };
      updatedItems[exsitingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const exsitingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    if (exsitingItemIndex=== -1) {
      console.log('cant find item');
    }
    const updatedItems = [...state.items];
    const exsitingCartItem = state.items[exsitingItemIndex];
    if (exsitingCartItem.quantity === 1) {
      updatedItems.splice(exsitingItemIndex, 1);
    } else {
      const updatedItem = {
        ...exsitingCartItem,
        quantity: exsitingCartItem.quantity - 1,
      };
      updatedItems[exsitingItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "CLEAR_ITEMS"){
    return { ...state, items: [] };
  }
}
export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }
  function clearCart() {
    dispatchCartAction({type:'CLEAR_ITEMS'})
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };
  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;
