import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Context } from '../provider/PropsProvider';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Context.Consumer>
        {data => 
          <>
            <Text>Welcome to Profile Page: {data.fromProvider} </Text>
            <Button title='Home' onPress={() => navigation.push('Home')} />
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
