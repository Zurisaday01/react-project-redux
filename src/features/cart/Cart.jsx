import { Link } from 'react-router-dom';
import LinkBtn from '../../ui/LinkBtn';
import Btn from '../../ui/Btn';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkBtn to="/menu">&larr; Back to menu</LinkBtn>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Btn to="/order/new" type="primary">
          Order pizzas
        </Btn>
        <Btn type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Btn>
      </div>
    </div>
  );
}

export default Cart;
