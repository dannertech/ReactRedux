import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { add } from 'react-native-reanimated';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addSubject } from '../SubjectsActions';


class Subject extends Component {
    render(){
        console.log(this.props);
        return(
            <View>
                    <Text>Select a Subject</Text>
                    {this.props.all_subjects.map(subject =>
                       <Button title={subject} onPress={() => this.props.dispatch({type: "ADD_SUBJECT", payload: subject})}/>
                    )}
                    <Button
                title="See your subjects"
                onPress={() => this.props.navigation.navigate('Subjects')} 
                />
            </View>
        )
    }
}

/*const mapDispatchToProps = dispatch => (
    bindActionCreators({
       addSubject,

    }, dispatch)
);*/


const mapStateToProps = (state) => {
    const { subjects } = state;
    return subjects;
}


export default connect(mapStateToProps,/* mapDispatchToProps*/)(Subject);