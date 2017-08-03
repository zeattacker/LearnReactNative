import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ data }) => {

    const { title, artist, thumbnail_image, image, url } = data;
    const { thumbStyle, thumbImgStyle, headerStyle, titleTextStyle, coverStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbStyle}>
                    <Image style={thumbImgStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                
            </CardSection>

            <CardSection>
                <Image style={coverStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPressed={() => Linking.openURL(url)} text="Buy Now" />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    titleTextStyle: {
        fontSize: 18
    },
    thumbImgStyle: {
        height: 50,
        width: 50
    },
    thumbStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    coverStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
