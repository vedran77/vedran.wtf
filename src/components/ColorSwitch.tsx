import React from 'react';
import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorSwitch = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle Theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
        />
    );
};

export default ColorSwitch;
