import * as React from 'react';
import { Appbar } from 'react-native-paper';

const ScreenAppBar = ({ goBack }) => (
    <Appbar.Header>
      <Appbar.BackAction onPress={(goBack) => {}} />
      <Appbar.Content title="Create Account" />
    </Appbar.Header>
);

export default ScreenAppBar;


