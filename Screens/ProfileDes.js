import {Text, Pressable, View} from 'react-native';
import auth from '@react-native-firebase/auth';
const ProfileDes = ({navigation}) => {
  const LogoutHandler = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate('signup');
  };
  return (
    <View style={{flex: 1, borderWidth: 0}}>
      {/* <View>
        <Text> YOUR INFORMATION</Text>
      </View>
      <View>
        <Text> OTHER INFORMATION </Text>
      </View> */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          // borderWidth: 1,
        }}>
        <Pressable onPress={LogoutHandler} style={{}}>
          <View
            style={{
              borderWidth: 1,
              width: 300,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
              borderRadius: 10,
              backgroundColor: '#7dbb80',
              borderColor: '#7dbb80',
              elevation: 4,
            }}>
            <Text> LogOut </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileDes;
