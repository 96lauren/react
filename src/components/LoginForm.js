import React, {components} from 'react';
import { view, StyleSheet,}from 'react-native';


 export default class LoginForm extends Component {

	render(){
		return(

				<view style = { styles.container}></view>
			);


	}
}  

const styles = StyleSheet.create({

	container:{
		flex:1,
		padding:20,
		backgroundColor:'#05b3ff'
	}

});