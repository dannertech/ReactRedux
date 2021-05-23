import React,{Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

class Subjects extends Component {
    render(){
        console.log(this.props);
        return(
            <View>
                <Text>My Subjects!</Text>
                {this.props.subjects.current.map(subject => 
                    <Text>{subject}</Text>
                    )}
                <Button
                title="Select more subjects"
                onPress={() => this.props.navigation.navigate('SelectSubject')}
                />
                <Button
                title="Back Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

const stylesheet = StyleSheet.create({
    headerText: {
        fontSize: 200
    }
})

const mapStateToProps = (state) => {
    const { subjects } = state;
    return { subjects };
}

export default connect(mapStateToProps)(Subjects);
