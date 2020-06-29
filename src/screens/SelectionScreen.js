import React, { useState }from 'react';
import { StyleSheet, View, Button, Picker, Text ,ScrollView} from "react-native";


const SelectionScreen = ({ setWv, setflt, setMat, setFluores}) => {
   const[wave,setWave]=useState('nm365');
   const[flt,setFilter]=useState('orange');
   const [mat, setMatertial] = useState('tiles');
   const [flu, setflu] = useState("");
//    const updateWave=(val)=>{
// console.log(val);
// setWv(val);
// setWave(val);
//    }
 
        return (
            <ScrollView scrollEnabled={true} style={styles.container}>
                <Picker
                    selectedValue={wave}
                    onValueChange={ (val)=>{
                       setWv(val);
                       setWave(val);
                       //console.log(val);
                    
                    }
                }
              style= {{ backgroundColor: "#011100", color: "#ffffff",  fontSize: 17}}
                    itemStyle={{borderColor:'#ffffff', backgroundColor: "#011100", color: "#ffffff",  fontSize: 17, marginBottom:5 }} >
                    <Picker.Item label="Please select WaveLength" value="Please select WaveLength" />
                    <Picker.Item label="365nm" value="365nm" />
                    <Picker.Item label="415nm" value="415nm" />
                    <Picker.Item label="450nm" value="450nm" />
                    <Picker.Item label="505nm" value="505nm" />
                    <Picker.Item label="545nm" value="545nm" />
                    <Picker.Item label="620nm" value="620nm" />
                

                </Picker>

                <Picker
                    selectedValue={mat}
                    style= {{ backgroundColor: "#011100", color: "#ffffff",  fontSize: 17}}
                    onValueChange={(itemValue) => {setMat(itemValue),setMatertial(itemValue)}}
                    itemStyle={{ backgroundColor: "#011100", color: "#ffffff",  fontSize: 17 }} >
                    <Picker.Item label="Please select Material" value="Please select Material" />
                    <Picker.Item label="Black" value="Black" />
                    <Picker.Item label="Denim" value="Denim" />
                    <Picker.Item label="Tiles" value="Tiles" />
                    <Picker.Item label="White" value="White" />
                </Picker>

                <Picker
                    selectedValue={flt}
                    style= {{ backgroundColor: "#011100", color: "#ffffff",  fontSize: 17}}
                    onValueChange={(itemValue) => {setflt(itemValue),setFilter(itemValue)}}
                    itemStyle={{ backgroundColor: "#011100", color: "#ffffff",  fontSize: 17 }} >
                    <Picker.Item label="Please select Filter" value="Please select Filter" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="Red" value="Red" />
                    <Picker.Item label="Yellow" value="Yellow" />
                </Picker>

                <Picker
                    selectedValue={flu}
                    style= {{ backgroundColor: "#011100", color: "#ffffff",  fontSize: 17}}
                    onValueChange={(itemValue) => { setFluores(itemValue), setflu(itemValue) }}
                    itemStyle={{ pickerStyle }} >
                    <Picker.Item label="Fluorescence?" value="Fluorescence?" />
                    <Picker.Item label="YES" value="YES" />
                    <Picker.Item label="NO" value="NO" />
                </Picker>

            </ScrollView>
        )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: '90%',
        margin: 30,
        backgroundColor: '#000111'
    },
});
const pickerStyle = {
	inputIOS: {
		color: 'white',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'white',
	},
	placeholderColor: 'white',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: '#ffffff',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};


export default SelectionScreen;