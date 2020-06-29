import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const imageScreen = (props) => {
    return (
      
        <View>
            <Image style={styles.image} resizeMode='contain' source={props.imageSource} />
        </View>
           
    );
};

const styles=StyleSheet.create({});

export default imageScreen;