import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import { theme } from '../core/theme'

export default function Button({ mode, style, children, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </PaperButton>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 10, // Add rounded corners
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    marginHorizontal: 10,
  }
})
