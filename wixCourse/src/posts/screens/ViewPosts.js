import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ViewPostScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('postTitle', 'Your post')
        }
    };

    render() {
        const { navigation } = this.props;
        const passedProp = navigation.getParam('someProps', 'default value');

        return (
            <View style={styles.container}>
                <Text style={styles.text}>ViewPost Screen</Text>
                <Text style={styles.text}>{passedProp}</Text>
            </View>
        );
    }
}
export default ViewPostScreen;

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
});
