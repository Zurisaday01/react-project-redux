import { useDispatch } from 'react-redux';
import Btn from '../../ui/Btn';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Btn type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Btn>
  );
}

export default DeleteItem;
