import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Check from '../../../../../assets/checkbox.svg';
import Rectangle from '../../../../../assets/rectangle.svg';

const Checkbox = ({ setNum }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    // if (isChecked) {
    //   item = true;
    // } else {
    //   item = false;
  };

  useEffect(() => {
    if (!isChecked) {
      setNum((num: number) => {
        if (num !== 0) {
          setNum(num - 1);
        }

        setNum(num);
      });
    }

    if (isChecked) {
      setNum((num: number) => num + 1);
    }
  }, [isChecked, setNum]);

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      {isChecked ? <Check /> : <Rectangle />}
    </TouchableOpacity>
  );
};

export default Checkbox;
