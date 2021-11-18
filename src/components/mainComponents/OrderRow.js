import PropTypes from 'prop-types';
import {
  Button, Input,
} from 'reactstrap';
import { useState, useCallback, useReducer } from 'react';
import { defaultEditState, editTableReducer, actionOnEdit } from './localreducers/editTableReducer';

function OrderRow({ data }) {
  const [rowData, dispatch] = useReducer(editTableReducer, defaultEditState);
  const handleClick = useCallback(() => {
    dispatch(actionOnEdit(data));
  });
  const [edit, onEdit] = useState(true);
  const editHandler = useCallback(() => onEdit(!edit));
  console.log(rowData);
  return (
    <tr>
      { rowData.isEdit
        ? (
          <>
            <td>{data.date.replace(/-/gi, '.')}</td>
            <td>Барановская Е.В.</td>
            <td>{data.id}</td>
            <td>{data.type}</td>
            <td>{data.name}</td>
            <td>{data.costumer}</td>
            <td>{data.done || '-'}</td>
            <td className="table-info">{data.status || 'Waiting'}</td>
            <td><Button color="secondary" className="tableButton" onClick={handleClick}>Edit</Button></td>
          </>
        ) : (
          <>
            <td>{data.date.replace(/-/gi, '.')}</td>
            <td>Барановская Е.В.</td>
            <td>{data.id}</td>
            <td>
              <Input
                id="type"
                name="type"
                type="select"
                value={rowData.data.type}
              >
                <option value="Розница">Розница</option>
                <option value="Опт">Опт</option>
              </Input>
            </td>
            <td>
              <Input
                id="name"
                name="name"
                value={rowData.data.name}
                type="text"
              />
            </td>
            <td>
              <Input
                id="costumer"
                name="costumer"
                type="select"
                value={rowData.data.costumer}
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
                value={data.done || '-'}
              />
            </td>
            <td className="table-info">
              <Input
                id="status"
                name="status"
                type="select"
                value={rowData.data.status}
              >
                <option value="Waiting">Waiting</option>
                <option value="Expired">Expired</option>
                <option value="Failed">Failed</option>
                <option value="Finished">Finished</option>
                <option value="New">New</option>
              </Input>
            </td>
            <td><Button color="warning" className="tableButton" onClick={editHandler}>Done</Button></td>
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
