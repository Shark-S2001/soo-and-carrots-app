import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Text, Checkbox } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import CompetitionsScreen from './CompetitionsScreen'
import ScreenAppBar from '../components/Appbar'

export default function CreateAccountScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [competition, setCompetition] = useState('')

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z]{3,})(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+=?]).{8,}$/
    return regex.test(password)
  }

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = validatePassword(password.value) ? '' : 'Password must be 8 characters long, include 3 uppercase letters, a lowercase letter, a number, and a special character.'
    const confirmPasswordError = password.value === confirmPassword.value ? '' : 'Passwords do not match.'

    if (emailError || passwordError || confirmPasswordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError })
      return
    }

    if (!termsAccepted) {
      // Handle terms not accepted case
      return
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);


  return (
    <ScrollView style={styles.container}>
        <ScreenAppBar goBack={navigation.goBack} />

      <Background>
        <TextInput
          label="Competition to signup"
          returnKeyType="next"
          value={competition}
          onFocus={() => navigation.navigate('CompetitionsScreen')}
        />
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="next"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          returnKeyType="done"
          value={confirmPassword.value}
          onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
          error={!!confirmPassword.error}
          errorText={confirmPassword.error}
          secureTextEntry
        />
        <TextInput
          label="First Name"
          returnKeyType="next"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          label="Last Name"
          returnKeyType="done"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={termsAccepted ? 'checked' : 'unchecked'}
            onPress={() => setTermsAccepted(!termsAccepted)}
          />
          <Text style={styles.checkboxLabel}>
            By signing up, I agree to Cloit's Terms & Conditions and Privacy Policy
          </Text>
        </View>
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  form: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  icon: {
    fontSize: 16,
    paddingRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})
