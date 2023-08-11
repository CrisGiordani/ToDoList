import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styled } from './styles'

export default function Task({ task, checked, toggleTask }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (task) => {
    setIsChecked(!isChecked);
    toggleTask(task);
  };

  const dynamicStyle = !isChecked ? styled.doTask : styled.doneTask;

  return (
    <TouchableOpacity style={styled.container} onPress={() => handleCheckboxChange(task)}>
      <Ionicons
        name={ !isChecked ? "ellipse-outline" : "checkmark-circle" }
        size={24}
        paddingRight={20}
        color={ !isChecked ? "#4EA8DE" : "#5E60CE" }
      />
      <Text style={dynamicStyle}>{task}</Text>
      <Ionicons
        name="trash-outline"
        size={24}
        paddingLeft={20}
        color="#808080"
      />
    </TouchableOpacity>
  );
}
