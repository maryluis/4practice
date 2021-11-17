import {
  FormGroup, Label, Col, Input, Form, CardTitle, Card, Button,
} from 'reactstrap';

function OnePosition() {
  return (
    <FormGroup className="m-3">
      <Label for="position" className="important">Позиция</Label>
      <Col>
        <Input
          id="position"
          name="position"
          placeholder="Шариковые ручки"
          type="text"
        />
      </Col>
    </FormGroup>
  );
}

function CreatePage() {
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
            />
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="phone" className="important">Телефон</Label>
          <Col>
            <Input
              id="phone"
              name="phone"
              placeholder="Ваш телефон"
              type="number"
            />
          </Col>
        </FormGroup>
        <CardTitle className="center" tag="h4">Заказ</CardTitle>
        <OnePosition />
        <Button className="buttonPosition" outline>Добавить позицию</Button>
        <FormGroup className="m-3">
          <Label for="costumer">Поставщик</Label>
          <Col>
            <Input
              id="costumer"
              name="costumer"
              value="Поставщик 1"
              type="select"
            >
              <option>Поставщик 1</option>
              <option>Поставщик 2</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="type">Тип</Label>
          <Col>
            <Input
              id="type"
              name="type"
              value="Розница"
              type="select"
            >
              <option>Опт</option>
              <option>Розница</option>
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
              value="p-"
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
            />
          </Col>
        </FormGroup>
        <div className="formBottom">
          <Button className="m-2" color="primary">Отправить</Button>
          <Button className="m-2" outline>Сброс</Button>
        </div>
      </Form>
    </Card>
  );
}
export default CreatePage;
