import React , {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Button from '../Button';


class Timer extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName="play-circle"/>
                    <Button iconName="stop-circle"/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"#c8c8c8"
        },
        upper:{
            flex:2,
            justifyContent:'center',
            alignItems:'center'
        },
        lower: {
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        time: {
            color: "red",
            fontSize:120,
            fontWeight:"100"
        },
    }
)
export default Timer;