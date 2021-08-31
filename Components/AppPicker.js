import React, { useState } from "react";
import {View,StyleSheet,TouchableWithoutFeedback,Modal,Button,FlatList,Text} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({  items, onSelectItem,
                      numberOfColumns=1,     
                      PickerItemComponent = PickerItem, 
                      placeholder, selectedItem }) 
{
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color='black'/>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns = {numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item = {item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);}}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F4',
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontFamily: "Avenir",
    
  },
});

export default AppPicker;
