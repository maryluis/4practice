import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardText, CardTitle, Card } from 'reactstrap';
import { actionGetOrders } from '../../redux-saga/actionsCreaters';

function OrdersPage() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  useEffect(() => dispatch(actionGetOrders()), []);
  return (
    <Card>
      <CardTitle>Здесь будет блядская таблица</CardTitle>
      <button type="button" onClick={() => console.log(state)}>sd;csiyhj</button>
      <CardText />
    </Card>
  );
}
export default OrdersPage;
