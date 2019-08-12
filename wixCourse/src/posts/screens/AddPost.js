import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class AddPostScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Add Post",
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate.goBack()} style={styles.cancelButton}>
                <Text>Cancel</Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Add")} style={styles.saveButton}>
                <Text>Save</Text>
            </TouchableOpacity>
        )

    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>AddPost Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3EDFF'
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    saveButton: {
        marginRight: 20
    },
    cancelButton: {
        marginLeft: 20
    },
});
