import {
  useReducer, useCallback, useMemo, useEffect,
} from 'react';
import {
  FormGroup, Label, Col, Input, Form, CardTitle, Card, Button, FormFeedback,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createFormReducer, defaultState, actionChangeForm, actionAddPosition, actionChangePosition,
  actionFormClear,
} from './localreducers/createFormReducer';
import { OnePosition } from '.';
import { actionSendOrder, actionSendUpdate } from '../../redux-saga/actionsCreaters';

function CreatePage() {
  const globalDispatch = useDispatch();
  const orderDone = useSelector((state) => state.sendData.doneOrder);
  const [formData, dispatch] = useReducer(createFormReducer, defaultState);
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    dispatch(actionChangeForm({ [e.target.name]: e.target.value }));
  }, [dispatch]);

  const handleChangePosition = useCallback((index, value) => {
    dispatch(actionChangePosition({ index, value }));
  }, []);

  const addPositionHandler = useCallback(() => {
    dispatch(actionAddPosition());
  }, [dispatch]);
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
    const hasName = !!formData.name.length;
    const hasEmail = !!formData.email.length;
    const hasSurname = !!formData.surname.length;
    const hasProduct = !!formData.positions[0]?.length;
    const isDateValid = Date.parse(formData.date) > Date.now();
    return hasName && hasEmail && hasSurname && hasProduct && isDateValid;
  }, [formData]);

  const handleSubmit = useCallback(() => {
    globalDispatch(actionSendOrder(
      {
        type: formData.type,
        costumer: formData.costumer,
        positions: formData.positions,
        email: formData.email,
        number: formData.number,
        costumerName: formData.costumerName,
        date: formData.date,
        status: 'New',
        fullName: `${formData.name} ${formData.surname}`,
        id: IDValue,
      },
    ));
  }, [formData, IDValue]);

  const handleClear = useCallback(() => dispatch(actionFormClear()), []);

  useEffect(() => {
    return (dispatch(actionFormClear()));
  }, []);
  useEffect(() => {
    if (orderDone) {
      navigate('/orders');
    }
    return (globalDispatch(actionSendUpdate()));
  }, [orderDone]);
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
              invalid={formData.number.length < 9}
              onChange={handleChange}
              value={formData.number}
            />
            { formData.number.length < 9
            && (
            <FormFeedback>
              Номер телефона должен содержать минимум 9 цифр
            </FormFeedback>
            )}
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
