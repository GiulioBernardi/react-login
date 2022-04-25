import React from 'react'
import {
  Button,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default class app extends React.Component{
  state = {
    username : '',
    password: ''
  }

  render(){
    return (
      <View style={ estilos.container }>
        <Image 
          source={{
            uri: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
        }}
        style={ estilos.imagem }/>

        <Text>Usuário:</Text>
        <TextInput
          onChangeText = {(text) => this.setState({username : text})}
          style={estilos.input}/>
        
        
        <Text>Senha:</Text>
        <TextInput 
          secureTextEntry
          onChangeText = {(text) => this.setState({password : text})}
          style={estilos.input}/>



        <Button 
          onPress={() => {
            if (this.state.username === 'fiap' && this.state.password === '1234'){
              alert('usuário válido')
            }  else{
              alert('usuário inválido')
            }
          }}
          title='Entrar'/>
{
        <TouchableOpacity style={estilos.cadastro}>
          <Text style={ estilos.cadastroText }>
            Cadastre-se
          </Text>
        </TouchableOpacity>}

      </View>
    )
  }
}

const estilos = StyleSheet.create({
  container:{
    padding: 32
  },
  imagem:{
    alignSelf : 'center',
    height: 200,
    width: 200,
    marginBottom : 32
  },
  input : {
    borderColor : '#CCC',
    borderRadius : 5,
    borderWidth : 1,
    paddingHorizontal : 16,
    marginBottom : 16
  },
  cadastroText : {
    textAlign: 'center'
  },
  cadastro : { 
    margin : 16
  }
})