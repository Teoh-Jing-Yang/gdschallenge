import { StyleSheet, Text, TextInput, TouchableOpacity, View, SliderBase } from "react-native";
import Slider from '@react-native-community/slider';
import {useEffect, useState} from "react";
import { energyRequest,energyForecast,biddingRange } from "./EnergyRequestApi";

export default function SellEnergy() {
    const [energyAmount,setEnergyAmount] = useState(1)
    const [biddingPrice,setBiddingPrice] = useState(1)
    const [maxProdEnergy,setMaxProdEnergy] = useState(10)
    const [maxSellPrice,setMaxSellPrice] = useState(10)
    const someFunction = async () => {
        let request = {
            "userID":"A001"
        }
        let response = await energyForecast(request)
        setMaxProdEnergy(response.prodEnergy)
        response = await biddingRange(request)
        setMaxSellPrice(response.maxSellPrice)
    }
    useEffect(() => {
        someFunction();
    },[Error]);
    const handleSellEnergy = async() => {
        let request = {
          "energyAmount":energyAmount,
          "biddingPrice":biddingPrice,
          "BuyOrSell": "Sell"
        }
        const response = await energyRequest(request)
        console.log("Energy request response",response)
      }
    return (
        <View style={styles.container}>
            <Text>Sell Energy Form</Text>
            <Text>Select Amount of Energy</Text>
            <Slider 
                maximumValue={maxProdEnergy}
                minimumValue={1}
                step={0.5}
                value={energyAmount}
                onValueChange={(energyAmount)=>setEnergyAmount(energyAmount)} />
            <Text>Amount of energy : {energyAmount}</Text>
            <Text>Select Selling Price</Text>
            <Slider 
            maximumValue={maxSellPrice}
            minimumValue={1}
            step={0.5}
            value={biddingPrice}
            onValueChange={(biddingPrice)=>setBiddingPrice(biddingPrice)} />
            <Text>Bidding Price : {biddingPrice}</Text>
            <View style={styles.signUpButton}>
                <TouchableOpacity onPress = {()=>handleSellEnergy()}>
                    <Text>Submit Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:30,
        marginTop:40
      },
})