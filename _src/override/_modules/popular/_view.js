import React from 'react';
import {ScrollView,Image,View} from 'react-native';
import {withProfiler} from '@sentry/react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '@app/components/Text';
import { useQuery } from '@apollo/client'
import ProductSlider from '@app/components/AddonProductSlider';
import NavBar from '@app/components/NavBar';
import AtomNavBarRight from '@app/_modules/main_home/atoms/NavBarRight';
import styles from '@app/_modules/popular/styles';
import {GET_PRODUCTS_BY_BRAND} from '@app/_modules/popular/services/schema';
import { Title } from 'react-native-paper';

const Popular = ({ onNavigateTrackOrder}) => {
  const {loading, error, data} = useQuery(GET_PRODUCTS_BY_BRAND)
  if(loading||error) return <></>
  if(data)
  console.log(data)
  return (
    <SafeAreaView>
      <NavBar
        useLogo
        childrenRight={
          <AtomNavBarRight onNavigateTrackOrder={onNavigateTrackOrder} />
        }
      />
      <ScrollView contentContainerStyle={styles.containerScroll}>
      <Text bold xlarge style={styles.title}>
        Best Seller Products
      </Text>
      {data.products.items.map(item=>(
        <View style={styles.containerView}>
        <Title style={styles.productTitle}>{item.name}</Title>
        <Text>{item.price_range.maximum_price.final_price.value} </Text>
        <Image
          style={styles.img}
          source={item.small_image.url}
          />  
        </View>
      ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default withProfiler(Popular, {name: 'Popular'});