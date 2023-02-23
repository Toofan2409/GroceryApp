import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {},
  text: {},
  headerHome: {
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    borderWidth: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerHomeLeft: {},
  headerHomeRight: {},
  headerHomeLefttext1: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
  headerHomeLefttext2: {
    fontSize: 14,
    marginLeft: 5,
  },

  // searchbar styles

  root: {padding: 5, overflow: 'hidden'},
  textinput: {
    paddingLeft: 40,
    overflow: 'hidden',
    elevation: 3,
    borderColor: '#eae4e4',
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 0.3,
    backgroundColor: 'white',
  },

  // Courousel styles
  // Category styles

  category: {
    margin: 5,
    marginBottom: 150,
  },
  categoryView: {
    marginBottom: 20,
    overflow: 'hidden',
    opacity: 1.2,
    elevation: 2,
    borderRadius: 10,
    borderColor: '#eee7e7',
    backgroundColor: '#daf2f2',
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 150,
    height: 140,
    borderWidth: 1,
  },
  categoryText: {
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },

  // category-Item
  card: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderColor: '#ffffff',
    backgroundColor: '#daeed3',
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 5,
    borderWidth: 0.2,
    width: 120,
    height: 190,
  },

  categoryitembutton: {
    elevation: 3,
    borderColor: 'green',
    marginRight: 2,
    backgroundColor: 'green',
    borderRadius: 5,
    width: 70,
    height: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 0.5,
    marginBottom: 5,
  },
  categoryitembuttontext: {
    color: 'white',
    fontWeight: '500',
  },
  price: {
    fontSize: 12,
    position: 'absolute',
    top: -28,
    color: 'black',
    fontWeight: '500',
  },

  // catdescription

  scroll1: {
    position: 'absolute',
    width: 90,
    height: 700,
    flex: 1,
    borderWidth: 0.5,
    top: -5,
    left: -5,
  },
  scroll2: {
    position: 'absolute',
    width: 280,
    height: 700,
    flex: 1,
    top: -5,
    left: 85,
  },
  dummydataView1: {
    borderColor: '#eee7e7',
    backgroundColor: '#daf2f2',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  dummydataView2: {
    borderColor: '#eee7e7',
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  modelView1: {
    margin: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 570,
  },
  modelView2: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    elevation: 3,
    borderColor: '#7bc991',
    backgroundColor: '#7bc991',
  },
});
