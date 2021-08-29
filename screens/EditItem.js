import React from 'react';
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup"

import AppForm from '../Components/AppForm';
import AppFormField from '../Components/AppFormField';
import AppFormPicker from '../Components/AppFormPicker';
import SubmitButton from '../Components/SubmitButton';
import Screen from '../Components/Screen';
import CategoryPickerItem from '../Components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least 1 image")
});

const categories = [
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
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Image style={styles.picture} source={listing.image} />
        <AppFormPicker items={categories} name="category" numberOfColumns={3} PickerItemComponent={CategoryPickerItem} placeholder="Category" />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Update" onPress={() => Alert.alert('There is nothing to trade at the moment!')} />
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