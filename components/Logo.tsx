import React from 'react';
import { Image, StyleSheet } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const Logo: React.FC = () => {
    return <Image style={GlobalStyles.logo} source={require('../assets/logo.png')} />;
};

export default Logo;
