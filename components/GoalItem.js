import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem (props) { //I use props to get pass the data from app.js to this compo..
    return (
        <View  style={styles.goalItem}>
                <Pressable
                    onPress={props.onDeleteItem.bind(this, props.id)}  
                    android_ripple={{ color: '#210644' }}    // android_ripple give me some effects on the item
                    style={({pressed}) => pressed && styles.pressedItem }
                >  
                    <Text style={styles.goalText}>{props.text}</Text>
                </Pressable>
            </View>
        );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "blue",
    },
    pressedItem: {
        opacity: 6,
    },
        goalText: {
        color: 'white',
        padding: 8,
    },
});

//used to bind event handlers to the component instance.