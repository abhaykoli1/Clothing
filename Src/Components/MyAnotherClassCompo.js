// Screen2.js
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import MyClassComponent from "./MyClassComponent";

class MyAnotherClassCompo extends MyClassComponent {
  // constructor(props) {
  // super(props);
  // this.myClassComponentRef = React.createRef();
  // }

  openDrawerFromAnotherClass = () => {
    this.myClassComponentRef.current.openDrawer();
  };
  //
  //   childFunction() {
  //     this.parentFunction(); // Call parent function
  //     console.log("Child function called!");
  //   }

  render() {
    // const obj = new MyAnotherClassCompo();
    // const call = () => {
    //   obj.childFunction();
    // };
    return (
      <View>
        <Text>Fido the Golden Retriever</Text>
        <Button title="Call Function" onPress={() => call()} />

        <View style={{ marginTop: 100 }}>
          <Text>Drawer open</Text>
          {/* <MyClassComponent ref={this.myClassComponentRef} /> */}

          {/* <Button
            title="Open Drawer from Another Class"
            onPress={this.openDrawerFromAnotherClass}
          /> */}

          {/* <Button title="Open Drawer" onPress={this.props.onOpenDrawer} /> */}
        </View>
      </View>
    );
  }
}

export default MyAnotherClassCompo;
