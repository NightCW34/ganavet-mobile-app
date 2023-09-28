import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { WebPImageProps } from "./types";

const WebPImage: React.FC<WebPImageProps> = ({ source, style }) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={[styles.image, style]}
        resizeMode="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {},
});

export default WebPImage;
