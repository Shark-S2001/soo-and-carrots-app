import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import Background from '../components/Background';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import ScreenAppBar from '../components/Appbar';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import { competitionValidator } from '../helpers/competitorValidator';

export default function CreateAccountScreen({ route, navigation }) {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [competition, setCompetition] = useState('');

  useEffect(() => {
    if (route.params?.competition) {
      setCompetition(route.params.competition);
    }
  }, [route.params?.competition]);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z]{3,})(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+=?]).{8,}$/;
    return regex.test(password);
  };

  const onSignUpPressed = () => {
    const competitionError = competitionValidator(competition);
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = password.value === confirmPassword.value ? '' : 'Passwords do not match.';
  
    if (nameError || emailError || confirmPasswordError) {
      // Handle setting errors
      setCompetition(competitionError); // Assuming you have a state for competition error
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
      return;
    }
  
    if (!termsAccepted) {
      // Handle terms not accepted case
      return;
    }
  
    // Reset navigation to Dashboard
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };
  

  return (
    <ScrollView style={styles.container}>
      <ScreenAppBar goBack={navigation.goBack} />
      <Background>
        <TextInput
          label="Competition to signup *"
          returnKeyType="next"
          value={competition}
          onFocus={() => navigation.navigate('CompetitionsScreen')}
        />
        <TextInput
          label="Email *"
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
          label="Password *"
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
          label="First Name in English *"
          returnKeyType="next"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          label="Last Name in English *"
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
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
