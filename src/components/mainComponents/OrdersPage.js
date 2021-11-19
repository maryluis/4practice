import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card, Table,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { OrderRow } from '.';
import { actionGetOrders, actionSortOrders } from '../../redux-saga/actionsCreaters';

function OrdersPage() {
  const dispatch = useDispatch();
  const isDone = useSelector((store) => store.sendData.done);
  useEffect(() => dispatch(actionGetOrders()), [isDone]);
  const navigate = useNavigate();
  const ordersPage = useSelector((store) => store.orders.dataPages);
  const { isAdmin, isLogin } = useSelector((store) => store.loginData);
  const isLoading = useSelector((store) => store.sendData.isLoading);
  const [page, changePage] = useState(1);
  const pageIncrement = useCallback(() => changePage(page + 1), [page]);
  const pageDecrement = useCallback(() => changePage(page - 1), [page]);
  const sortHandler = useCallback((e) => {
    dispatch(actionSortOrders(e.target.id));
  }, []);

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  const THTittles = [{ title: 'Дата', type: 'date' },
    { title: 'Имя', type: 'costumerName' },
    { title: 'ID', type: 'id' },
    { title: 'Тип', type: 'type' },
    { title: 'Заказчик', type: 'fullName' },
    { title: 'Поставщик', type: 'costumer' },
    { title: 'Выполнен', type: 'done' },
    { title: 'Статус', type: 'status' }];
  return (
    <Card className="orderPage">
      {isLoading && (
      <div className="spinner-border loadingOrder text-primary" style={{ width: '3rem', height: '3rem' }} role="status" />
      )}
      <Table bordered className="table-striped tableHeight">
        <thead>
          <tr>
            {THTittles.map(({ title, type }) => (
              <th key={type}>
                {title}
                {' '}
                <svg id={type} onClick={sortHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </th>
            ))}
            {isAdmin && <th>Edit</th>}
          </tr>
        </thead>
        <tbody>
          {ordersPage.length > 0
          && ordersPage[page - 1].map((item) => <OrderRow key={item.gID} data={item} />)}
        </tbody>
      </Table>
      <div className="ordersPageBottom">
        <Button className="tableButton" disabled={page === 1} onClick={pageDecrement}>Last</Button>
        <span className="pageSpan">{page}</span>
        <Button className="tableButton" disabled={page === ordersPage.length} onClick={pageIncrement}>Next</Button>
      </div>
    </Card>
  );
}
export default OrdersPage;
