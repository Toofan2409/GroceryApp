import {Text, View, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useState, useEffect} from 'react';
import Geocoder from 'react-native-geocoding';
// const authorizationLevelOptions: ('whenInUse' | 'always' | 'auto')[] = [
//   'whenInUse',
//   'always',
//   'auto',
// ];

// const locationProviderOptions: ('playServices' | 'android' | 'auto')[] = [
//   'playServices',
//   'android',
//   'auto',
// ];

const Location = () => {
  useEffect(() => {
    Geocoder.init('AIzaSyAF4fZmtr0PdUrxqIJklVPUCYiTMprsMno');
    // Geocoder.from({
    //   lat: 24.4663635,
    //   lng: 74.8695249,
    // }).then(res => {
    //   //   console.log(res);
    // });
  }, []);
  Geolocation.getCurrentPosition(loc => {
    // console.log(loc);
  });
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
};

export default Location;
