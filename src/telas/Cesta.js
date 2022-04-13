import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { View } from "react-native";

import Texto from '../components/Texto';

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <SafeAreaView>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.cesta}>
          <Texto style={estilos.nome}>Cesta de Verduras</Texto>
          <View style={estilos.fazenda}>
            <Image source={logo}  style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
          </View>
          <Texto style={estilos.descricao}>
            Uma cesta com produtos selecionados cuidadozamente da fazendo direto
            pra sua cozinha
          </Texto>
          <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nome: {
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
      fontWeight: "bold",
  },
  nomeFazenda: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
  },
  imagemFazenda: {
    width: 32,
    height:32,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  descricao: {
      color: "#A3A3A3",
      fontSize: 16,
      lineHeight: 26,
      textTransform: 'capitalize',
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});