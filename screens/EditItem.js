import React from 'react';
import { StyleSheet } from "react-native";
import * as Yup from "yup"

import AppForm  from '../Components/AppForm';
import AppFormField from '../Components/AppFormField';
import AppFormPicker from '../Components/AppFormPicker';
import SubmitButton from '../Components/SubmitButton';

import CategoryPickerItem from '../Components/CategoryPickerItem';
import Screen from '../Components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
  });
  
  const status = [
    { label: "In Progress", value: 1, backgroundColor:'#fc5c65', icon: 'battery-10'},
    { label: "Traded", value: 2, backgroundColor:'#26de81', icon: 'battery' },
  ];
  
  function EditItem() {
    return (
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            status: null,
            description: "",
            
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormPicker items={status} name="status" numberOfColumns = {3} PickerItemComponent = {CategoryPickerItem} placeholder="Status" />
          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Update" />
        </AppForm>
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "#efc7c1",
      flex: 1,
    },
  });

export default EditItem;