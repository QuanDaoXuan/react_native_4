import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  onValueChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

const CheckBox: React.FC<Props> = ({onValueChange, style}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const backgroundColor = selected ? 'transparent' : 'transparent';

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
      <View style={[styles.wrapper, {backgroundColor}]}>
        {selected && (
          <MaterialCommunityIcons name="check" color={'red'} size={26} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 4,
  },
  wrapper: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    width: 18,
    height: 18,
  },
});

export default CheckBox;
