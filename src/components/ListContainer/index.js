import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const spaceTop = Platform.OS === "ios" ? 20 : 0;
const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const data = [1, 2, 3, 4, 5, 6];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHeight: 0,
    };
  }

  _onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ listHeight: contentHeight });
    const { onContentSizeChange } = this.props;
    onContentSizeChange(contentWidth, contentHeight);
  };

  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          height: 56,
          backgroundColor: "#F7F7F7",
          marginBottom: 20,
          borderRadius: 5,
          borderColor: "#C4C6C4",
          borderWidth: 1,
        }}
      />
    );
  };

  render() {
    return (
      <View style={[styles.container, { height: this.state.listHeight + 20 }]}>
        <FlatList
          style={styles.list}
          onContentSizeChange={this._onContentSizeChange}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={data}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: screenH / 2.5 - 46,
    backgroundColor: "#F3F6F5",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  list: {
    width: screenW - 40,
    borderRadius: 5,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
