import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://2.bp.blogspot.com/-rQk5dvI-Eqo/TjhcdNliWjI/AAAAAAAAAB8/wN3exr23O8g/s1600/NAVALHA+DOURADA+-+LOGOTIPO+copy.png",
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Nossa História</Text>

        <Text style={styles.text}>
          Em 25 de abril de 1992, marca o nascimento da Associação de Capoeira
          Navalha Dourada. O Professor Hivaldo, que recebeu sua formação do
          Mestre Mirão da Associação de Capoeira Rosa Baiana, testemunhou o
          ardor e entusiasmo de seu sobrinho Paulo Sérgio Santana Machado nas
          rodas de capoeira e competições. Impressionado pela dedicação de Paulo
          Sérgio, ele o incentivou a estabelecer uma academia de capoeira para
          aprimorar ainda mais suas habilidades e se desenvolver como
          praticante. Foi assim que no bairro de Bonsucesso, em 1992, deu-se
          início à jornada da Associação de Capoeira Navalha Dourada. Em 1999,
          circunstâncias familiares levaram Hivaldo até a Bahia, fazendo com que
          ele confiasse a continuação desse legado ao seu sobrinho, que já
          estava atuando como estagiário na Academia Arte Negra do Mestre Lapa.
          Nessa academia, Paulo Sérgio graduou-se em 2001. O ano de 2003
          testemunhou o retorno do Professor Hivaldo a São Paulo, onde ele se
          uniu novamente ao sobrinho na trajetória compartilhada pela Capoeira
          Arte Negra. Juntos, alcançaram as graduações de Contramestre e Mestre
          em 2009. Sentindo a necessidade de revigorar o grupo Navalha Dourada,
          a primeira cerimônia de batizado foi realizada, durante a qual Paulo
          Sérgio foi oficialmente reconhecido como professor. Em 2012, Mestre
          Hivaldo, ciente de sua saúde debilitada, outorgou a Paulo Sérgio o
          título de Contramestre, apenas dois meses antes de seu falecimento.
          Nesse contexto, Mestre Lapa assumiu o papel de mestre conselheiro de
          Paulo Sérgio, tornando-se seu guia e mentor após o falecimento do
          Mestre Irapuru, que já detinha essa honraria. No transcurso do ano de
          2022, Mestre Lapa, como gesto de reconhecimento pela dedicação e
          maestria demonstradas, conferiu a Paulo Sérgio a posição de Mestre de
          Capoeira.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: "80%",
    height: 200,
  },
  content: {
    margin: 16,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default AboutUs;
