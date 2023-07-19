import Btn from '../../ui/Btn';
import { useDispatch } from 'react-redux';
import { decreaseItemQuentity, increaseItemQuantity } from './cartSlice';

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 md:gap-3">
      <Btn type="round" onClick={() => dispatch(decreaseItemQuentity(pizzaId))}>
        -
      </Btn>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Btn type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>
        +
      </Btn>
    </div>
  );
}

export default UpdateItemQuantity;
