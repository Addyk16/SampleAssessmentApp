import React, { useState } from "react";
import {
    Platform,
    StyleSheet,
    TextInput,
    View,
    StatusBar,
    Text,
    ScrollView,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import { NavigationHelpersContext } from "@react-navigation/native";

const data = [
    {
        title: "Random Song 1",
        artist: "Random Artist 1",
    },
    {
        title: "Song Name",
        artist: "Artist Name",
    },
    {
        title: "Random",
        artist: "Random Artist",
    },
    {
        title: "Song",
        artist: "Artist 1",
    },
    {
        title: "Song 3",
        artist: "Random Artist 5",
    },
    {
        title: "Random 1",
        artist: "Random Artist 6",
    },
    {
        title: "Unknown",
        artist: "One Direction",
    },
    {
        title: "Song name",
        artist: "Artist Name",
    },
    {
        title: "RS2",
        artist: "RA3",
    },
    {
        title: "Some Song Name",
        artist: "Unknown",
    },
    {
        title: "Name of the song",
        artist: "xyz",
    },
    {
        title: "abc",
        artist: "name of the artist",
    },
    {
        title: "Random Song 8",
        artist: "artist name",
    },
    {
        title: "pqr",
        artist: "efg",
    },
    {
        title: "Random Song 12",
        artist: "Random Artist 9`",
    },
];

function Search({ navigation: { navigate } }) {
    const [value, setValue] = useState("");
    const [songs, setSongs] = useState(data);
    return (
        <View
            style={{
                flex: 1,
                // alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <View style={styles.headerContainer}>
                <Ionicons
                    name="md-arrow-back"
                    size={32}
                    color="white"
                    onPress={() => navigate("welcome")}
                />
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <Ionicons name="search-circle" size={32} color="white" />
                <Ionicons name="heart" size={32} color="white" />
            </View>
            <FlatList
                data={songs}
                renderItem={({ item }) => {
                    return <Card title={item.title} artist={item.artist} />;
                }}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        // flexWrap: "nowrap",
        marginTop: StatusBar.currentHeight + 10,
        padding: 5,
        marginBottom: 5,
        borderBottomColor: "rgba(200,200,200,0.5)",
        borderWidth: 1,
    },
    input: {
        width: "60%",
        backgroundColor: "rgba(200,200,200,0.5)",
        color: "white",
        paddingLeft: 5,
        borderRadius: 5,
        marginLeft: 10,
        height: 32,
        marginRight: 10,
    },
});
