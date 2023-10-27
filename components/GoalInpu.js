import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler (enteredText) {  // handle the input
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText); 
        setEnteredGoalText('');
    }

    function TaskAdded() {
        Alert.alert('Task has Added!');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} 
            placeholder='Your course gaol!'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={() => {
                addGoalHandler();
                TaskAdded();
            }}/>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
        textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});
