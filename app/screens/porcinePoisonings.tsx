import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import styles from '../../components/stylesSheets/styleSheetInfromation' //Agregar un punto mas para que de la ruta correcta

const porcinePoisonings = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Plantas tóxicas para cerdos</Text>
        <Text style={styles.text}>
          1. Belladona (Atropa belladonna): La belladona contiene alcaloides tóxicos que pueden afectar el sistema nervioso de los cerdos.
        </Text>
        <Text style={styles.text}>
          2. Datura (Datura spp.): Las plantas de datura, como el estramonio, contienen alcaloides peligrosos que pueden causar problemas neurológicos y digestivos.
        </Text>
        <Text style={styles.text}>
          3. Hiedra Venenosa (Toxicodendron radicans): La hiedra venenosa puede causar irritación en la piel y en las mucosas de los cerdos.
        </Text>
        <Text style={styles.text}>
          4. Digital (Digitalis spp.): Las plantas de digital contienen sustancias que pueden afectar el corazón de los cerdos.
        </Text>
        <Text style={styles.text}>
          5. Hedionda (Ruta graveolens): La hedionda es tóxica y puede causar fotosensibilidad en los cerdos, lo que resulta en daño en la piel y otros problemas de salud.
        </Text>
        <Text style={styles.text}>
          6. Lantana (Lantana camara): La lantana es tóxica y puede causar problemas digestivos y hepáticos en los cerdos.
        </Text>
        <Text style={styles.text}>
          7. Ricino (Ricinus communis): Las semillas de ricino contienen ricina, una toxina altamente peligrosa para los cerdos.
        </Text>
        <Text style={styles.text}>
          8. Lechetrezna (Euphorbia spp.): La lechetrezna contiene un látex tóxico que puede causar irritación gastrointestinal y otros problemas de salud.
        </Text>
        <Text style={styles.text}>
          9. Agrimonia (Agrimonia spp.): Algunas variedades de agrimonia contienen alcaloides tóxicos que afectan el hígado y el sistema nervioso de los cerdos.
        </Text>
        <Text style={styles.text}>
          10. Algunas variedades de Trébol (Trifolium spp.): Algunas variedades de trébol pueden ser tóxicas si se consumen en grandes cantidades y contienen niveles altos de saponinas o alcaloides.
        </Text>
        <Text style={styles.text}>
          11. Solandra (Solandra spp.): La solandra es tóxica y puede causar problemas neurológicos y digestivos en los cerdos.
        </Text>
      </ScrollView>
    </View>
  );
};


export default porcinePoisonings;