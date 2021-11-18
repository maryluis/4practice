import {
  useCallback, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Col, Input,
} from 'reactstrap';

function OnePosition({
  isFirst, index, handleInput, inputValue,
}) {
  const inputHandler = useCallback((e) => {
    handleInput(index, e.target.value);
  });
  const [inputState, changeState] = useState(inputValue);
  const stateHandler = useCallback((e) => changeState(e.target.value));
  return (
    <FormGroup className="m-3">
      <Label for="position" className={isFirst ? 'important' : ''}>Позиция</Label>
      <Col>
        <Input
          id="position"
          name={index}
          placeholder="Шариковые ручки"
          type="text"
          onBlur={inputHandler}
          onChange={stateHandler}
          value={inputState}
        />
      </Col>
    </FormGroup>
  );
}

OnePosition.propTypes = {
  isFirst: PropTypes.bool,
  index: PropTypes.number,
  inputValue: PropTypes.string,
  handleInput: PropTypes.any,
};
OnePosition.defaultProps = {
  isFirst: true,
  index: 0,
  inputValue: '',
  handleInput: null,
};

export default OnePosition;
