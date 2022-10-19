import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import UseAuth from "../Hooks/UseAuth";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function SignInSignUp({ navigation }) {
  const { signin, token } = UseAuth();

  const validationSchemaSignIn = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const formikSignIn = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaSignIn,
    onSubmit: () => {
      const data = {
        password: formikSignIn.values.password,
        email: formikSignIn.values.email,
      };
      signin(data);

      if (token) {
        navigation.navigate("Pokedex");
      } else {
        Alert.alert("Email is not registered");
      }
    },
  });

  const signIn = (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Email</Text>
      <TextInput
        value={formikSignIn.values.email}
        onChangeText={formikSignIn.handleChange("email")}
        onBlur={formikSignIn.handleBlur("email")}
        autoCapitalize='none'
        style={styles.textInput}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        value={formikSignIn.values.password}
        onChangeText={formikSignIn.handleChange("password")}
        onBlur={formikSignIn.handleBlur("password")}
        autoCapitalize='none'
        style={styles.textInput}
        secureTextEntry={true}
      />

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "lightgreen" : "pink",
          },
          styles.button,
        ]}
        onPress={formikSignIn.handleSubmit}
      >
        <Text>Submit</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "lightgreen" : "pink",
          },
          styles.button,
        ]}
        onPress={handleRegister}
      >
        <Text>Create new account</Text>
      </Pressable>
    </View>
  );

  return (
    <>
      <View style={styles.container}>{signIn}</View>
    </>
  );
}

export default SignInSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
  textInput: {
    backgroundColor: "white",
    width: 250,
    height: 35,
    padding: 5,
    borderRadius: "10%",
  },
  button: {
    height: 40,
    width: 150,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10%",
  },
});
