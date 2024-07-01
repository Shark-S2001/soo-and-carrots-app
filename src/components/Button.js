import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../core/theme';

export default function Button({ mode, style, leftIcon, rightIcon, children, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && styles.outlinedButton,
        mode === 'contained' && styles.containedButton,
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      <View style={styles.content}>
        {leftIcon && <Icon name={leftIcon} size={20} style={styles.iconLeft} />}
        <Text style={styles.text}>{children}</Text>
        {rightIcon && <Icon name={rightIcon} size={20} style={styles.iconRight} />}
      </View>
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 20, // Adjust border-radius as needed
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: theme.colors.cardtextcolor,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10, 
  },
  outlinedButton: {
    backgroundColor: theme.colors.registerbutton,
    borderColor: theme.colors.primary,
    color: theme.colors.cardtextcolor,
    borderWidth: 1,
  },
  containedButton: {
    backgroundColor: theme.colors.loginbutton,
    color: theme.colors.cardtextcolor,
  },
});
