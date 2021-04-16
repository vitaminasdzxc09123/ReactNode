import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 240,
    width: 280,
    marginLeft: 24,
    marginTop: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffff',
  },

  containerCard: {
    height: 280,
    width: 210,
    marginLeft: 30,
    marginTop: 80,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffff',
  },

  Image: {
    width: '96%',
    height: 180,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 8,
  },
  Point: {
    fontSize: 35,
    marginLeft: 140,
    marginTop: -177,
    color: 'gray',
  },
  Number: {
    fontSize: 17,
    marginLeft: 163,
    marginTop: -24,
    color: 'gray',
  },

  TextAccaunt: {
    marginTop: 30,
    marginLeft: 40,
    fontSize: 24,
  },
  ViewClock: {
    width: 130,
    overflow: 'hidden',
    height: 35,
    backgroundColor: '#ffff',
    marginLeft: 30,
    marginTop: 40,
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
  ViewMidle: {
    backgroundColor: '#ffff',
    marginTop: 40,
    alignSelf: 'center',
    width: 400,
    height: 50,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 0,
  },
  ViewMidles: {
    backgroundColor: '#EFEFEF',
    alignSelf: 'center',
    borderBottomLeftRadius: 8,
    marginTop: 2,
    borderBottomRightRadius: 8,
    width: 400,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },
  MidleText: {
    color: '#3D60CB',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 12,
  },
  MidlesText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 280,
    marginTop: -23,
  },
  JanuaryText: {
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
    marginTop: 7,
  },
  OpenCards: {
    fontSize: 18,
    position: 'absolute',
    marginTop: 75,
  },

  OpenCardsSecond: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 17,
    height: 50,
  },
});

export default styles;
