import React from 'react';
import { Image } from 'react-native-elements';
import GlobalStyles from '../styles/GlobalStyles';

const Logo: React.FC = () => {
    return <Image style={GlobalStyles.logo} source={require('../assets/logo.png')} />;
};

export default Logo;
