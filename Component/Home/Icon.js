import {Image, StyleSheet, Text, View} from 'react-native';

const Icon = ({
  iconurl,
  position,
  width,
  height,
  marginTop,
  marginBottom,
  top,
  left,
  color,
}) => {
  return (
    <View>
      <Image
        source={{uri: iconurl}}
        style={{
          position,
          width,
          height,
          marginTop,
          left,
          top,
          marginBottom,
          color,
        }}
      />
    </View>
  );
};

export default Icon;
