import React from "react";
// @ts-ignore
import {View, Text, FlatList} from "react-native";
import ExStyle from "../ExStyle";

const FlatListComp = (props: { nameArray: any; }) => {
    const listData = props.nameArray;
    // @ts-ignore
    return (
        <View style={{borderTopWidth: .5, borderColor: 'black', paddingTop: 10}}>
            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Flat List Example</Text>
            <FlatList data={listData} renderItem={({item}) => <Text style={[ExStyle.textBox]}>{item.id}. {item.name}</Text>} />
        </View>
    );
};

export default FlatListComp;
