import { Text, View, TextInput, Button } from "react-native";
import React, { useState } from 'react';

var N = [ 'Ewha', 'June', 'Jane', 'Nick' ];
var P = [1234, 3347, 1111, 1212];
var text_st = {fontSize:20, borderWidth:1, margin:3, padding:3, flex:1};
var input_st = {fontSize:20, borderWidth:1, margin:3, padding:3, flex:1};

export default function Index() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [refresh, setRefresh] = useState(0);  // redraw를 강제하기 위한 dummy state

    function add_item() {
        N.push(name);
        P.push(phone);
        setRefresh(refresh+1);
    }

    var L = [ ];
    for(var i = 0; i < N.length; i++) {
        var a = <View style={{flexDirection:'row', width:'100%'}}><Text style={text_st}>{N[i]}</Text><Text style={text_st}>{P[i]}</Text></View>
        L.push(a); /* 만들어진 a 값을 L 안에 쌓기 */
    }

  return (
    <View>
      <Text style={{fontSize:40}}>Phone Book</Text>
      <View style={{flexDirection:'row', width:'100%', padding:10}}>
        <TextInput style={input_st} onChangeText={ setName }/>
        <TextInput style={input_st} onChangeText={ setPhone }/>
        <Button title="   Add   " onPress={add_item}/>
      </View>
      {L}
    </View>
  );
}
