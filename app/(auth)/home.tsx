import { View, Dimensions } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

import { LineChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularText from "../../components/Texts/RegularText";
import ButtonCardComponent from "../../components/Buttons/ButtonCards";

import { Link, useRouter } from "expo-router";

const Home = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", marginBottom: 3 }}>
        <Link href={"/screens/milk"} asChild>
          <ButtonCardComponent
            label={"Sugerencias"}
            imageSource={require("../../assets/images/icon-1.png")}
            onPress={() => {}}
          />
        </Link>
        <Link href={"/screens/nutrition"} asChild>
          <ButtonCardComponent
            label={"Concentrado"}
            imageSource={require("../../assets/images/icon-2.png")}
            onPress={() => {}}
          />
        </Link>
        <Link href={"/screens/bovineVaccination"} asChild>
          <ButtonCardComponent
            label={"Calendario"}
            imageSource={require("../../assets/images/icon-3.png")}
            onPress={() => {}}
          />
        </Link>
      </View>
      <View style={{ alignSelf: "center" }}>
        <RegularText style={{ fontFamily: "InriaSans_700Bold" }}>
          Promedio Ganancia de Peso semanal
        </RegularText>
      </View>

      <View>
        <LineChart
          data={{
            labels: ["Lun", "Mar", "Mierc", "Juev", "Vier", "Sab", "Dom"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 30}
          height={220}
          yAxisLabel="Kg"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#008CBA",
            backgroundGradientFrom: "#29B6F6",
            backgroundGradientTo: "#4FC3F7",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#4FC3F7",
            },
          }}
          style={{
            marginVertical: 8,
            marginHorizontal: 15,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={{ alignSelf: "center" }}>
        <RegularText style={{ fontFamily: "InriaSans_700Bold" }}>
          Produccion Semanal de Leche
        </RegularText>
      </View>

      <View>
        <LineChart
          data={{
            labels: ["Lun", "Mar", "Mierc", "Juev", "Vier", "Sab", "Dom"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 30}
          height={220}
          yAxisLabel="Lt "
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#27ae60",
            backgroundGradientFrom: "#39c792",
            backgroundGradientTo: "#53dfc0",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#53dfc0",
            },
          }}
          style={{
            marginVertical: 8,
            marginHorizontal: 15,
            borderRadius: 16,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
