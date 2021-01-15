import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"#e8beeb"}}>
                <View>
                    <Text style={{textAlign:"center",fontSize:40,color:"white"}}>Story Hub</Text>
                </View>

                <View>
                    <TextInput placeholder="Story Title" style={[styles.inputBox,{marginLeft:650,marginTop:80, width:200,height:50}]}></TextInput>
                </View>


                <View>
                    <TextInput placeholder="Author" style={[styles.inputBox,{marginLeft:650,marginTop:70, width:200,height:50}]}></TextInput>
                </View>


                <View>
                    <TextInput placeholder="Write your story" style={[styles.inputBox,{marginLeft:450,marginTop:70, width:600,height:200}]}></TextInput>
                </View>

                <View>
                    <TouchableOpacity style={{borderRadius:50,backgroundColor:"yellow",borderWidth:1,width:100,marginLeft:1200,marginTop:-20}}>
                        <Text style={{fontSize:25,textAlign:"center"}}>Submit</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        alignItems:"center",
        textAlign:"center",
        textDecorationColor:"black",
        backgroundColor:"white",
        fontSize:20,
        borderWidth:2
    }
})