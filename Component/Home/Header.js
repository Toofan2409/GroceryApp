import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../UI/Style';
import Icon from './Icon';

const Header = () => {
  const navigation = useNavigation();

  const ProfileHandler = () => {
    navigation.navigate('profileDes');
    console.log('profile clicked');
  };

  return (
    <View style={styles.headerHome}>
      <View style={styles.headerHomeLeft}>
        <Text style={styles.headerHomeLefttext1}> Delivery in 10 minutes </Text>
        <Text style={styles.headerHomeLefttext2}>
          {' '}
          311, Pocket G27, Sector 3G{' '}
        </Text>
      </View>
      <Icon
        left={-65}
        marginTop={29}
        height={20}
        width={20}
        iconurl={
          'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png'
        }
      />
      <Pressable onPress={ProfileHandler} android_ripple={{color: 'white'}}>
        <View>
          <Icon
            height={40}
            width={40}
            iconurl={
              'https://img.icons8.com/sf-black-filled/64/null/administrator-male.png'
            }
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
