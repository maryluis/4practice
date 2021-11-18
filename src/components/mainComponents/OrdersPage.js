import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardText, Card, Table,
} from 'reactstrap';
import { OrderRow } from '.';
import { actionGetOrders } from '../../redux-saga/actionsCreaters';

function OrdersPage() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.orders.data);
  useEffect(() => dispatch(actionGetOrders()), []);
  const THTittles = ['Дата', 'Имя', 'ID', 'Тип', 'Заказчик', 'Поставщик', 'Выполнен', 'Статус', 'Edit'];
  return (
    <Card>
      <CardText />
      <Table bordered className="table-striped">
        <thead>
          <tr>
            {THTittles.map((item) => <th key={item}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => <OrderRow key={item.id} data={item} />)}
        </tbody>
      </Table>
    </Card>
  );
}
export default OrdersPage;
