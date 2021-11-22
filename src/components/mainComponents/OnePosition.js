import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup, Label, Col, Input,
} from 'reactstrap';

function OnePosition({
  value, onChange, index,
}) {
  const handleChange = useCallback((e) => {
    onChange(index, e.target.value);
  }, [onChange, index]);

  return (
    <FormGroup className="m-3">
      <Label for="position" className={index ? '' : 'important'}>{`Позиция ${index + 1}`}</Label>
      <Col>
        <Input
          autoFocus={!!index}
          id="position"
          placeholder="Шариковые ручки"
          type="text"
          onChange={handleChange}
          value={value}
        />
      </Col>
    </FormGroup>
  );
}

OnePosition.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
OnePosition.defaultProps = {
  value: '',
};

export default OnePosition;
