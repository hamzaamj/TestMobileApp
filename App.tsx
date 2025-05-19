import React, {useState} from 'react';
import {Text,View, Button, ScrollView } from 'react-native';
import UserData from "./components/UserData";
import ExStyles from "./ExStyle";
import InputForm from "./components/InputForm";
import FlatListComp from "./components/FlatListComp";
import MapFunctionComp from "./components/MapFunctionComp.tsx";
import GridComp from "./components/GridComp.tsx";
const App = ()=>{
    let nameArr = ['Hamza', 'Hammad', 'Hanan', 'AbdulRehman', 'Abdullah'];
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
    const gridData = [
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
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState(nameArr[counter]);
    const ClickEvt = ()=>{
        setCounter(prevCounter => {
                const newCounter = prevCounter >= 4 ? 0 : prevCounter + 1;
                setName(nameArr[newCounter]);
                return newCounter;
            });
    }
    const ClickEvtVal = (val: string)=>{
        setName(val);
        setCounter(0);
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
                <Text style={{marginTop:45,fontSize:30, textAlign:'center'}}>Hey {name}</Text>
                <UserData userName={name}/>
                <UserData userName={name}/>
                <View style={{marginTop:20, width:300, paddingLeft:100}}>
                    <Button color={'#4981f2'} title='Click to change name' onPress={ClickEvt} />
                </View>
                <View style={{marginTop:20, width:300, paddingLeft:100}}>
                    <Button title='Reset' color={'#ec3621'} onPress={() => ClickEvtVal("Hamza")} />
                </View>
                <InputForm/>
                <FlatListComp nameArray={listData}/>
                <MapFunctionComp nameArray={listData}/>
                <GridComp gridData={gridData}/>
            </View>
        </ScrollView>
    );
}

export default App;
