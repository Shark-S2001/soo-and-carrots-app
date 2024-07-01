import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%', // Ensures the Text component takes the full width
  },
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
    textAlign: 'left'
  },
})
