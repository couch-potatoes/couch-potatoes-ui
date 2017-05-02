import React, {PropTypes} from 'react';
import { Slider as MaterialUiSlider } from 'material-ui';

const STEP = 1;

    //function for slider
const Slider = props => {
  const {
    max,
    min,
    onChange,
    name,
    value,
    label,
  } = props;

      //return code to render slider
  return (
    <div>
      <span>
        {`${label}: ${Number(value)}`}
      </span>
      <MaterialUiSlider
        defaultValue={min}
        max={max}
        min={min}
        step={STEP}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

    //slider default properties
Slider.defaultProps = {
  max: 10,
  min: 0,
  name: '',
};

export default Slider;
