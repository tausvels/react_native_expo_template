import 'react-native-gesture-handler';
import React, { createContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Context } from '../provider/PropsProvider';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Context.Consumer>
        {data =>
         <> 
          <Text>Hello From Home: {data.fromApp} </Text>
          <Button title='Profile' onPress = { () => navigation.navigate('Profile')} />
         </>
        }
      </Context.Consumer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
