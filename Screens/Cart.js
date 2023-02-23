import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useGetCartOfuserQuery} from '../Apislice/Apislice';
import {useNavigation} from '@react-navigation/native';
import {cartactions} from '../Apislice/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartitems = useSelector(state => state.CartSlice);
  const [cartdataserver, setcartdataserver] = useState([]);
  const {data: cartdataa} = useGetCartOfuserQuery();

  useEffect(() => {
    const getdata = async () => {
      const carts = await cartdataa;
      setcartdataserver(carts);
    };
    getdata();
  }, []);

  const placeOrderHabdler = () => {
    navigation.navigate('CheckOut');
  };

  return (
    <>
      <View
        style={{
          height: 50,
          backgroundColor: 'white',
          borderBottomWidth: 0.5,
          elevation: 5,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '600',
          }}>
          MY CART
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{margin: 5}}>
          {cartitems?.item.map(item => {
            console.log('item', item);
            const DeleteHandler = i => {
              dispatch(cartactions.RemovetoCart(item.id));
              // console.log('clickedDeleteHandler', i);
            };
            const AddHandler = i => {
              dispatch(cartactions.AddtoCart(item));
              // console.log('clickedAddHandler', i);
            };
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

                  <View
                    style={{
                      borderWidth: 0.5,
                      width: 100,
                      height: 25,
                      position: 'absolute',
                      right: 10,
                      top: 65,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderColor: '#7bc991',
                      elevation: 4,
                      backgroundColor: '#7bc991',
                      flexDirection: 'row',
                    }}>
                    <Pressable onPress={DeleteHandler}>
                      <View
                        style={{
                          justifyContent: 'center',
                          width: 50,

                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            // borderWidth: 1,
                            // marginLeft: 20,
                            fontWeight: 'bold',
                            backfaceVisibility: 'visible',
                          }}>
                          -
                        </Text>
                      </View>
                    </Pressable>
                    <Pressable onPress={AddHandler}>
                      <View
                        style={{
                          width: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            // marginRight: 20,
                            fontWeight: 'bold',
                            backfaceVisibility: 'visible',
                          }}>
                          +
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Pressable
        onPress={placeOrderHabdler}
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
            Place Order
          </Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  cartcontainer: {
    // flex: 1,
    height: 140,
    borderWidth: 1,
  },
});

export default Cart;
