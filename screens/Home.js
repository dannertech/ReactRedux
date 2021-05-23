import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';


class Home extends Component{
    render(){
        console.log(this.props);
        return(
            <View>
                <Text style={stylesheet.headerText}>You have {this.props.subjects.current.length }  subjects</Text>
                <Button 
                title="Select more subjects"
                onPress={() => this.props.navigation.navigate('SelectSubject')}
                />
                <Button
                title="View your subjects"
                onPress={() => this.props.navigation.navigate('Subjects')}
                />
            </View>
        )
    }
};

const mapStateToProps = (state) => {
    const { subjects } = state;
    return { subjects };
}

const stylesheet = StyleSheet.create({
    headerText : {
        fontSize: 100
    },
  
})

export default connect(mapStateToProps)(Home);

