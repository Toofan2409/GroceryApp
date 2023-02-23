import {useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAddtoCartMutation} from '../../Apislice/Apislice';
import {cartactions} from '../../Apislice/CartSlice';
import {styles} from '../../UI/Style';
const CategoryItem = ({modalopen, setModalVisible, data}) => {
  const dispatch = useDispatch();
  const [added, setadded] = useState(0);
  console.log(added);

  const cartitems = useSelector(state => state.CartSlice);
  // console.log('cartitems', cartitems);
  const [Addcart] = useAddtoCartMutation();

  const toggleModal = () => {
    const model = !modalopen;
    setModalVisible(model);
  };

  const Decrement = () => {
    added > 0 && setadded(() => added - 1);
    added > 0 && dispatch(cartactions.RemovetoCart(added - 1));
  };

  const increement = () => {
    dispatch(cartactions.AddtoCart(added + 1));
    setadded(() => added + 1);
  };

  const categoryItemHandler = data1 => {
    // console.log('wer', data);

    const DeleteHandler = () => {
      dispatch(cartactions.RemovetoCart(data1.item.id));
    };

    const AddHandler = () => {
      // const cartdata = await Addcart({
      //   userId: 1,
      //   products: [
      //     {
      //       id: data1.item.id,
      //       quantity: 1,
      //     },
      //   ],
      // }).unwrap();
      // console.log(cartdata);

      // console.log(data1.item);

      dispatch(cartactions.AddtoCart(data1.item));
      setModalVisible(!modalopen);
    };

    return (
      <View style={styles.card}>
        <Image
          resizeMode="stretch"
          source={{uri: data1.item.images[0]}}
          style={{
            width: '100%',
            height: 160,
            position: 'absolute',
            left: 0,
            bottom: 40,
          }}
        />
        <View style={{position: 'absolute', left: 2}}>
          <Text style={styles.price}>{data1.item.price} Rs</Text>
        </View>
        <View
          style={[
            styles.categoryitembutton,
            {
              backgroundColor: '#7bc991',
              borderColor: '#7bc991',
            },
          ]}>
          {
            //   <>
            //     <Pressable onPress={Decrement}>
            //       <View>
            //         <Text
            //           onPress={() => {
            //             added < 1 && toggleModal();
            //           }}
            //           style={[
            //             styles.categoryitembuttontext,
            //             {
            //               fontSize: 30,
            //               position: 'relative',
            //               bottom: 10,
            //             },
            //           ]}>
            //           -
            //         </Text>
            //       </View>
            //     </Pressable>

            //     <Text style={[styles.categoryitembuttontext]}>{added}</Text>
            //     <TouchableOpacity onPress={increement}>
            //       <View>
            //         <Text
            //           style={[
            //             styles.categoryitembuttontext,
            //             {
            //               fontSize: 20,
            //               alignItems: 'center',
            //               position: 'relative',
            //               top: -2,
            //             },
            //           ]}>
            //           +
            //         </Text>
            //       </View>
            //     </TouchableOpacity>
            //   </>
            // ) :
            <>
              <View>
                <Pressable
                  onPress={DeleteHandler}
                  style={{borderWidth: 0, width: 25, alignItems: 'center'}}>
                  <Text
                    style={[
                      styles.categoryitembuttontext,
                      {color: 'green', fontWeight: 'bold'},
                    ]}>
                    -
                  </Text>
                </Pressable>
              </View>

              <View>
                <Pressable
                  onPress={AddHandler}
                  style={{borderWidth: 0, width: 25, alignItems: 'center'}}>
                  <Text
                    style={[
                      styles.categoryitembuttontext,
                      {color: 'green', fontWeight: 'bold'},
                    ]}>
                    +
                  </Text>
                </Pressable>
              </View>
            </>
          }
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.category}>
        <FlatList
          keyExtractor={idx => Math.random() + 1}
          numColumns={2}
          data={data}
          renderItem={categoryItemHandler}
        />
      </View>
    </View>
  );
};

export default CategoryItem;
