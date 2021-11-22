import PropTypes from 'prop-types';
import {
  Button, Input,
} from 'reactstrap';
import {
  useCallback, useMemo, useReducer, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSendEditOrder } from '../../redux-saga/actionsCreaters';
import {
  defaultEditState, actionChangeTableRow, editTableReducer, actionOnEdit, actionSaveEdit,
} from './localreducers/editTableReducer';

function OrderRow({ data }) {
  const globalDispatch = useDispatch();
  const [innerData, dataEdited] = useState(data);
  const [rowData, dispatch] = useReducer(editTableReducer, defaultEditState);

  const handleClick = useCallback(() => {
    dispatch(actionOnEdit(innerData));
  }, [dispatch, innerData]);
  const handleChange = useCallback((e) => {
    dispatch(actionChangeTableRow({ [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(() => {
    globalDispatch(actionSendEditOrder(rowData.data));
    dataEdited(rowData.data);
    dispatch(actionSaveEdit());
  }, [rowData]);
  const isAdmin = useSelector((state) => state.loginData.isAdmin);
  const styledStatus = {
    Waiting: 'table-primary',
    New: 'table-success',
    Expired: 'table-warning',
    Failed: 'table-danger',
    Finished: 'table-active',
  };
  const isCorrectRow = useMemo(() => {
    if (rowData.data.costumerName.length < 1) {
      return false;
    } if (rowData.data.fullName.length < 1) {
      return false;
    } return true;
  }, [rowData]);
  return (
    <tr className="tableRow">
      { rowData.isEdit
        ? (
          <>
            <td>{data.date.replace(/-/gi, '.')}</td>
            <td>{data.costumerName || 'Екатерина Е.В'}</td>
            <td>{data.id}</td>
            <td>{data.type}</td>
            <td>{data.fullName || `${data.name} ${data.surname}`}</td>
            <td>{data.costumer}</td>
            <td>{data.done || '-'}</td>
            <td className={styledStatus[data.status || 'Waiting']}>{data.status || 'Waiting'}</td>
            {isAdmin && <td><Button color="secondary" className="tableButton" onClick={handleClick}>Edit</Button></td>}
          </>
        ) : (
          <>
            <td>{data.date.replace(/-/gi, '.')}</td>
            <td>
              <Input
                id="costumerName"
                name="costumerName"
                invalid={rowData.data.costumerName.length < 1}
                placeholder="Поле не должно быть пустым"
                value={rowData.data.costumerName}
                type="text"
                onChange={handleChange}
              />

            </td>
            <td>{data.id}</td>
            <td>
              <Input
                id="type"
                name="type"
                type="select"
                value={rowData.data.type}
                onChange={handleChange}
              >
                <option value="Розница">Розница</option>
                <option value="Опт">Опт</option>
              </Input>
            </td>
            <td>
              <Input
                id="fullName"
                name="fullName"
                invalid={rowData.data.fullName.length < 1}
                placeholder="Поле не должно быть пустым"
                value={rowData.data.fullName}
                onChange={handleChange}
                type="text"
              />
            </td>
            <td>
              <Input
                id="costumer"
                name="costumer"
                type="select"
                value={rowData.data.costumer}
                onChange={handleChange}
              >
                <option value="Поставщик 1">Поставщик 1</option>
                <option value="Поставщик 2">Поставщик 2</option>
              </Input>
            </td>
            <td>
              <Input
                id="done"
                name="done"
                type="date"
                value={rowData.data.done || rowData.data.date}
                onChange={handleChange}
              />
            </td>
            <td className={styledStatus[rowData.data.status]}>
              <Input
                id="status"
                name="status"
                type="select"
                value={rowData.data.status}
                onChange={handleChange}
              >
                <option value="New">New</option>
                <option value="Waiting">Waiting</option>
                <option value="Expired">Expired</option>
                <option value="Failed">Failed</option>
                <option value="Finished">Finished</option>
              </Input>
            </td>
            {isAdmin && <td><Button disabled={!isCorrectRow} color="warning" className="tableButton" onClick={handleSubmit}>Done</Button></td>}
          </>
        )}
    </tr>
  );
}
OrderRow.propTypes = {
  data: PropTypes.object,
};

OrderRow.defaultProps = {
  data: null,
};
export default OrderRow;
