import React from "react";
import {Text, View} from "react-native";
import ExStyle from "../ExStyle";

const GridComp = (props: { gridData: any; }) => {
    const listData = props.gridData;
    return (
        <View style={{borderTopWidth: 2, borderColor: 'black', marginTop: 20}}>
            <Text style={{marginTop: 10,marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Grid Example</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
                {
                    listData.map((item: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; })=>{
                        return <Text style={[ExStyle.gridItem,{backgroundColor: 'navy'}]} key={item.id}>{item.name}</Text>
                    })
                }
            </View>

        </View>
    );
}

export default GridComp;
