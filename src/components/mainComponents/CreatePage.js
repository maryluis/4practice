import {
  useReducer, useCallback, useMemo, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormGroup, Label, Col, Input, Form, CardTitle, Card, Button,
} from 'reactstrap';
import {
  createFormReducer, defaultState, actionChangeForm, actionAddPosition, actionChangePosition,
  actionFormClear,
} from './localreducers/createFormReducer';
import { putOrder } from '../../tools';
import { OnePosition } from '.';

function CreatePage() {
  const [formData, dispatch] = useReducer(createFormReducer, defaultState);

  const handleChange = useCallback((e) => {
    dispatch(actionChangeForm({ [e.target.name]: e.target.value }));
  }, []);

  const handleChangePosition = useCallback((index, value) => {
    dispatch(actionChangePosition({ index, value }));
  }, []);

  const addPositionHandler = useCallback(() => {
    dispatch(actionAddPosition());
  });
  const navigate = useNavigate();
  const IDValue = useMemo(() => {
    let IDType;
    let IDCostume;
    const IDData = Date.now().toString().slice(7);
    if (formData.type === 'Опт') {
      IDType = 'о-';
    } else {
      IDType = 'р-';
    }
    if (formData.costumer === 'Поставщик 1') {
      IDCostume = '1';
    } else {
      IDCostume = '2';
    }
    const IDString = IDType + IDCostume + IDData;
    return IDString;
  }, [formData.type, formData.costumer]);

  const isCorrectForm = useMemo(() => {
    if (formData.name.length < 1 || formData.email.length < 1) {
      return false;
    }
    if (formData.surname.length < 1 || formData.number.length < 9) {
      return false;
    } if (formData.positions[0].length < 1 || Date.parse(formData.date) < Date.now()) {
      return false;
    }
    return true;
  }, [formData]);

  const handleSubmit = useCallback(async () => {
    await putOrder({
      ...formData,
      id: IDValue,
    });
    navigate('/orders');
  }, [formData, IDValue]);

  const handleClear = useCallback(() => dispatch(actionFormClear()), []);

  useEffect(() => {
    return (dispatch(actionFormClear()));
  }, []);
  return (
    <Card className="p-5">
      <CardTitle className="center" tag="h4">Заказчик</CardTitle>
      <Form>
        <FormGroup className="m-3">
          <Label for="email" className="important">Email</Label>
          <Col>
            <Input
              id="email"
              name="email"
              placeholder="Ваш email"
              type="email"
              onChange={handleChange}
              value={formData.email}
            />
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="name" className="important">Имя</Label>
          <Col>
            <Input
              id="name"
              name="name"
              placeholder="Ваше имя"
              type="text"
              onChange={handleChange}
              value={formData.name}
            />
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="surname" className="important">Фамилия</Label>
          <Col>
            <Input
              id="surname"
              name="surname"
              placeholder="Ваша фамилия"
              type="text"
              onChange={handleChange}
              value={formData.surname}
            />
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="phone" className="important">Телефон</Label>
          <Col>
            <Input
              id="number"
              name="number"
              placeholder="Ваш телефон"
              type="number"
              onChange={handleChange}
              value={formData.number}
            />
          </Col>
        </FormGroup>
        <CardTitle className="center" tag="h4">Заказ</CardTitle>
        {formData.positions.map((item, i) => (
          <OnePosition
            data={item}
            name={i}
            isFirst={i === 0}
            key={Math.random()}
            index={i}
            inputValue={formData.positions[i]}
            handleInput={handleChangePosition}
          />
        ))}
        <Button className="buttonPosition" outline onClick={addPositionHandler}>Добавить позицию</Button>
        <FormGroup className="m-3">
          <Label for="costumer">Поставщик</Label>
          <Col>
            <Input
              id="costumer"
              name="costumer"
              type="select"
              onChange={handleChange}
            >
              <option value="Поставщик 1">Поставщик 1</option>
              <option value="Поставщик 2">Поставщик 2</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="type">Тип</Label>
          <Col>
            <Input
              id="type"
              name="type"
              onChange={handleChange}
              type="select"
            >
              <option value="Розница">Розница</option>
              <option value="Опт">Опт</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="ID">Ваш ID заказа</Label>
          <Col>
            <Input
              id="type"
              name="type"
              type="text"
              disabled
              value={IDValue}
            />
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label className="important" for="date">Дата выполнения заказа</Label>
          <Col>
            <Input
              id="date"
              name="date"
              placeholder="Дата заказа"
              type="date"
              onChange={handleChange}
              value={formData.date}
            />
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="comment">Комментарий</Label>
          <Col>
            <Input
              id="comment"
              name="comment"
              placeholder="Ваш комментарий"
              type="textarea"
              onChange={handleChange}
              value={formData.comment}
            />
          </Col>
        </FormGroup>
        <div className="formBottom">
          <Button disabled={!isCorrectForm} onClick={handleSubmit} className="m-2" color="primary">Отправить</Button>
          <Button onClick={handleClear} className="m-2" outline>Сброс</Button>
        </div>
      </Form>
    </Card>
  );
}
export default CreatePage;
