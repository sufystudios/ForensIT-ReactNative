import React, { useState, useEffect }from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button, ScrollView, FlatList, Alert } from "react-native";
import SelectionScreen from "./SelectionScreen";
import ImageScreen from "./ImageScreen";
import { State } from "react-native-gesture-handler";
import ImageDetail from "./ImageDetail";
import ExtraImageDetail from "./ExtraImageDetail";
//mock data set the dataset was not provided by one member 
//i initially asked for it to be made public on the google drive but they said it might be a security concern
//
const data =
{
    "Orange": {
        "Black": {
            "365nm": [{name: "Blood",  fluorescence: 0, image: require("../../assets/images/DSC_0115.jpg")},
            {name: "Semen",  fluorescence: 0, image: require("../../assets/images/DSC_0116.jpg")},
            {name: "Saliva",  fluorescence: 0, image: require("../../assets/images/DSC_0117.jpg")},
            {name: "Sweat",  fluorescence: 0, image: require("../../assets/images/DSC_0121.jpg")},
            {name: "Urine",  fluorescence: 0, image: require("../../assets/images/DSC_0120.jpg")}
           ],
            "415nm": [
                 {name: "Blood",  fluorescence: 0, image: require("../../assets/images/DSC_0115.jpg")},
                {name: "Semen",  fluorescence: 0, image: require("../../assets/images/DSC_0116.jpg")},
                {name: "Saliva",  fluorescence: 0, image: require("../../assets/images/DSC_0117.jpg")},
                {name: "Sweat",  fluorescence: 0, image: require("../../assets/images/DSC_0121.jpg")},
                {name: "Urine",  fluorescence: 0, image: require("../../assets/images/DSC_0120.jpg")},
                {name: "Nasal Mucous",  fluorescence: 0, image: require("../../assets/images/DSC_0119.jpg")},
                {name: "Breast Milk",  fluorescence: 0, image: require("../../assets/images/DSC_0072.jpg")},
                {name: "Sebum",  fluorescence: 0, image: require("../../assets/images/DSC_0122.jpg")},
                {name: "Purge Fluid",  fluorescence: 1, image: require("../../assets/images/DSC_0118.jpg")},
                {name: "Laundry Liquid",  fluorescence: 0, image: require("../../assets/images/DSC_0124.jpg")},
                {name: "Laundry Powder",  fluorescence: 1, image: require("../../assets/images/DSC_0123.jpg")},
                {name: "Dish Detergent",  fluorescence: 1, image: require("../../assets/images/DSC_0125.jpg")},
                {name: "Liquid Soap",  fluorescence: 0, image: require("../../assets/images/DSC_0129.jpg")}
            
            ],
             "450nm":[ {name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
    
            "505nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "545nm": [{ name: "image4", fluorescence: 1, image: require("../../assets/images/DSC_0126.jpg") }, { name: "image4", fluorescence: 1, image: require("../../assets/images/DSC_0142.jpg") }],
            "620nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        },
        "Denim": {
            "365nm": [{name: "Blood",  fluorescence: 0, image: require("../../assets/images/DSC_0115.jpg")},
            {name: "Semen",  fluorescence: 0, image: require("../../assets/images/DSC_0116.jpg")},
            {name: "Saliva",  fluorescence: 0, image: require("../../assets/images/DSC_0117.jpg")},
            {name: "Sweat",  fluorescence: 0, image: require("../../assets/images/DSC_0121.jpg")},
            {name: "Urine",  fluorescence: 0, image: require("../../assets/images/DSC_0120.jpg")},
            {name: "Nasal Mucous",  fluorescence: 0, image: require("../../assets/images/DSC_0119.jpg")},
            {name: "Breast Milk",  fluorescence: 0, image: require("../../assets/images/DSC_0072.jpg")},
            {name: "Sebum",  fluorescence: 0, image: require("../../assets/images/DSC_0122.jpg")},
            {name: "Purge Fluid",  fluorescence: 1, image: require("../../assets/images/DSC_0118.jpg")},
            {name: "Laundry Liquid",  fluorescence: 1, image: require("../../assets/images/DSC_0124.jpg")},
            {name: "Laundry Powder",  fluorescence: 1, image: require("../../assets/images/DSC_0123.jpg")},
            {name: "Dish Detergent",  fluorescence: 1, image: require("../../assets/images/DSC_0125.jpg")},
            {name: "Liquid Soap",  fluorescence: 0, image: require("../../assets/images/DSC_0129.jpg")},
            {name: "Bar Soap",  fluorescence: 0, image: require("../../assets/images/DSC_0128.jpg")},
            {name: "Hand Sanitiser",  fluorescence: 0, image: require("../../assets/images/DSC_0127.jpg")},
            {name: "Spray n Wipe",  fluorescence: 0, image: require("../../assets/images/DSC_0126.jpg")},
            {name: "Multipurpose Cleaner",  fluorescence: 1, image: require("../../assets/images/DSC_0130.jpg")},
            {name: "Bleach",  fluorescence: 0, image: require("../../assets/images/DSC_0131.jpg")},
            {name: "Vegetable Oil",  fluorescence: 0, image: require("../../assets/images/DSC_0134.jpg")},
            {name: "Olive Oil",  fluorescence: 0, image: require("../../assets/images/DSC_0135.jpg")},
            {name: "Tomato Passata",  fluorescence: 1, image: require("../../assets/images/DSC_0136.jpg")},
            {name: "Chocolate",  fluorescence: 0, image: require("../../assets/images/DSC_0140.jpg")},
            {name: "Icecream",  fluorescence: 0, image: require("../../assets/images/DSC_0139.jpg")},
            {name: "Cereal",  fluorescence: 1, image: require("../../assets/images/DSC_0138.jpg")},
            {name: "Meat ",  fluorescence: 0, image: require("../../assets/images/DSC_0137.jpg")},
            // {name: "Beer",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Beer.jpg")},
            // {name: "White Wine",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_White Wine.jpg")},
            // {name: "Red Wine",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Red Wine.jpg")},
            // {name: "Tea",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Tea.jpg")},
            // {name: "Coffee",  fluorescence: 1, image: require("../../assets/images/Orange_Denim_365nm_Coffee.jpg")},
            // {name: "Milk",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Milk.jpg")},
            // {name: "Apple Juice",  fluorescence: 1, image: require("../../assets/images/Orange_Denim_365nm_Apple Juice.jpg")},
            // {name: "Coca Cola",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Coca Cola.jpg")},
            // {name: "Spray Deodorant",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Spray Deodorant.jpg")},
            // {name: "Roll On Deodorant",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Roll On Deodorant.jpg")},
            // {name: "Foundation",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Foundation.jpg")},
            // {name: "Mascara",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Mascara.jpg")},
            // {name: "Lipstick",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Lipstick.jpg")},
            // {name: "Moisteriser",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Moisteriser.jpg")},
            // {name: "Sunscreen",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Sunscreen.jpg")},
            // {name: "Toothpaste",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Toothpaste.jpg")},
            // {name: "Hair Spray",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Hair Spray.jpg")},
            // {name: "Hair Gel",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Hair Gel.jpg")},
            // {name: "Fake Tan",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Fake Tan.jpg")},
            {name: "Lubricant",  fluorescence: 0, image: require("../../assets/images/DSC_0132.jpg")},
            {name: "Baby Powder",  fluorescence: 0, image: require("../../assets/images/DSC_0133.jpg")},
           // {name: "Vaseline",  fluorescence: 0, image: require("../../assets/images/Orange_Denim_365nm_Vaseline.jpg")},
            {name: "Blue Pen",  fluorescence: 0, image: require("../../assets/images/DSC_0141.jpg")},
            {name: "Black Pen",  fluorescence: 0, image: require("../../assets/images/DSC_0143.jpg")},
            {name: "Red Pen",  fluorescence: 0, image: require("../../assets/images/DSC_0142.jpg")}
        ],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "450nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "505nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "545nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "620nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        },
        "Tiles": {
            "365nm": [{ name: "Breast Milk", fluorescence: 0, image: require("../../assets/images/DSC_0072.jpg")}, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "450nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "505nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "545nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        },
        "White":{
            "365nm": [{ name: "Breast Milk", fluorescence: 0, image: require("../../assets/images/DSC_0072.jpg")}, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") },{ name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "450nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "505nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "545nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }]

        }
    },
    "Red": {
        "Black": {
            "365nm": [{ name: "Breast Milk", fluorescence: 0, image: require("../../assets/images/DSC_0072.jpg")}],
            "415nm": [
                { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") },
                {name:"Chocolate",fluorescence:0,image: require("../../assets/images/DSC_0140.jpg") }
            ],
            "450nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "505nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "545nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        }
        ,
        "Denim": {
            "365nm": [{ name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0072.jpg")}],
            "450nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "505nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "545nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "620nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        },
        "Tiles": {
            "365nm": [{ name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0072.jpg")}, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "450nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "505nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "545nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        },
        "White":{
            "365nm": [{ name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0072.jpg")}, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "450nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "505nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "545nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "620nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        }
    },
    "Yellow" : {
        "Black": {
            "365nm": [{ name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0072.jpg")}],
            "415nm": [
                { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") },
                {name:"Chocolate",fluorescence:0,image: require("../../assets/images/DSC_0140.jpg") }
            ],
            "450nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "505nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "545nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        }
        ,
        "Denim": {
            "365nm": [{ name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0072.jpg")}, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "450nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "505nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "545nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }]

        },
        "Tiles": {
            "365nm": [{ name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0072.jpg")}, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "450nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "505nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "545nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }]

        },
        "White":{
            "365nm": [{ name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0072.jpg")}, { name:"Breast Milk",fluorescence:0,image: require("../../assets/images/DSC_0124.jpg") }],
            "415nm": [{ name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }],
            "450nm":[ {name:"Lubricant",fluorescence:0,image: require("../../assets/images/DSC_0132.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "505nm":[{name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }, { name:"Cereal",fluorescence:1,image: require("../../assets/images/DSC_0138.jpg") }],
            "545nm":[{name:"Hand Sanitiser",fluorescence:0, image: require("../../assets/images/DSC_0127.jpg") }, { name:"Icecream",fluorescence:1,image: require("../../assets/images/DSC_0139.jpg") }],
            "620nm":[ {name:"Spray n Wipe",fluorescence:0,image: require("../../assets/images/DSC_0126.jpg") }, { name:"Laundry Liquid",fluorescence:1,image: require("../../assets/images/DSC_0124.jpg") }]

        }
    }
};
     
const testCases =
{

};
//function for the test home screen
const HomeScreen = ({ props }) => {
//in react native changing things on the screen requires state object these are the ones we used
    const [caseArray, setcaseArray] = useState([{wavelength:"Compare",filter:"*",material:"*",fluorescence:"*"}]);
    const [WVlength, setWVlength] = useState("q");
    const [Filter, setFilter] = useState("");
    const [Material, setMaterial] = useState("");
    const [Fluorescence, setFluorescence] = useState("");
    const [selectState, setselectState] = useState('false');
    const [extraState, setextraState] = useState('false');
    const [TestState, setTestState] = useState('true');
    const [imageState, setImageState] = useState([]);
    const [extraimageState, setExtraImageState] = useState([]);
    const [displayextra, setDisplayExtra] = useState('false');
//adding a new aspect to the test
    const AddCase = (WVlength, Filter, Material, Fluorescence, caseArray) => {

        let object = {
                    wavelength: WVlength,
                    filter: Filter,
                    material: Material,
                    fluorescence: Fluorescence
        };
        setcaseArray(caseArray => [...caseArray, object]);

    };
//shows an alert if long press is activated over a side button,
    const showAlert = (WVlength, Filter, Material, Fluorescence, caseArray) =>{
       if(WVlength!="Compare") {
        Alert.alert(
            'Remove Action',
            'Do you want to Remove ?',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => { if(WVlength!=="Compare") {RemoveCase(WVlength, Filter, Material, Fluorescence, caseArray); }}
                }
            ],
            { cancelable: false }

        );
       }
    };
//remove case from a state object
    const RemoveCase = (WVlength, Filter, Material, Fluorescence, caseArray) => {
        let object = {
            wavelength: WVlength,
            filter: Filter,
            material: Material,
            fluorescence: Fluorescence,
        };

        object = caseArray.find((element) => {
            return (element.wavelength == WVlength && element.filter == Filter &&
                element.material == Material && element.fluorescence == Fluorescence);
        });

        setcaseArray(caseArray => caseArray.filter(caseArray => caseArray !== object));
        
    };
   //select filter wavelength etc this is to show or hide it
    const ShowHideSelect = (WVlength, Filter, Material, Fluorescence, caseArray) => {
        if (selectState == 'false') {
            setselectState('true');
            //() => { getImages };
        } else {
            if (extraState == 'false') {
                AddCase(WVlength, Filter, Material, Fluorescence, caseArray);
            } else {
                getExtraImages(WVlength, Filter, Material);
            }
            //console.log("add case");
            setselectState('false');
            setextraState('false');
        }
    };

    const ExtraSelect = () => {
        if (selectState == 'false') {
            setselectState('true');
            setextraState('true');
        }
    };

    const DisplayExtra = () => {
        if (displayextra == 'false') {
            setDisplayExtra('true');
        } else {
            setDisplayExtra('false');
        }
    }

    const ShowHideImage = (wv, fil, mat, flu) => {  
            setWVlength(wv);
            setFilter(fil);
            setMaterial(mat);
            setFluorescence(flu);
            //console.log(wv);
    };
var comparebutton=false;
    const renderButton = () => {
        let views = [];
        
        //views.push(<Button id={0} title={WVlength + " \n" + Filter + "\n" + Material} onPress={ShowHideImage} />);

        if (caseArray.length == 0) {
            return views;
            
        } else {
            caseArray.map((item) => {
                views.push(
                    <TouchableOpacity style={styles.buttons} key={item.id} onPress={() => {
                        getImages(item.wavelength, item.filter, item.material, item.fluorescence);
                        }}
                        onLongPress={() => {
                            showAlert(item.wavelength, item.filter, item.material, item.fluorescence, caseArray);
                        }}>
                        <Text style={styles.text}> {item.wavelength + " \n" + item.filter + "\n" + item.material + "\n" + item.fluorescence} </Text>
                    </TouchableOpacity>
                );
            });
            return views;
        }
    }
    var itemcount=new Map();
    var compareArray=new Array();
    //the functionality of the compare button
const processComparison=function() {

for(var i=1;i<caseArray.length;i++)
{
    var fluoro
  if(caseArray[i].fluorescence=="YES")
  fluoro=1;
  else
  fluoro=0;

for(var x=0;x<data[caseArray[i].filter][caseArray[i].material][caseArray[i].wavelength].length;x++){
  var temp=data[caseArray[i].filter][caseArray[i].material][caseArray[i].wavelength][x];

    if(temp.fluorescence==fluoro) {

        if(itemcount[temp.name]==undefined)
        itemcount[temp.name]=0;
        itemcount[temp.name]++;
        console.log(itemcount[temp.name]);
        if(itemcount[temp.name]==caseArray.length-1) {
            compareArray.push(temp);
            console.log(caseArray.length-1);
        }
console.log("tesst");
comparebutton=true;
}
}}}
    const getImages=(length,filt,mat,fluo)=> {
        //console.log(length + filt + mat + fluo);
        //     setImageState(data[Filter][Material][WVlength]);
        //   console.log(data[Filter][Material][WVlength].image);
        setWVlength("Compare");
        if(length=="Compare") {
          comparebutton=true;
         
            processComparison();
            setImageState(compareArray);
            comparebutton=false;
        } else {
            setWVlength("another");
        setExtraImageState([]);
        setDisplayExtra('false');
        setImageState(data[filt][mat][length]);
        setFluorescence(fluo);
        }
    }

    const getExtraImages = (length, filt, mat) => {
        setExtraImageState(data[filt][mat][length]);
        //setFluorescence(fluo);
    }

//the render return method
    return (
      
        <View style={styles.view}>
            <Text style={styles.title}>ForensIT Image Search</Text>
            {selectState === 'true' && 
            <SelectionScreen style={{backgroundColor: "#011100", color: "#ffffff",  fontSize: 17}}
                    setWv={(value)=>{setWVlength(value)}}
                    setflt={(value)=>{setFilter(value)}}
                    setMat={(value) => { setMaterial(value) }}
                    setFluores={(value) => { setFluorescence(value) }}
                    setTest={(value) => { setTestState(value) }}
                />
            }
            <Button color="#0fff0f" title="Add Test" onPress={() => { ShowHideSelect(WVlength, Filter, Material, Fluorescence, caseArray)
            }} />

            {selectState === 'false' &&
                <View style={styles.resultview}>
                    <View style={{ padding: 10, flex: 0.3 }}>
                        <ScrollView contentContainerStyle={styles.testView}>
                        {renderButton()}
                        </ScrollView>
                </View>

                    {TestState === 'true' &&
                    <View style={{ padding: 10, flex: 0.7 }}>
                        <View style={{ flexDirection: 'row'}}>
                            <Button color="gray" title="Clear" onPress={() => {
                              setcaseArray([{wavelength:"Compare",filter:"*",material:"*",fluorescence:"*"}]);
                            }} />
                          

                        </View>
                        <View style={{ flex: 1 }}>
                            <FlatList 
                                scrollEnabled={true}
                                keyExtractor={
                                (dataitem) => String(dataitem.name)}
                                data={imageState} renderItem={({ item }) => {
                                  if(WVlength=="Compare") {
                                      console.log(item.name);

                                      return(<Text style={styles.text}>Name: {item.name}</Text>);
                                  }
                                  else {
                                       // console.log(comparebutton);
                                    //console.log(item);
                                    if(Fluorescence==="YES" ) {
                                        if(item.fluorescence==1) {
                                            return (<ImageDetail styles={styles.image} imageSource={item.image} title={item.name} fluorescence={item.fluorescence}></ImageDetail>);
                                        }
                                    }
                                     else {
                                     if(item.fluorescence==0) return ( <ImageDetail styles={styles.image} imageSource={item.image} title={item.name} fluorescence={item.fluorescence}></ImageDetail>);
                               } }}}
                            />
                        </View>
                        {displayextra === 'true' &&
                        <View style={{ flex: 1 }}>
                            <FlatList
                                scrollEnabled={true}
                                keyExtractor={
                                (dataitem) =>dataitem.name}
                                data={extraimageState} renderItem={({ item }) => {
                                    if (Fluorescence === "YES") {
                                        if (item.fluorescence == 1) {
                                            return (<ExtraImageDetail styles={styles.image} imageSource={item.image} title={item.name} fluorescence={item.fluorescence}></ExtraImageDetail>);
                                        }
                                    }
                                    else return (<ExtraImageDetail styles={styles.image} imageSource={item.image} title={item.name} fluorescence={item.fluorescence}></ExtraImageDetail>);
                                }}
                            />
                        </View>
                        }
                    
                        </View>
                    }
                </View>
            }

            
        </View>       
  );
};
//logo
const logo=require("../../assets/logo.png");

//styles
const styles = StyleSheet.create({
    title: {
        fontSize: 20
        ,color:"white",
        alignSelf:"center"
    },
    text: {
        fontSize: 12
        ,color:"white",
        alignSelf:"center"
    },
    view: {
        flex: 1,
        backgroundColor: '#000111',
        
    },
    resultview: {
        flex: 1,
        flexDirection: 'row'
    },
    testView: {
        flexGrow: 1,
        borderColor: '#012100',
        borderWidth: 5 
    },
    buttons: {
        alignItems: "center",
        backgroundColor: "#011100",
        color:"#eeeeee",
        padding: 10
    },
    image: {
        width:300,
        height:300
    }

});

export default HomeScreen;
