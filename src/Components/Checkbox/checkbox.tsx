import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Check from '../../../assets/checkbox.svg';
import Rectangle from '../../../assets/rectangle.svg';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      {isChecked ? <Check /> : <Rectangle />}
    </TouchableOpacity>
  );
};

export default Checkbox;
