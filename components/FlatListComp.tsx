import React from "react";
// @ts-ignore
import {View, Text, FlatList} from "react-native";
import ExStyle from "../ExStyle";

const FlatListComp = () => {
    const listData = [
        {
            id: 1,
            name: "Hamza"
        },
        {
            id: 2,
            name: "Hammad"
        },
        {
            id: 3,
            name: "Hanan"
        },
        {
            id: 4,
            name: "AbdulRehman"
        },
        {
            id: 5,
            name: "Abdullah"
        }
    ];
    // @ts-ignore
    return (
        <View style={{borderTopWidth: .5, borderColor: 'black', paddingTop: 10}}>
            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Flat List Example</Text>
            <FlatList data={listData} renderItem={({item}) => <Text style={[ExStyle.textBox]}>{item.id}. {item.name}</Text>} />
        </View>
    );
};

export default FlatListComp;
