import {
  useEffect,
} from 'react';
import {
  FormGroup, Label, Col, Input, Form, CardTitle, Card, Button, FormFeedback,
} from 'reactstrap';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { keys, filter, map } from 'lodash';
import { Formik, FieldArray } from 'formik';
import { actionSendUpdate, actionSendOrder } from '../../redux-saga/actionsCreaters';

function CreatePage() {
  const globalDispatch = useDispatch();
  const orderDone = useSelector((state) => state.sendData.doneOrder);
  const navigate = useNavigate();

  useEffect(() => {
    if (orderDone) {
      navigate('/orders');
    }
    return (globalDispatch(actionSendUpdate()));
  }, [orderDone]);

  const validationYup = yup.object().shape({
    name: yup.string().required('Поле не должно быть пустым'),
    email: yup.string().email('Значение некорректно').required('Поле не должно быть пустым'),
    surname: yup.string().required('Поле не должно быть пустым'),
    number: yup.string().required('Введите номер телефона')
      .matches(/^[0-9]+$/, 'Допускаются только цифры')
      .min(9, 'Не менее 9 символов')
      .max(15, 'Не более 15 символов'),
    date: yup.string().required('Выберите дату'),
    positionItem1: yup.string().required('Выберите хотя бы одну позицию'),
  });
  return (
    <Card className="p-5">
      <CardTitle className="center" tag="h4">Заказчик</CardTitle>
      <Formik
        initialValues={{
          email: '',
          name: '',
          surname: '',
          number: '',
          positions: [''],
          positionItem1: '',
          costumerName: 'Барановская Е.В.',
          id: `р-1${Date.now().toString().slice(7)}`,
          costumer: 'Поставщик 1',
          type: 'Розница',
          date: '',
          comment: '',
        }}
        validateOnBlur
        validationSchema={validationYup}
        onSubmit={(data) => {
          const keysPositions = filter(keys(data), (e) => e.indexOf('positionItem') > -1);
          const positions = map(keysPositions, (e) => data[e]);
          const allData = {
            email: data.email,
            fullName: `${data.name} ${data.surname}`,
            number: data.number,
            positions,
            costumerName: data.costumerName,
            costumer: data.costumer,
            type: data.type,
            date: data.date,
            comment: data.comment,
            status: 'New',
            id: data.id,
          };
          globalDispatch(actionSendOrder(allData));
        }}
      >
        {({
          values, handleChange, handleReset, handleSubmit, handleBlur, touched, errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup className="m-3">
              <Label for="email" className="important">Email</Label>
              <Col>
                <Input
                  id="email"
                  name="email"
                  placeholder="Ваш email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={touched.email && !!errors.email}
                  value={values.email}
                />
                <FormFeedback>
                  {errors.email}
                </FormFeedback>
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
                  value={values.name}
                  onBlur={handleBlur}
                  invalid={touched.name && !!errors.name}
                />
                <FormFeedback>
                  {errors.name}
                </FormFeedback>
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
                  value={values.surname}
                  onBlur={handleBlur}
                  invalid={touched.surname && !!errors.surname}
                />
                <FormFeedback>
                  {errors.surname}
                </FormFeedback>
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
                  onBlur={handleBlur}
                  invalid={touched.number && !!errors.number}
                  onChange={handleChange}
                  value={values.number}
                />
                <FormFeedback>
                  {errors.number}
                </FormFeedback>
              </Col>
            </FormGroup>
            <CardTitle className="center" tag="h4">Заказ</CardTitle>
            <FieldArray name="positions">
              {(fieldArrayProps) => {
                const { push, form } = fieldArrayProps;
                const { positions } = form.values;
                const keyPressHandler = (e) => {
                  if (e.charCode === 13) {
                    e.preventDefault();
                    push('');
                  }
                };
                const handleAddPosition = () => push('');
                return (
                  <div>
                    {positions.map((_item, i) => (
                      <FormGroup // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        className="m-3"
                      >
                        <Label for="position" className={i ? '' : 'important'}>{`Позиция ${i + 1}`}</Label>
                        <Col>
                          <Input
                            name={`positionItem${i + 1}`}
                            autoFocus={!!i}
                            id="position"
                            placeholder="Шариковые ручки"
                            type="text"
                            onBlur={handleBlur}
                            invalid={i === 0 && touched.positionItem1 && !!errors.positionItem1}
                            onKeyPress={keyPressHandler}
                            onChange={handleChange}
                          />
                          {i === 0 && (
                          <FormFeedback>
                            {errors.positionItem1}
                          </FormFeedback>
                          )}
                        </Col>
                      </FormGroup>
                    ))}
                    <Button className="buttonPosition" outline onClick={handleAddPosition}>Добавить позицию</Button>
                  </div>
                );
              }}
            </FieldArray>
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
                  value={values.id}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  invalid={touched.date && !!errors.date}
                  value={values.date}
                />
                <FormFeedback>
                  {errors.date}
                </FormFeedback>
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
                  value={values.comment}
                />
              </Col>
            </FormGroup>
            <div className="formBottom">
              <Button type="submit" className="m-2" color="primary">Отправить</Button>
              <Button onClick={handleReset} className="m-2" outline>Сброс</Button>
            </div>
          </Form>
        )}

      </Formik>
    </Card>
  );
}
export default CreatePage;
