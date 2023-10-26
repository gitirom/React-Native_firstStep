import { StyleSheet, Text, View } from "react-native";

function GoalItem (props) { //I use props to get pass the data from app.js to this compo..
    return (
        <View  style={styles.goalItem}> 
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
        );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "blue",
    },
        goalText: {
        color: 'white',
    },
});