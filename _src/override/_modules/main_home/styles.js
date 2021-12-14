import {StyleSheet} from 'react-native';
import {MixinsNew} from '@app/styles/index';

const styles = StyleSheet.create({
  containerScroll: {
    ...MixinsNew.padding({bottom: 70}),
  },
  buttonContainer: {
    backgroundColor:'red',
    // color:'white',
    alignSelf:'center',
    
  }
});

export default styles;
