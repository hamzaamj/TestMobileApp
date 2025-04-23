import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import ExStyles from "../ExStyle";

const UserData = (props)=> {
    return(
        <View>
            <Text style={style.textBox}>Its me! your boy...</Text>
            <Text style={[ExStyles.textBox]}>{props.userName}</Text>
        </View>
    );
}

const style = StyleSheet.create({
        textBox: {
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            height: 50,
            backgroundColor: 'blue',
            borderRadius: 10,
            textAlignVertical: 'center',
            color: 'white',
            borderWidth: 3,
            borderColor: 'orange',
        }

    });
export default UserData;
