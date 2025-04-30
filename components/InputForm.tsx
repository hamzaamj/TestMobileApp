import React, {useState} from "react";
import {Text, TextInput, View, Pressable} from "react-native";
import ExStyle from "../ExStyle";



const InputForm = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [address , setAddress] = useState('');
    const [password , setPassword] = useState('');
    const [formDivDisplay , setFormDivDisplay] = useState(false);

    const clearFrom = ()=>{
        setName('');
        setEmail('');
        setAddress('');
        setPassword('');
    }

    return (
        <View style={{
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: 'black',
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 2
        }}>
            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Fill All Values In The Form</Text>
            <TextInput
                style={ExStyle.inputBox}
                placeholder="Enter your name"
                onChangeText={(val) => setName(val)}
                value={name}
            />
            <TextInput
                style={ExStyle.inputBox}
                placeholder="Enter your email"
                onChangeText={(val) => setEmail(val)}
                value={email}
            />
            <TextInput
                style={ExStyle.inputBox}
                placeholder="Enter your address"
                onChangeText={(val) => setAddress(val)}
                value={address}
            />
            <TextInput
                style={ExStyle.inputBox}
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={(val) => setPassword(val)}
                value={password}
            />
            <View style={ExStyle.btnWrapper}>
                <Pressable style={ExStyle.customBtn}>
                    <Text style={ExStyle.btnText}>Save</Text>
                </Pressable>
                <Pressable onPress={() => clearFrom()} style={[ExStyle.customBtn, {backgroundColor: '#ec3621'}]}>
                    <Text style={ExStyle.btnText}>Clear All</Text>
                </Pressable>
            </View>
            <View>
                {
                    formDivDisplay ?
                        <View style={{marginTop: 20,borderTopWidth: 1, borderColor: 'black', paddingTop: 10, marginBottom: 20}}>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Form Submit Values</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Name: {name}</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Email: {email}</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Address: {address}</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Password: {password}</Text>
                        </View>
                        :
                        <View style={{marginTop: 20,borderTopWidth: 1, borderColor: 'black', paddingTop: 10, marginBottom: 20}}>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Form Values</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Name: {name}</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Email: {email}</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Address: {address}</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Password: {password}</Text>
                        </View>
                }

            </View>
        </View>
    );
}
export default InputForm;
