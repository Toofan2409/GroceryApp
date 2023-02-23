import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import Store from './Apislice/Authslice';
import Cart from './Screens/Cart';
import CatDescription from './Screens/CatDescription';
import CheckOut from './Screens/CheckOut';
import Home from './Screens/Home';
import Payment from './Screens/Payment';
import ProfileDes from './Screens/ProfileDes';
import Signup from './Screens/Signup';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen
            options={{headerShown: true}}
            name="cartView"
            component={Cart}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="profileDes"
            component={ProfileDes}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="CatDescription"
            component={CatDescription}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="CheckOut"
            component={CheckOut}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="Payment"
            component={Payment}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
