import React from "react";

function Output() {
  return (
    <View>
      <Text style={styles.text}>{props.name}</Text>
      <TextInput
        id={props.value}
        name={props.value}
        value={formik.values.firstName}
        onChangeText={formik.handleChange(props.value)}
        onBlur={formik.handleBlur(props.value)}
        autoCapitalize='none'
        style={styles.textInput}
      />
    </View>
  );
}

export default Output;
