import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert, Modal, Image } from "react-native";

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
                <Image 
                    style={styles.image} 
                    source={require('../assets/images/goal.png')} 
                />
                <TextInput style={styles.textInput} 
                    placeholder='Your course gaol!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.Button} >
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282"  />
                    </View>
                    <View style={styles.Button} >
                        <Button title="Add Goal" onPress={() => {
                            addGoalHandler();
                            TaskAdded();
                        }} color="#5e0acc" />
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
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 140,
        height: 140,
        margin: 20
    },  
        textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e4d0ff',
        backgroundColor: "#e4d0ff",
        color: "#120138",
        width: '100%',
        padding: 10,
        
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