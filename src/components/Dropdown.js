import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';
import Icon from 'react-native-vector-icons/Feather';


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Femail', 'Male',];

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToggleDropdown} style={styles.button}>
                <Text style={styles.buttonText}>{selectedOption || 'Select an option'}</Text>
                <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color={Colors.light_Black} />

            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdown}>
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option}
                            onPress={() => handleSelectOption(option)}
                            style={styles.option}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 5,
        borderColor: Colors.borderColor,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    buttonText: {
        color: Colors.light_Black,
        fontSize: 16,
    },
    dropdown: {
        borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 5,
        borderColor: Colors.borderColor,
        // height: 50
    },
    option: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 16,
        color: 'black',
    },
});

export default Dropdown;
