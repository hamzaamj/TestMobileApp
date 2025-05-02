import React from "react";
import {Text, View} from "react-native";
import ExStyle from "../ExStyle";

const MapFunctionComp = () => {
    const listData = [
        {
            id: 1,
            name: "Hamza Map"
        },
        {
            id: 2,
            name: "Hammad Map"
        },
        {
            id: 3,
            name: "Hanan Map"
        },
        {
            id: 4,
            name: "AbdulRehman Map"
        },
        {
            id: 5,
            name: "Abdullah Map"
        }
    ];
    return (
        <View style={{borderTopWidth: 2, borderColor: 'black', marginTop: 20}}>
            <Text style={{marginTop: 10,marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Map Function Example</Text>
            {
                listData.map((item)=>{
                    return <Text style={[ExStyle.textBox,{backgroundColor: 'navy'}]} key={item.id}>{item.id}. {item.name}</Text>
                })
            }
        </View>
    );
}

export default MapFunctionComp;
