import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Category from '../Component/Home/Category';
import Courousl from '../Component/Home/Courousel';
import Header from '../Component/Home/Header';
import Location from '../Component/Home/Location';
import Searchbar from '../Component/Home/Searchbar';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log('1222', user);
  return (
    <View style={{flex: 1}}>
      <Location />
      <Header />
      <Searchbar />
      <Courousl />
      <Category />
    </View>
  );
};

export default Home;
