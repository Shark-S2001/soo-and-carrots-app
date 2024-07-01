import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { IconButton } from 'react-native-paper'
import { theme } from '../core/theme'

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search competitions..."
        value={value}
        onChangeText={onChangeText}
      />
      <IconButton
        icon="magnify"
        size={18}
        onPress={() => console.log('Search pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    backgroundColor: theme.colors.surface,
    borderRadius: 5,
    marginVertical: 3,
  },
  input: {
    flex: 1,
    padding: 5,
    fontSize: 14,
    color: theme.colors.text,
  },
})

export default SearchBar
