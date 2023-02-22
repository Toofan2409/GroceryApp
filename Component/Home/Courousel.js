import {Text, Image, View} from 'react-native';
import Courousel from 'react-native-snap-carousel';

const data = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];
const Courousl = () => {
  const snapHandler = data => {
    return (
      <View
        style={{
          marginTop: 15,
          marginLeft: 5,
          width: 350,
          height: 150,
          borderWidth: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Image
          style={{width: 350, borderRadius: 10, height: 150}}
          resizeMode="cover"
          source={require('../../assets/food1.jpeg')}
        />
        <Text style={{textAlign: 'center', position: 'absolute'}}>
          {data.item.text}
        </Text>
        <Text style={{textAlign: 'center', top: 20, position: 'absolute'}}>
          {data.item.title}123
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        elevation: 2,
        backgroundColor: 'white',
        width: 360,
        borderColor: 'white',
        height: 180,
      }}>
      <Courousel
        sliderWidth={360}
        itemWidth={360}
        data={data}
        renderItem={snapHandler}
        // onSnapToItem={index => this.setState({activeSlide: index})}
      />
      {/* {this.pagination} */}
    </View>
  );
};

export default Courousl;
