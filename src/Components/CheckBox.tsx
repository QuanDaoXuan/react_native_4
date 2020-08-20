import React, {useState} from 'react';
import {StyleProp, StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  onValueChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

const CheckBox: React.FC<Props> = ({onValueChange, style}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const color = selected ? 'black' : 'green';
  const iconName = selected ? 'checkbox-blank-outline' : 'checkbox-marked';
  return (
    <TouchableOpacity
      onPress={() => {
        if (onValueChange) {
          onValueChange(!selected);
        }
        setSelected(!selected);
        console.log(selected);
      }}
      style={[styles.touchable, style]}>
      <MaterialCommunityIcons name={iconName} color={color} size={23} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 4,
  },
});

export default CheckBox;
