import {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../UI/Style';
const CategoryItem = ({modalopen, setModalVisible, data}) => {
  const [added, setadded] = useState(0);
  console.log(added);

  const toggleModal = () => {
    const model = !modalopen;
    setModalVisible(model);
  };
  const increement = () => {
    setadded(() => added + 1);
  };
  const Decrement = () => {
    added > 0 && setadded(() => added - 1);
  };

  const categoryItemHandler = data => {
    // console.log(data);

    return (
      <View style={styles.card}>
        <Image
          source={{uri: data.item.imgUrl}}
          style={{width: 120, height: 190, position: 'absolute', left: 0}}
        />
        <View style={{position: 'absolute', left: 5}}>
          <Text style={styles.price}>158 Rs</Text>
        </View>
        <View
          style={[
            styles.categoryitembutton,
            {
              backgroundColor: modalopen ? 'green' : '#dbf3db',
              borderColor: modalopen ? 'green' : '#dbf3db',
            },
          ]}>
          {modalopen ? (
            <>
              <Pressable onPress={Decrement}>
                <View>
                  <Text
                    onPress={() => {
                      added < 1 && toggleModal();
                    }}
                    style={[
                      styles.categoryitembuttontext,
                      {
                        fontSize: 30,
                        position: 'relative',
                        bottom: 10,
                      },
                    ]}>
                    -
                  </Text>
                </View>
              </Pressable>

              <Text style={[styles.categoryitembuttontext]}>{added}</Text>
              <TouchableOpacity onPress={increement}>
                <View>
                  <Text
                    style={[
                      styles.categoryitembuttontext,
                      {
                        fontSize: 20,
                        alignItems: 'center',
                        position: 'relative',
                        top: -2,
                      },
                    ]}>
                    +
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <View>
              <Pressable>
                <Text
                  onPress={() => {
                    setModalVisible(!modalopen);
                  }}
                  style={[
                    styles.categoryitembuttontext,
                    {color: !modalopen ? 'green' : 'green'},
                  ]}>
                  ADD
                </Text>
              </Pressable>
            </View>
          )}
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
