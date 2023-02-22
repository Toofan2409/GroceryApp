import {Text, View, Pressable, StyleSheet} from 'react-native';
import {styles} from './Style';

const Button = ({
  title,
  width,
  color,
  backgroundColor,
  fontSize,
  height,
  onpress,
}) => {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: color,
      }}>
      <Pressable onPress={onpress}>
        <Text style={{color, fontSize}}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
