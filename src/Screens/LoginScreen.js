import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';

import colors from '../Constants/Colors';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.appContainer}>
      <Text style={[styles.texts, styles.topText]}>Welcome</Text>

      <View style={styles.formContainer}>
        <Text style={styles.instagramLogo}>Instagram</Text>

        <TextInput
          autoCapitalize="none"
          style={styles.textInputs}
          value={username}
          onChangeText={texts => setUsername(texts)}
          placeholder="Username"
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputs}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={username == '' || password == '' ? true : false}
          style={[
            styles.buttonContainer,
            {
              backgroundColor:
                username == '' || password == ''
                  ? colors.disabledButtons
                  : colors.enabledButton,
            },
          ]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.button}>Log In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.texts}>Don't have an account? </Text>
        <Text style={styles.linkText}>Sign Up.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  texts: {
    color: colors.opposite,
  },

  appContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  topText: {paddingTop: 10},

  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instagramLogo: {color: colors.opposite, fontSize: 40, marginBottom: 10},
  textInputs: {
    height: HP('7%'),
    width: WP('90%'),
    borderColor: colors.tertiary,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 10,
  },
  buttonContainer: {
    height: HP('7%'),
    width: WP('90%'),
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button: {color: '#ffffff'},

  linkContainer: {
    flexDirection: 'row',
    height: HP('7%'),
    width: WP('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: colors.tertiary,
    borderTopWidth: 1,
  },
  linkText: {color: 'blue'},
});

export default Login;
