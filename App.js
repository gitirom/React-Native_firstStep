import { useState } from 'react';
import { Alert,
        Button,
        StyleSheet,
        Text,
        TextInput,
        View,
        ScrollView,
        FlatList,
      } from 'react-native';



export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler (text) {
    setEnteredGoalText(text);
  }
  function addGoalHandler () {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals, enteredGoalText]
    );
  }
  return (
    
    <View style={styles.appContainer} >
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        placeholder='Your course gaol!'
        onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View  style={styles.goalsContainer} >
        <ScrollView  > 
          {
            courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}> 
              <Text style={styles.goalText}>{goal}</Text>
            </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
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

//scrollView its making as to get scrolling the our view 
//the view that having key property this for get the radius working in the both devices 
