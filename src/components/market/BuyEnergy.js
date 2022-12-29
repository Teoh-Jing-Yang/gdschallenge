import { StyleSheet, Text, TextInput, TouchableOpacity, View, SliderBase } from "react-native";
import Slider from '@react-native-community/slider';
import {useEffect, useState} from "react";
import { biddingRange, energyForecast, energyRequest } from "./EnergyRequestApi";

export default function BuyEnergy() {
    const [energyAmount,setEnergyAmount] = useState(1)
    const [biddingPrice,setBiddingPrice] = useState(1)
    const [maxConsEnergy,setMaxConsEnergy] = useState(10)
    const [maxBuyPrice,setMaxBuyPrice] = useState(10)
    const someFunction = async () => {
        let request = {
            "userID":"A001"
        }
        let response = await energyForecast(request)
        setMaxConsEnergy(response.consEnergy)
        response = await biddingRange(request)
        setMaxBuyPrice(response.maxBuyPrice)
    }
    useEffect(() => {
        someFunction();
    },[Error]);

    const handlePurchaseEnergy = async() => {
        let request = {
          "energyAmount":energyAmount,
          "biddingPrice":biddingPrice,
          "BuyOrSell": "Buy"
        }
        const response = await energyRequest(request)
        console.log("Energy request response",response)
      }
    return (
        <View style={styles.container}>
            <Text>Buy Energy Form</Text>
            <Text>Select Amount of Energy</Text>
            <Slider 
                maximumValue={maxConsEnergy}
                minimumValue={1}
                step={0.5}
                value={energyAmount}
                onValueChange={(energyAmount)=>setEnergyAmount(energyAmount)} />
            <Text>Amount of energy : {energyAmount}</Text>
            <Text>Select Bidding Price</Text>
            <Slider 
            maximumValue={maxBuyPrice}
            minimumValue={1}
            step={0.5}
            value={biddingPrice}
            onValueChange={(biddingPrice)=>setBiddingPrice(biddingPrice)} />
            <Text>Bidding Price : {biddingPrice}</Text>
            <View style={styles.signUpButton}>
                <TouchableOpacity onPress = {()=>handlePurchaseEnergy()}>
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