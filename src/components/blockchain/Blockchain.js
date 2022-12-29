import { StyleSheet, Text, TextInput, TouchableOpacity, View, SliderBase, FlatList } from "react-native";
import {useEffect, useState} from "react";
import { getBlockchain } from "./BlockchainApi";
import Block from "./Block";

export default function ViewBlockchain() {
    const [blockchain,setBlockchain] = useState([])

    useEffect( () =>
        async function fetchData() {
            let response = await getBlockchain()
            console.log("Blockchain Data: ",response)
            setBlockchain(response)
        fetchData();
    });
    return (
        <View style={styles.container}>
            <Text>Blockchain Tab</Text>
            <FlatList
                data={blockchain}
                keyExtractor={(request)=>blockchain.index}
                renderItem={
                    ({item})=>(<Block request={item}/>)
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:30,
        marginTop:40
      },
})