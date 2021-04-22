import React, {useState, useEffect} from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, Image, TouchableOpacity, Animated, Keyboard } from 'react-native';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x:0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:120, y:145}));
  //const [logo] = useState(new Animated.ValueXY({x:130, y:155}));
  //Apenas1Teste

  useEffect(() => {
    
    //keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    //keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        useNativeDriver: true,
        toValue:0,
        speed:4,
        bounciness:20,
        
      }),
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue:1,
        duration:500,
      }),
    ]).start();

  }, []);

  function keyboardDidShow(){
    
    Animated.parallel([
      Animated.timing(logo.x, {
        useNativeDriver: true,
        toValue: 35,
        duration: 100,
      }),
          Animated.timing(logo.y, {
          useNativeDriver: true,
          toValue:45,
          duration:100,
        }),
    ]).start();
  
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        useNativeDriver: true,
        toValue: 120,
        duration: 100,
      }),
          Animated.timing(logo.y, {
          useNativeDriver: true,
          toValue:145,
          duration:100,
        }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
        style={{
          transform:[
            {scaleX: this.state.logo.x},
            {scaleY: this.state.logo.y},
          ],       
        }}
        source={require('./src/assets/logo.png')}
        />
      </View>

      <Animated.View 
        style={[styles.container,
        {
          opacity:opacity,
          transform:[
            { translateY: this.offset.y,},
          ],
        },
        ]}           
      >
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() =>{}}
        />
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() =>{}}
        />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.registerText}>Criar conta gratuita</Text>
      </TouchableOpacity>
    </Animated.View>
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#191919'

  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50,
  },
  input:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:10,
  },
  btnSubmit:{
    backgroundColor:'#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,

  },
  submitText:{
    color:'#FFF',
    fontSize:18,
  },
  btnRegister:{
    marginTop:30,
  },
  registerText:{
    color:'#FFF'
  },

});


