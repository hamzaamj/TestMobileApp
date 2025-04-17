import React from 'react';
import {Text,View, Button} from 'react-native';
import UserData from "./components/UserData";

const App = ()=>{
    const ClickEvt = () =>{
        console.warn("Hey! to click krwa he liya");
    }
    const ClickEvtVal = (val)=>{
        console.warn(val);
    }
    return (
        <View>
            <Text style={{marginTop:50,fontSize:30, textAlign:'center'}}>Hey Hamza</Text>
            <Text>Han bae yaha bhi hai k nhi??</Text>
            <View style={{marginTop:20, width:300, paddingLeft:100}}>
                <Button title='Click 2 me...' onPress={ClickEvt} />
                <Button title='Click 3 me...' color={'red'} onPress={() => ClickEvtVal("Hey Hamza")} />
            </View>
            <UserData/>
            <UserData/>
        </View>
    );
}

export default App;