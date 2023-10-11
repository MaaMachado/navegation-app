import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ContentScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Content Screen</Text>
      <Button title="Get started ▶" onPress={() => navigation.navigate('Tela de Sobre')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ContentScreen;