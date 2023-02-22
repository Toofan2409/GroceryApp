import {Text, TextInput, View} from 'react-native';
import {styles} from '../../UI/Style';
import Icon from './Icon';

const Searchbar = () => {
  return (
    <>
      <View style={styles.root}>
        <TextInput
          placeholder="Search for atta, dal, coke and many more"
          style={styles.textinput}
        />
        <View style={{position: 'absolute'}}>
          <Icon
            left={10}
            marginTop={15}
            height={25}
            width={25}
            iconurl={
              'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png'
            }
          />
        </View>
      </View>
    </>
  );
};

export default Searchbar;
