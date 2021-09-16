import React from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";

function WelcomeScreen({ navigation: { navigate } }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bgImg3.jpg")}
        >
            <Text
                style={styles.skip}
                onPress={() => {
                    navigate("search");
                }}
            >
                Skip
            </Text>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo3.png")}
                />
                <Text style={styles.tagLine}>Listen what you Love!</Text>
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigate("signIn")}
            >
                <View>
                    <Text style={styles.signInText}>Sign In</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigate("signUp")}
            >
                <View>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        justifyContent: "flex-end",
        flex: 1,
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 135,
    },
    tagLine: {
        fontWeight: "700",
        top: 20,
        color: "white",
        fontSize: 20,
    },
    skip: {
        color: "black",
        fontSize: 15,
        bottom: 10,
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
        alignItems: "center",
        justifyContent: "center",
    },
    signInText: {
        fontSize: 25,
        fontWeight: "600",
        color: "white",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
        alignItems: "center",
        justifyContent: "center",
    },
    signUpText: {
        fontSize: 25,
        color: "white",
        fontWeight: "600",
    },
});

export default WelcomeScreen;
