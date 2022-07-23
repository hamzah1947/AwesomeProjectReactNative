import { StyleSheet } from 'react-native';
export const containerStyles = StyleSheet.create({
  containerV1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  containerV2: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
    padding: 10
  },
});
