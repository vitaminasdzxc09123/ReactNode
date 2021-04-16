import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ViewClock: {
    width: 130,
    overflow: 'hidden',
    height: 35,
    backgroundColor: '#ffff',
    marginLeft: 30,
    marginTop: 35,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  TextClock: {
    position: 'absolute',
    marginLeft: 40,
    marginTop: 5,
    fontSize: 18,
  },
});

export default styles;
