import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import WelcomeModal from '../components/WelcomeModal'; // Import your WelcomeModal component here

export default function Dashboard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Show the modal when the Dashboard screen mounts
    setModalVisible(true);

    // Clean up function to hide the modal when leaving the Dashboard screen
    return () => {
      setModalVisible(false);
    };
  }, []);

  return (
    <Background>
      <Logo />
      <Header>You are on Dashboard</Header>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'WelcomePage' }],
          })
        }>
        Logout
      </Button>
      <WelcomeModal visible={modalVisible} onDismiss={() => setModalVisible(false)} />
    </Background>
  );
}
