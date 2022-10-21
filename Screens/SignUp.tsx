import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSignUp } from "../Api/users";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function SignUp(props: any) {
  const queryClient = useQueryClient();

  const mutationSignUp = useMutation(apiSignUp, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      props.navigation.navigate("Login");
      Alert.alert("Success! Please Sign In");
    },
    onError: () => {
      Alert.alert("Unable to Sign Up");
    },
  });

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(5, "Name should be of minimum 5 characters length")
      .required("Name is required"),
    lastName: yup
      .string()
      .min(5, "Name should be of minimum 5 characters length")
      .required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    changePassword: yup
      .string()
      .required("Password is required")
      .when("password", {
        is: (val: string | any[]) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Both password need to be the same"),
      }),
    role: yup
      .string()
      .lowercase()
      .oneOf(["admin", "developer", "client"])
      .required("Role is required (Admin, Developer or Client)"),
  });

  const handleSignIn = () => {
    props.navigation.navigate("Login");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      changePassword: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      const data = {
        first_name: formik.values.firstName,
        last_name: formik.values.lastName,
        password: formik.values.password,
        email: formik.values.email,
        role: formik.values.role,
      };
      mutationSignUp.mutate(data);
    },
  });

  const signUp = (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>First Name</Text>
        <TextInput
          value={formik.values.firstName}
          onChangeText={formik.handleChange("firstName")}
          onBlur={formik.handleBlur("firstName")}
          autoCapitalize='none'
          style={styles.textInput}
        />
        <Text style={styles.text}>Last Name</Text>
        <TextInput
          value={formik.values.lastName}
          onChangeText={formik.handleChange("lastName")}
          onBlur={formik.handleBlur("lastName")}
          autoCapitalize='none'
          style={styles.textInput}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          autoCapitalize='none'
          style={styles.textInput}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          autoCapitalize='none'
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          value={formik.values.changePassword}
          onChangeText={formik.handleChange("changePassword")}
          onBlur={formik.handleBlur("changePassword")}
          autoCapitalize='none'
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Text style={styles.text}>Role (Admin/Developer/Client)</Text>
        <TextInput
          value={formik.values.role}
          onChangeText={formik.handleChange("role")}
          onBlur={formik.handleBlur("role")}
          autoCapitalize='none'
          style={styles.textInput}
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "lightgreen" : "pink",
            },
            styles.button,
          ]}
          onPress={formik.handleSubmit}
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
          onPress={handleSignIn}
        >
          <Text>Sign In</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );

  return <View style={styles.container}>{signUp}</View>;
}

export default SignUp;

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
    borderRadius: 10,
  },
  button: {
    height: 40,
    width: 150,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

function alert(arg0: string) {
  throw new Error(arg0);
}
