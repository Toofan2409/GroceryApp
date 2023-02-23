import {Pressable, ScrollView, Text, View} from 'react-native';
import CategoryItem from '../Component/Home/CategoryItem';
import {dummydata, dummydata1} from '../Component/Home/dummydata';
import {styles} from '../UI/Style';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useGetCategoryQuery} from '../Apislice/Apislice';
import {useSelector} from 'react-redux';

const CatDescription = ({route}) => {
  const {data} = useGetCategoryQuery(route.params.catType);

  const cartitems = useSelector(state => state.CartSlice);
  console.log('cartitemsdes', cartitems);

  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const ViewCartHandler = () => {
    navigation.navigate('cartView');
  };

  return (
    <>
      <ScrollView style={styles.scroll1}>
        {dummydata.map(item => {
          return (
            <View style={styles.dummydataView1}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll2}>
        <View style={{borderWidth: 0}}>
          <ScrollView
            contentContainerStyle={{borderWidth: 1}}
            horizontal={true}>
            {dummydata.map(item => {
              return (
                <View style={styles.dummydataView2}>
                  <Text>{item}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <CategoryItem
          modalopen={isModalVisible}
          setModalVisible={setModalVisible}
          data={data?.products}
        />
      </ScrollView>
      {cartitems.item.length > 0 && (
        <View style={styles.modelView1}>
          <View style={styles.modelView2}>
            <View style={{marginLeft: 15}}>
              <Text style={styles.categoryitembuttontext}>
                {cartitems.item.length} item
              </Text>
              {/* <Text style={styles.categoryitembuttontext}>27 Rs</Text> */}
            </View>

            <Pressable onPress={ViewCartHandler}>
              <View style={{marginRight: 15}}>
                <Text
                  style={[
                    styles.categoryitembuttontext,
                    {fontSize: 18, fontWeight: 'bold'},
                  ]}>
                  View Cart
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default CatDescription;
