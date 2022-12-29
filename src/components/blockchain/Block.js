import { View,Text } from "react-native"
export default function Block({request}) {
    return(
        <View>
            <Text>Index: {request.index}</Text>
            <Text>Hash: {request.hash}</Text>
            <Text>Previous Hash: {request.prevhash}</Text>
            <Text>Energy: {request.data.energy}</Text>
            <Text>Money: {request.data.money}</Text>
            <Text>User ID: {request.data.userID}</Text>
        </View>
    )
}