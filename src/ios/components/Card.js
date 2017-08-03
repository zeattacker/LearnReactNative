import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
    const { cardStyles } = styles;

    return (
        <View style={cardStyles}>
            {props.children}
        </View>
    );
};

const styles = {
    cardStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ececec',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    }
};

export default Card;