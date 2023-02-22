import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {FlatList, Pressable, Text, View, Image, ScrollView} from 'react-native';
import {
  useGetAllProductQuery,
  useGetCategoryQuery,
} from '../../Apislice/Apislice';
import {styles} from '../../UI/Style';

const Category = () => {
  const navigation = useNavigation();
  const {data: productsRes, isFetching, isSuccess} = useGetAllProductQuery();
  const {data: category} = useGetCategoryQuery();
  // console.log(category);

  const categoryHandler = (data, index) => {
    // console.log('data', data);
    const categoryPressHandler = () => {
      navigation.navigate('CatDescription');
    };
    return (
      <View style={styles.categoryView}>
        <Pressable
          onPress={categoryPressHandler}
          android_ripple={{color: '#cccccc'}}>
          <Image
            style={{width: 170, height: 120}}
            resizeMode="cover"
            source={{uri: 'https://picsum.photos/200'}}
          />
          <Text style={{textAlign: 'center'}}>{data.item}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <>
      <View style={[styles.category]}>
        <FlatList
          numColumns={2}
          data={productsRes}
          renderItem={categoryHandler}
        />
      </View>
    </>
  );
};

export default Category;
