import React from 'react';
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup"

import AppForm from '../Components/AppForm';
import AppFormField from '../Components/AppFormField';
import AppFormPicker from '../Components/AppFormPicker';
import SubmitButton from '../Components/SubmitButton';
import Screen from '../Components/Screen';
import CategoryPickerItem from '../Components/CategoryPickerItem';
import FormImagePicker from '../Components/FormImagePicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least 1 image")
});

const categories = [
  { label: "Clothing", value: 1, backgroundColor: '#fc5c65', icon: 'shoe-heel' },
  { label: "Technology", value: 2, backgroundColor: '#fd9644', icon: 'headphones' },
  { label: "Accessory", value: 3, backgroundColor: '#fed330', icon: 'lipstick' },
  { label: "Trading Cards", value: 4, backgroundColor: '#26de81', icon: 'cards' },
  { label: "Decoration", value: 5, backgroundColor: '#45aaf2', icon: 'ornament' },
  { label: "Stationary", value: 6, backgroundColor: '#a55eea', icon: 'pencil' },
];

function AddItem() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          description: "",
          category: null,
          images: []
        }}
        // alerting the user
        onSubmit={() => alert("Item has been successfully added")}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        {/* alerting the user */}
        <SubmitButton title="Post" onPress={() => Alert.alert('Upload Successfully!')} />
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
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: 150
  },
  menuIcon: {
    marginBottom: 40,
  }
});

export default AddItem;