/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Header from "./src/components/Header";
import ListContainer from "./src/components/ListContainer";

const spaceTop = Platform.OS === "ios" ? 20 : 0;
const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0,
    };
  }

  _onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({
      contentHeight,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView
          contentContainerStyle={{
            height: this.state.contentHeight + screenH / 2.5 - 6,
          }}
        >
          <View style={styles.body}>
            <ListContainer onContentSizeChange={this._onContentSizeChange} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECEDF1",
    paddingTop: spaceTop,
    flex: 1,
  },
  body: {
    height: Dimensions.get("screen").height / 2.5,
    backgroundColor: "#172B39",
    overflow: "visible",
  },
});
