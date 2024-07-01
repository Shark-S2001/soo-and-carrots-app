import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoginBackground from '../components/LoginBackground'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function WelcomePage({ navigation }) {
  return (
    <LoginBackground>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header>Soo and Carrots</Header>
        </View>
        <View style={styles.footerContainer}>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('CreateAccountScreen')}
            icon="arrow-right-circle"
          >
            Sign Up for free
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}
            icon="email-outline"
            >
            Continue with Email
          </Button>
        </View>
      </View>
    </LoginBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
})
