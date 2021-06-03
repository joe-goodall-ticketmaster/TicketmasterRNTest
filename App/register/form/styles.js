import { StyleSheet } from 'react-native';
import { bluetikets } from '../../utils/colors';

const styles = StyleSheet.create({
  itemInput: {
    borderWidth: 1,
    borderColor: '#6e6e6e',
    borderRadius: 0,
    marginVertical: 8,
  },
  errorText: {
    color: 'crimson',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  rowStyle: {
    width: '100%',
  },
  colStyle: {
    alignContent: 'center',
    backgroundColor: '#ffff',
  },
  containerInput: {
    borderWidth: 1,
    borderRadius: 0,
    marginVertical: 8,
    paddingRight: 8,
    margin: 3,
  },
  buttonStyle: {
    backgroundColor: bluetikets,
  },
  title: {
    color: bluetikets,
  },
});

export default styles;
