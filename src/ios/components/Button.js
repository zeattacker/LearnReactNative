import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { btnStyle, btnTxt } = styles;
    const { text, onPressed } = props;

    return (
        <TouchableOpacity onPress={onPressed} style={btnStyle}>
            <Text style={btnTxt}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    btnStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    },
    btnTxt: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;