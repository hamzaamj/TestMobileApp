import React, {useState} from 'react';
import {Text,View, Button} from 'react-native';
import UserData from "./components/UserData";
import ExStyles from "./ExStyle";

const App = ()=>{
    let nameArr = ['Hamza', 'Hammad', 'Hanan', 'AbdulRehman', 'Abdullah'];
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState(nameArr[counter]);
    const ClickEvt = ()=>{
        setCounter(prevCounter => {
                const newCounter = prevCounter >= 4 ? 0 : prevCounter + 1;
                setName(nameArr[newCounter]);
                return newCounter;
            });
    }
    const ClickEvtVal = (val)=>{
        console.warn(val)
    }

    return (
        <View>
            <Text style={{marginTop:50,fontSize:30, textAlign:'center'}}>Hey Hamza</Text>
            <Text>{counter}</Text>
            <Text>{name}</Text>
            <UserData userName={name}/>
            <UserData userName={name}/>
            <View style={{marginTop:20, width:300, paddingLeft:100}}>
                <Button title='Click to change name...' onPress={ClickEvt} />
                <Button title='Click 3 me...' color={'red'} onPress={() => ClickEvtVal("Hey Hamza")} />
            </View>
        </View>
    );
}

export default App;
