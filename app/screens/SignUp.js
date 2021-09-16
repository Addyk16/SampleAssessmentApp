import { NavigationHelpersContext } from "@react-navigation/native";
import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

class SignUp extends Component {
    state = {
        data: [],
        isTrue1: true,
        isTrue2: true,
        isTrue3: true,
        pwd: "",
    };

    handleInput1 = (string) => {
        this.setState({ username: string });
        if (string.length.toString() > 0) {
            this.setState({ isTrue1: false });
        }
        if (string.length.toString() == 0) {
            this.setState({ isTrue1: true });
        }
    };

    handleInput2 = (string) => {
        this.setState({ pwd: string });
        if (string.length.toString() > 0) {
            this.setState({ isTrue2: false });
        }
        if (string.length.toString() == 0) {
            this.setState({ isTrue2: true });
        }
    };
    handleInput3 = (string) => {
        this.setState({ cpassword: string });
        if (string == this.state.pwd) {
            this.setState({ isTrue3: false });
        } else {
            this.setState({ isTrue3: true });
        }
    };
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ImageBackground
                        source={require("../assets/bgImg3.jpg")}
                        style={styles.bgImageContainer}
                    >
                        <View style={styles.card}>
                            <Text style={styles.box}>Sign Up</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    padding: 10,
                                }}
                            >
                                <TextInput
                                    style={styles.inputt}
                                    underlineColorAndroid="transparent"
                                    placeholder="Email"
                                    placeholderTextColor="darkgrey"
                                    autoCapitalize="none"
                                    onChangeText={this.handleInput1}
                                    enablesReturnKeyAutomatically={true}
                                    returnKeyType="done"
                                />
                                <TextInput
                                    style={styles.inputt}
                                    underlineColorAndroid="transparent"
                                    placeholder="Password"
                                    placeholderTextColor="darkgrey"
                                    autoCapitalize="none"
                                    onChangeText={this.handleInput2}
                                    enablesReturnKeyAutomatically={true}
                                    returnKeyType="done"
                                />
                                <TextInput
                                    style={styles.inputt}
                                    underlineColorAndroid="transparent"
                                    placeholder="Confirm Password"
                                    placeholderTextColor="darkgrey"
                                    autoCapitalize="none"
                                    onChangeText={this.handleInput3}
                                    enablesReturnKeyAutomatically={true}
                                    returnKeyType="done"
                                />
                            </View>
                            <TouchableOpacity
                                disabled={
                                    this.state.isTrue1 ||
                                    this.state.isTrue2 ||
                                    this.state.isTrue3
                                }
                                style={
                                    !(
                                        this.state.isTrue1 ||
                                        this.state.isTrue2 ||
                                        this.state.isTrue3
                                    )
                                        ? styles.submitButton
                                        : styles.disableButton
                                }
                                onPress={() =>
                                    this.props.navigation.navigate("search")
                                }
                            >
                                <Text style={styles.submitButtonText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default SignUp;

const styles = StyleSheet.create({
    bgImageContainer: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        alignItems: "center",
        width: "80%",
        justifyContent: "center",
        width: "90%",
        margin: 25,
        borderRadius: 10,
        backgroundColor: "rgba(10,10,10,0.7)",
        padding: 10,
    },
    box: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 25,
        color: "white",
    },
    inputt: {
        margin: 0,
        marginLeft: 0,
        height: 40,
        paddingLeft: 10,
        color: "white",
        width: "70%",
        borderRadius: 10,
    },

    disableButton: {
        backgroundColor: "lightgrey",
        opacity: 0.5,
        marginTop: 25,
        height: 40,
        borderRadius: 30,
        width: "50%",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    submitButton: {
        backgroundColor: "white",
        padding: 10,
        marginTop: 25,
        height: 40,
        borderRadius: 30,
        width: "50%",
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },
});
