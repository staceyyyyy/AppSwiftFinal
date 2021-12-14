import {StyleSheet} from 'react-native';
import {MixinsNew} from '@app/styles/index';

const styles = StyleSheet.create({
  containerScroll: {
    ...MixinsNew.padding({bottom: 70}),
  },
  card : {
    justifyContent:'center',
    textAlign:'center',
  },
  img: {
    width:300,
    height:300,
    backgroundColor:'#fceff1',
  },
  productTitle:{
    fontSize: 15,
  },
  containerView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign:'center'
  }
});

export default styles;
