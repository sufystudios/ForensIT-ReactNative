import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Lightbox from 'react-native-lightbox';

const ExtraImageDetail = (props) => {

    return (
        <View>
            <Lightbox activeProps={{ width: '100%', height: '100%' }}>
                <Image style={styles.image} resizeMethod="resize" resizeMode='cover' source={props.imageSource} />
            </Lightbox>
            <Text style={styles.text}>Name:{props.title} Fluorescence:{props.fluorescence}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 100,
        justifyContent: 'center'
    },
    text: {
        color: "red"
    }
});

export default ExtraImageDetail;