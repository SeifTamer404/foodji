import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce(
    (totalQantities, item) => item.quantity + totalQantities,
    0
  );

  function handleOpenCart() {
    userProgressCtx.showCart();
  }
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Foodji logo" />
        <h1>Foodji</h1>
      </div>
      <Button textOnly onClick={handleOpenCart}>
        Cart({totalCartItems})
      </Button>
    </div>
  );
}
