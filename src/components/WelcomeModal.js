import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Modal, Portal, Button, IconButton } from 'react-native-paper';

export default function WelcomeModal({ visible, onDismiss }) {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
        <View style={styles.iconsContainer}>
          <IconButton icon="star" style={styles.leftIcon} />
          <IconButton icon="close-circle" style={styles.rightIcon} onPress={onDismiss} />
        </View>
        <Text style={[styles.boldText, styles.marginBottom]}>Welcome to Soo</Text>
        <Text style={[styles.normalText, styles.marginBottom]}>Great to have you with us!</Text>
        <Button mode="contained" onPress={onDismiss} style={styles.button}>
          Got it
        </Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10, 
  },
  normalText: {
    fontSize: 16,
    marginBottom: 20, 
  },
  marginBottom: {
    marginBottom: 30,
  },
  button: {
    flex: 1,
  }
});
