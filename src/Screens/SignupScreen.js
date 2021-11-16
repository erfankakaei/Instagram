import React, {useState} from 'react';
import {
  Alert,
  Image,
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
import imagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../Constants/Colors';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profileImageSource, setProfileImageSource] = useState('');

  return (
    <View style={styles.appContainer}>
      <View style={styles.formContainer}>
        <TextInput
          autoCapitalize="none"
          style={styles.textInputs}
          value={firstName}
          onChangeText={texts => setFirstName(texts)}
          placeholder="First name"
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputs}
          value={lastName}
          onChangeText={texts => setLastName(texts)}
          placeholder="Last name"
        />
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
          value={emailAddress}
          onChangeText={texts => setEmailAddress(texts)}
          placeholder="E-mail address"
          keyboardType="email-address"
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputs}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputs}
          value={repeatPassword}
          onChangeText={text => setRepeatPassword(text)}
          placeholder="Repeat password"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.imagePicker}
          onPress={() =>
            Alert.alert('Select', 'Which way do you want to load you photo', [
              {
                text: 'Gallery',
                onPress: () => {
                  imagePicker
                    .openPicker({height: 50, width: 50, cropping: true})
                    .then(image => setProfileImageSource(image.path))
                    .catch(error => console.log(error));
                },
              },
              {
                text: 'Camera',
                onPress: () => {
                  imagePicker
                    .openCamera({
                      cropping: true,
                      height: 50,
                      width: 50,
                    })
                    .then(image => setProfileImageSource(image.path))
                    .catch(error => console.log(error));
                },
              },
            ])
          }>
          {profileImageSource == '' ? (
            <Ionicons
              name="person-add"
              color={colors.colorScheme == 'light' ? 'black' : 'white'}
              size={50}
            />
          ) : (
            <Image
              source={{uri: profileImageSource}}
              style={{height: 50, width: 50, borderRadius: 25}}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={
            username == '' ||
            password == '' ||
            username == '' ||
            emailAddress == '' ||
            password == '' ||
            repeatPassword == ''
              ? true
              : false
          }
          style={[
            styles.buttonContainer,
            {
              backgroundColor:
                username == '' ||
                password == '' ||
                username == '' ||
                emailAddress == '' ||
                password == '' ||
                repeatPassword == ''
                  ? colors.disabledButtons
                  : colors.enabledButton,
            },
          ]}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.texts}>Already have an account? </Text>
        <Text style={styles.linkText}>Log In.</Text>
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

  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputs: {
    height: HP('7%'),
    width: WP('90%'),
    borderColor: colors.tertiary,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 10,
  },
  imagePicker: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Signup;
