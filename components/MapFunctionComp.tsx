import React from "react";
import {Text, View} from "react-native";
import ExStyle from "../ExStyle";

const MapFunctionComp = (props: { nameArray: any; }) => {
    const listData = props.nameArray;
    // @ts-ignore
    return (
        <View style={{borderTopWidth: 2, borderColor: 'black', marginTop: 20}}>
            <Text style={{marginTop: 10,marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Map Function Example</Text>
            {
                listData.map((item: { id: boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; })=>{
                    return <Text style={[ExStyle.textBox,{backgroundColor: 'navy'}]} >{item.id}. {item.name}</Text>
                })
            }
        </View>
    );
}

export default MapFunctionComp;
