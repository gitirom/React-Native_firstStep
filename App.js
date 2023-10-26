import { useState } from 'react';
import { Alert,
        Button,
        StyleSheet,
        TextInput,
        View,
        FlatList,
      } from 'react-native';

      import GoalItem from './components/GoalItem';


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler (text) {
    setEnteredGoalText(text);
  }
  function addGoalHandler () {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals,
        {text: enteredGoalText, id: Math.random().toString()},
      ]);
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
        <FlatList 
          data={courseGoals}  
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}  />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        /> 

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
  

});

//scrollView its making as to get scrolling the our view 
//the view that having key property this for get the radius working in the both devices 
//Overall, FlatList is a useful component for rendering lists of data in a performant and customizable way in React Native.
//renderItem using for exact the way that you want to render your list 
//teh way that allows you to put the key prop.. is deferent here look up at the code 
//keyExtractor prop is used to extract a unique key for each item in the list