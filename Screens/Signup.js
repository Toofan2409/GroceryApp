import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {authactions} from '../Apislice/Authslice';

const Signup = ({navigation}) => {
  const Dispatch = useDispatch();
  const [mobile, setmobile] = useState('');
  const [code, setcode] = useState('');
  const [userdata, setuserdata] = useState({});
  const [authicate, setauthenticate] = useState(false);
  const [Confirm, setConfirm] = useState(null);
  const [height, setheight] = useState(400);

  console.log(authicate);
  // console.log('confirm', Confirm);

  const signupHandler = async () => {
    try {
      const res = await auth().signInWithPhoneNumber(`+91 ${mobile}`);
      setConfirm(res);
      setheight(400);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setauthenticate(true);
        Dispatch(authactions.SignUp(userdata));
        navigation.navigate('home');
      } else {
        setauthenticate(false);
      }
      // console.log('user', user);
    });
  }, [setauthenticate]);

  // 8URQuB2Vw1g0rLueix0UQ0pDF4I3

  const VerificationHandler = async () => {
    setheight(400);
    try {
      const res = await Confirm.confirm(code);
      setuserdata(res);
      setConfirm(null);

      // if (authicate === true) {
      //   navigation.navigate('home');
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          overflow: 'hidden',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          resizeMode="cover"
          source={require('../assets/food.jpg')}
          style={{width: 360, height: height}}
        />
      </View>

      <Text
        style={{
          textAlign: 'center',
          marginTop: 30,
          marginBottom: -20,
          fontSize: 18,
          color: 'black',
          fontWeight: '900',
        }}>
        One Stop Solution For Your Daily Need{' '}
      </Text>

      {Confirm === null ? (
        <>
          <View style={{margin: 10}}>
            <TextInput
              onFocus={() => {
                setheight(260);
              }}
              keyboardType="decimal-pad"
              maxLength={13}
              onChangeText={e => {
                setmobile(e);
              }}
              placeholder="Enter Mobile Number"
              style={{
                fontSize: 14,
                paddingLeft: 10,
                width: '100%',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 50,
                borderWidth: 0.5,
                elevation: 3,
                borderColor: '#cccccc',
                backgroundColor: '#ffffff',
              }}
            />
          </View>
          <View
            style={{
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              height: 50,
              elevation: 5,
              borderRadius: 10,
              borderColor: '#3fb936',
              backgroundColor: '#2d8b27',
              overflow: 'hidden',
            }}>
            <TouchableOpacity onPress={signupHandler}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.root}>
          {/* <Text style={styles.text1}> Enter OTP </Text> */}
          <TextInput
            onChangeText={e => {
              setcode(e);
            }}
            onFocus={() => {
              setheight(260);
            }}
            placeholder="Enter OTP"
            style={styles.textinput}
          />
          <TouchableOpacity onPress={VerificationHandler} style={styles.button}>
            <Text style={styles.text}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
  },
  textinput: {
    marginTop: 30,
    borderWidth: 0.5,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  button: {
    elevation: 2,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#2d8b27',
    borderColor: '#2d8b27',
  },
  text1: {
    color: 'black',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    margin: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});

export default Signup;
