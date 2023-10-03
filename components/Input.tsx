import React from 'react';
import { Input as ElementInput, InputProps } from 'react-native-elements';

interface InputPropsExtension extends InputProps {
    placeholder: string;
}

const Input: React.FC<InputPropsExtension> = React.memo(({ placeholder, ...props }) => {
    return <ElementInput placeholder={placeholder} {...props} />;
});

export default Input;
