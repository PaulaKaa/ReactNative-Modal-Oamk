import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context"; //npm i react-native-safe-area-context

export default function App() {
  //modal: open or not
  const [modalVisible, SetModalVisible] = useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => SetModalVisible(false)}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text>This is modal...</Text>
              <Pressable onPress={() => SetModalVisible(!modalVisible)}>
                <Text style={styles.close}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable onPress={() => SetModalVisible(true)}>
          <Text style={styles.title}>Show modal message</Text>
        </Pressable>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 110,
    paddingRight: 110,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  close: {
    fontWeight: 'bold',
    marginTop: 25,
  }
});
