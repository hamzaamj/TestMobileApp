import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import ExStyle from "../ExStyle";

const UserData = (props: { userName: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; })=> {
    const style = StyleSheet.create({
        textBox: {
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            height: 50,
            backgroundColor: '#1998a8',
            borderRadius: 10,
            textAlignVertical: 'center',
            color: 'white',
            borderWidth: 3,
            borderColor: 'orange',
        }

    });
    return(
        <View>
            <Text style={style.textBox}>Its me! your boy...</Text>
            <Text style={[ExStyle.textBox]}>{props.userName}</Text>
        </View>
    );
}

// @ts-ignore

export default UserData;
