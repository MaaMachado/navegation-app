import * as React from 'react';
import { View, Text, Image, TouchableOpacity , StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const backgroundImg = require("../../assets/imageFundo.jpg");

function HomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
        <Image source={backgroundImg} style={styles.backgroundImg} />

        <SafeAreaView>

            <Text style={styles.tittle}>Opening Screen</Text>
            <Text style={styles.desc}>Welcome to the opening screen of the navigation application. Click on the button below to go to the next screen.</Text>
            
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Tela do Conteúdo')}>
                <Text style={styles.btnText}>Get started ▶</Text>
            </TouchableOpacity>

        </SafeAreaView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    width: '100%',
    height: '70%',
    resizeMode: "cover",
    marginTop: -150,
    marginBottom: 10,
  },
  tittle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20,
  },
  desc: {
    fontSize: 18,
    fontStyle: 'normal',
    marginTop: 15,
    marginLeft: 25,
    marginRight: 8,
  },
  btn: {
    width: '70%',
    padding: 10,
    marginLeft: 25,
    marginTop: 15,
    backgroundColor: '#000',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});