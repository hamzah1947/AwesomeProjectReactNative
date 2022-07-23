/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TextField from './src/components/TextField';
import { containerStyles } from './src/Styles/ContainerStyles';
import { normalTextFieldStyles, textFieldStyles } from './src/Styles/TextFieldStyles';
import * as Yup from 'yup';
import { Formik, Form, useField, useFormik } from 'formik';

const App: () => Node = () => {
  const initialValues = {
    email: "hmzmushtaq@gmail.com",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    password: Yup.string().required("Please enter password"),
  });

  const formik = useFormik({
  });
  return (
    <>
      <View style={containerStyles.containerV1}>
        <View style={containerStyles.containerV2}>

          <Formik

            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 400);
            }}
          >{({ handleSubmit }) => (
            <>
              <View style={textFieldStyles.fieldGroup}>
                <TextField label={"Email"} name={'email'} />
              </View>
              <View style={textFieldStyles.fieldGroup}>
                <TextField secureTextEntry={true} label={"Password"} name="password" />
              </View>
              <View style={textFieldStyles.fieldGroup}>
                <Button title='Submit' onPress={handleSubmit} />
              </View>
            </>
          )}</Formik>


        </View>
      </View>
    </>
  );
};



export default App;
