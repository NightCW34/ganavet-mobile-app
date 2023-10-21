  import React from "react";
  import { Text, View, StyleSheet, ScrollView } from "react-native";
  

  const bovinePoisonings = () => {
    return (
      <View >
        <ScrollView>
          <Text style={[styles.text, styles.title]}>1. Plantas tóxicas</Text>
          <Text style={styles.text}>
            • Lantana (Lantana camara): Esta planta es altamente tóxica para el
            ganado. Puede causar daño hepático y trastornos neurológicos.
          </Text>
          <Text style={styles.text}>
            • Higuera (Ficus spp.): Las higueras contienen una sustancia llamada
            ficina, que puede ser perjudicial para los bovinos.
          </Text>
          <Text style={styles.text}>
            • Higuera (Ficus spp.): Las higueras 
          • Hedionda (Ruta graveolens): La hedionda es tóxica y puede causar
          fotosensibilidad en el ganado, lo que resulta en daño en la piel y otros
          problemas de salud.
          </Text>
          <Text style={styles.text}>
            • Ricino (Ricinus communis): Las semillas de ricino contienen ricina,
            una toxina altamente peligrosa para los bovinos.
          </Text>
          <Text style={styles.text}>
            • Estramonio (Datura stramonium): El estramonio contiene alcaloides
            tóxicos que pueden afectar el sistema nervioso y causar problemas
            digestivos.
          </Text>
          <Text style={styles.text}>
            • Lechetrezna (Euphorbia spp.): La lechetrezna contiene un látex
            tóxico que puede causar irritación gastrointestinal y otros problemas
            de salud.
          </Text>
          <Text style={styles.text}>
            Agrimonia (Agrimonia spp.): Esta planta puede contener alcaloides
            tóxicos que afectan el hígado y el sistema nervioso de los bovinos.
          </Text>
          <Text style={styles.text}>
            • Artemisia (Artemisia spp.): Algunas variedades de artemisia son
            tóxicas para los bovinos y pueden causar problemas neurológicos.
          </Text>
          <Text style={styles.text}>
            • Trébol Alejandrino (Trifolium alexandrinum): Puede contener altos
            niveles de nitratos, lo que puede llevar a problemas de toxicidad por
            nitratos en el ganado.
          </Text>
          <Text style={styles.text}>
            • Digital (Digitalis spp.): Las plantas de digital contienen
            sustancias que pueden afectar el corazón de los bovinos.
          </Text>
          <Text style={styles.text}>
            • Algunas variedades de Hiedra (Hedera spp.): Algunas variedades de
            hiedra pueden ser tóxicas si se consumen en grandes cantidades.
          </Text>
          <Text style={styles.text}>• Helecho Macho: causa hematuria</Text>
          <Text style={[styles.text, styles.title]}>
            2. Alimentos con Niveles Elevados de Urea o Amoniaco
          </Text>
          <Text style={styles.text}>
            La urea y el amoníaco son productos químicos que pueden ser tóxicos en
            altas concentraciones. Algunos suplementos alimenticios mal formulados
            pueden tener niveles excesivos de estos compuestos.
          </Text>
          <Text style={[styles.text, styles.title]}>
            3. Productos Químicos y Pesticidas
          </Text>
          <Text style={styles.text}>
            La exposición a productos químicos agrícolas o pesticidas puede ser
            tóxica para los bovinos. Esto puede ocurrir si los animales tienen
            acceso a áreas tratadas o si se usan recipientes contaminados para
            darles de beber.
          </Text>
          <Text style={[styles.text, styles.title]}>
            4. Subproductos de la Industria
          </Text>
          <Text style={styles.text}>
            Algunos subproductos de la industria, como el aceite de cocina usado o
            el bagazo de caña de azúcar tratado con sustancias químicas, pueden
            ser tóxicos si se incluyen en la alimentación de los bovinos.
          </Text>
          <Text style={[styles.text, styles.title]}>
            5. Alimentos Altos en Oxalatos
          </Text>
          <Text style={styles.text}>
            Algunas plantas, como la espinaca, el trébol, la remolacha y otras,
            contienen altos niveles de oxalatos, que pueden causar problemas en la
            absorción de calcio y provocar trastornos metabólicos.
          </Text>
        </ScrollView>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: '20%',
      paddingHorizontal: '10%',
    },
    title: {
      paddingTop: '10%',
      paddingBottom: '10%',
      textAlign: "left",
      fontWeight: "bold",
    },
    text: {
      paddingTop: 10,
      paddingBottom: 15,
      textAlign: "justify",
    },
  });

  export default bovinePoisonings;