import React from "react";
import {Text, View} from "react-native";
import ExStyle from "../ExStyle";

const GridComp = () => {
    const listData = [
        {
            id: 1,
            name: "Hamza Grid"
        },
        {
            id: 2,
            name: "Hammad Grid"
        },
        {
            id: 3,
            name: "Hanan Grid"
        },
        {
            id: 4,
            name: "AbdulRehman Grid"
        },
        {
            id: 5,
            name: "Abdullah Grid"
        }
    ];
    return (
        <View style={{borderTopWidth: 2, borderColor: 'black', marginTop: 20}}>
            <Text style={{marginTop: 10,marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Grid Example</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
                {
                    listData.map((item)=>{
                        return <Text style={[ExStyle.gridItem,{backgroundColor: 'navy'}]} key={item.id}>{item.name}</Text>
                    })
                }
            </View>

        </View>
    );
}

export default GridComp;
