import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';
const img = require("../../assets/imageFundo.jpg");

function ContentScreen({navigation}: any) {
  return (
    <ScrollView style={styles.header}>
        <View style={styles.apresentacao}>
            <View style={styles.introApre}>
            <Text style={styles.vindo}>Seja bem-vindo ao Black Space</Text>
            </View>

            <Image source={img} style={styles.img} />
        </View>
        

        <View style={styles.galCategorias}>
        <Text style={styles.ttCt}>Categoria</Text>
        <View style={styles.itens}>
            <TouchableOpacity onPress={() => alert(`Categoria News selecionada!`)}>
                <View style={styles.amploIcon}>
                <View style={styles.espIcon}>
                    <Ionicons name="md-newspaper" size={28} color="black" />
                </View>
                <Text style={styles.type}>News</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert(`Categoria Market selecionada!`)}>
                <View style={styles.amploIcon}>
                <View style={styles.espIcon}>
                    <Ionicons name="md-calculator" size={28} color="black" />
                </View>
                <Text style={styles.type}>Market</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Tela de Sobre')}>
                <View style={styles.amploIcon}>
                <View style={styles.espIcon}>
                    <Ionicons name="md-person" size={28} color="black" />
                </View>
                <Text style={styles.type}>About</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>


        
        <View style={styles.produtos}>
        <Text style={styles.ttProd}>Mais populares</Text>
        
        {produtos.map((produto, index) => (
            <View key={index} style={styles.galProd}> 
            <View style={styles.prod}>
            <View>
                <Text style={styles.nomeProd}>{produto.nome}</Text>
                <Text style={styles.descProd}>{produto.descricao}</Text>
            </View>
            </View>
        </View>
        ))}
        </View>
    </ScrollView>
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
  
    header:{
      flex: 1,
      backgroundColor: '#fff',
    },
  
    apresentacao: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
    },
  
    introApre: {
      display: 'flex',
      marginTop: 20,
    },
  
    vindo: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 8,
    },

    img: {
        width: '90%',
        height: 200,
        resizeMode: "cover",
        borderRadius: 10,
        marginTop: 5,
    },
  
    galCategorias: {
      padding: 16,
      backgroundColor: '#000',
      marginTop: 15,
    },
  
    ttCt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 14,
      color: '#fff',
    },
  
    itens: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  
    amploIcon: {
      alignItems: 'center',
    },
  
    espIcon: {
      width: 40,
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },

    type: {
        color: '#fff',
    },
  
    produtos: {
      paddingHorizontal: 16,
      marginTop: 20,
    },
  
    ttProd: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
    },
  
    galProd: {
      marginBottom: 16,
      backgroundColor: "#000",
      padding: 15,
    },
  
    prod: {
      flexDirection: 'row',
    },
  
    nomeProd: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
  
    descProd: {
      width: '90%',
      fontSize: 12,
      color: '#fff',
    },
  
  });
  
  
  const produtos = [
    {
      nome: "Notícia 1",
      descricao: "由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书",
    },
    {
      nome: "Notícia 2",
      descricao: "也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。",
    },
    {
      nome: "Notícia 3",
      descricao: "也称乱数假文或者哑元文本， 由于曾经一台匿名的打印机刻意打乱了-盒印刷字体从而造出",
    },
    {
      nome: "Notícia 4",
      descricao: "是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了",
    },
    {
      nome: "Notícia 5",
      descricao: "常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了-盒印刷字体从而造出-本字体样品书",
    },
    {
      nome: "Notícia 6",
      descricao: "也称乱数假文或者哑元文本， 是印刷及一台匿名的打印机刻意打乱一本字体样品书",
    },
  ];  

  export default ContentScreen;