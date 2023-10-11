import * as React from 'react';
import { ScrollView, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';
const fundo = require("../../assets/fundoAbout.png");

function AboutScreen({navigation}: any) {
  return (

    <ScrollView style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Tela do Conteúdo')} style={styles.menuItem}>
         <Ionicons name="md-close" size={28} color="white" />
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.text}>Tela de Sobre</Text>
        </View>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Tela de Entrada')}>
          <Ionicons name="md-home" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <Image source={fundo} style={styles.backImage} />

      <View style={styles.content}>
        <Text style={styles.title2}>Aplicação de Navegação</Text>
        <Text style={styles.info}>
          Criação de um aplicativo com três telas: "Tela Inicial", "Tela de Conteúdo" e "Tela de Informação", usando o React Navigation para criar a navegação entre essas telas. Além disso, há um componente de cabeçalho personalizado que exiba o título da tela atual e um botão de retorno.
        </Text>
      </View>

      <View style={styles.boxs}>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Tela de Entrada')}>
          <Ionicons name="md-home" size={28} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Tela do Conteúdo')}>
          <Ionicons name="md-newspaper" size={28} color="black" />
          <Text>Conteúdo</Text>
        </TouchableOpacity>

        <View style={styles.box}>
          <Ionicons name="md-person" size={28} color="black" />
          <Text>Sobre</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#000',
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  content: {
    padding: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 10,
    fontSize: 16,
  },
  boxs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default AboutScreen;