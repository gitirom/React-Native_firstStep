import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert, Modal } from "react-native";

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
        <Modal visible={props.visible} animationType="slide" >  
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} 
                placeholder='Your course gaol!'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.Button} >
                        <Button title="Add Goal" onPress={() => {
                            addGoalHandler();
                            TaskAdded();
                        }}/>
                    </View>
                    <View style={styles.Button} >
                        <Button title="Cancel" onPress={props.onCancel}  />
                    </View>
                </View>
                
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
        textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    Button: {
        width: 100,
        marginHorizontal: 8
    }
});


//Module with the visible attrb.. it's for getting put it in a useState for grt show the content 