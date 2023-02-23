import {Text, View, ScrollView, Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useState} from 'react';
const CheckOut = ({navigation}) => {
  const cartitems = useSelector(state => state.CartSlice);
  console.log('placeorder', cartitems);
  const [totalAmount, settotalAmount] = useState();
  const CheckOutHandler = () => {
    console.log('click');

    navigation.navigate('Payment');
  };
  let Price = [];
  //   console.log(Price);
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={{margin: 5}}>
          {cartitems?.item.map(item => {
            // const newprice = item.price * item.quantity;
            // Price.push(newprice);
            // const TotalPrice = Price.reduce((a, e) => a + e);
            // settotalAmount(TotalPrice);

            // console.log('itemplace', item.price * item.quantity);

            return (
              <View key={item.id} style={{margin: 5}}>
                <View
                  style={{
                    overflow: 'hidden',
                    flexDirection: 'row',
                    borderRadius: 5,
                    borderWidth: 1,
                    alignItems: 'center',
                    backgroundColor: '#cbebc1',
                    borderColor: '#cbebc1',
                    elevation: 2,
                    height: 100,
                  }}>
                  <Image
                    resizeMode="stretch"
                    style={{width: 100, marginLeft: 0, height: 100}}
                    source={{uri: item.images[0]}}
                  />
                  <View style={{marginBottom: 20, marginLeft: 5}}>
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 10,
                        fontWeight: '500',
                      }}>
                      {item.brand}
                    </Text>
                    <Text style={{fontWeight: '400', marginBottom: 10}}>
                      {item.price} Rs
                    </Text>
                    <Text style={{fontWeight: '400', marginBottom: -12}}>
                      {item.quantity} item
                    </Text>
                  </View>

                  <Pressable
                    style={{
                      borderWidth: 0.5,
                      width: 160,
                      height: 25,
                      position: 'absolute',
                      right: 10,
                      top: 65,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: '#7bc991',
                      elevation: 4,
                      backgroundColor: '#7bc991',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        backfaceVisibility: 'visible',
                      }}>
                      {item.price * item.quantity}/- Rs
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 10,
          height: 30,
          borderRadius: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#ffffff',
          borderColor: '#ffffff',
          elevation: 2,
        }}>
        <Text style={{marginLeft: -100}}>Total-Quantity:</Text>
        <Text style={{marginRight: -10}}>Total:{totalAmount}</Text>
      </View>
      <Pressable
        onPress={CheckOutHandler}
        style={{
          borderWidth: 1,
          margin: 10,
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          backgroundColor: '#7bc991',
          elevation: 4,
          borderColor: '#7bc991',
        }}>
        <View>
          <Text style={{fontWeight: '700', color: 'white', fontSize: 18}}>
            CheckOut
          </Text>
        </View>
      </Pressable>
    </>
  );
};
export default CheckOut;
