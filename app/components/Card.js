import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Card(props) {
    const [isFav, setIsFav] = useState(false);
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://i.scdn.co/image/ab67616d00004851cce55e13a5956d89ee95c6cc",
                    width: 64,
                    height: 64,
                }}
            />
            <View style={styles.titleContainer}>
                <Text
                    style={styles.title}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {props.title}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.artist}
                >
                    {props.artist}
                </Text>
            </View>
            <Ionicons
                name="heart"
                size={30}
                color={!isFav ? "black" : "red"}
                onPress={() => {
                    setIsFav(!isFav);
                }}
            />
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 7,
        margin: 5,
        backgroundColor: "rgba(200,200,200,0.5)",
        borderRadius: 5,
    },

    titleContainer: {
        width: "60%",
        // marginLeft: 10,
    },
    title: {
        color: "white",
        fontSize: 18,
    },
    artist: {
        color: "white",
        width: "60%",
    },
});
