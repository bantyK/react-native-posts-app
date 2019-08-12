import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class PostListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Posts",
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Add")} style={styles.addButton}>
                <Text>Add</Text>
            </TouchableOpacity>
        )
    });
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} onPress={() => this.props.navigation.push('View', {
                    someProps: 'Some props that we are passing'
                })} > PostList Screen</Text>
            </View>
        );
    }
}
export default PostListScreen;

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
    addButton: {
        marginRight: 20
    }
});
