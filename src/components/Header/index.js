import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../../images/hbg.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Islamic App</Text>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../../images/share.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    backgroundColor: "#142836",
    borderBottomColor: "#132735",
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  button: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  headerText: {
    alignSelf: "center",
    color: "#EEF5F7",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});

