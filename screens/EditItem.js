import React from 'react';
import { StyleSheet, Image } from "react-native";

import AppForm from '../Components/AppForm';
import AppFormField from '../Components/AppFormField';
import AppFormPicker from '../Components/AppFormPicker';
import SubmitButton from '../Components/SubmitButton';
import Screen from '../Components/Screen';
import CategoryPickerItem from '../Components/CategoryPickerItem';

const progress = [
  { label: "In Progress", value: 1, backgroundColor: '#fc5c65', icon: 'battery-low' },
  { label: "Traded", value: 4, backgroundColor: '#26de81', icon: 'battery-high' },
];

function EditItem({ route }) {
  const listing = route.params

  return (

    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          description: "",
          category: null,
        }}
        onSubmit={() => alert("Item has been updated Successfully")}
      >
        <Image style={styles.picture} source={listing.image} />
        <AppFormPicker 
          items={progress} 
          name="progress" 
          numberOfColumns={3} 
          PickerItemComponent={CategoryPickerItem} 
          placeholder="Progress Status" 
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Update"/>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#efc7c1",
    flex: 1,

  },
  picture: {
    width: "100%",
    height: 300,

  },
  menuIcon: {
    marginBottom: 40,
  }
});

export default EditItem;