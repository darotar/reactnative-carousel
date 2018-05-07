import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 106,
    flexDirection: 'row'
  },

  track: {
    backgroundColor: '#d7d7d7',
    overflow: 'hidden',
    width: 8,
    height: 8,
    borderRadius: 70
  },

  bar: {
    backgroundColor: '#949494',
    width: 8,
    height: 8,
    position: 'absolute',
    left: 0,
    top: 0,
  },

  image: {
    width: 180,
    height: 180,
    transform: [{ rotate: '45deg' }],
    marginBottom: 60,
    marginTop: 80
  },

  itemWrap: {
    alignItems: 'center'
  },

  itemText: {
    width: 236,
    textAlign: 'center'
  },
  
  skip: {
    marginBottom: 45
  }
  
});