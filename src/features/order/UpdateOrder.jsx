import { useFetcher } from 'react-router-dom';
import Btn from '../../ui/Btn';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();

  // NOTE: Just like <Form> except it doesn't cause a navigation.
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Btn type="primary">Make priority</Btn>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// NOTE: params access to the url params
export async function action({ request, params }) {
  const data = { priority: true };

  // (id, dataToUpdate)
  await updateOrder(params.orderId, data);

  return null;
}

/*
REVALIDATION

react-router knows that the data has changed as a result of this action

automaticly will refech the data with the new data
*/
