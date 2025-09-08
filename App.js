import { useState } from "react";
import fundo from './assets/vehicle-8767226_1280.jpg'
import posto from './assets/posto-de-gasolina-retro-neon-a-noite-reflexoes-de-chuva-de-neblina-na-ilustracao-3d-de-asfalto_16184.png'
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Alert} from "react-native";

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');


function handleSubmit() {

  if (!alcool || !gasolina) {
    alert("Os valores não podem ser nulos!");
  } else if (alcool / gasolina < 0.7) {
      alert("É mais vantajoso abastecer com Álcool!");
  } else {
      alert("É mais vantajoso abastecer com Gasolina!");
  }
}

return (
  <ImageBackground source={fundo} style={styles.container} resizeMode="cover">
    <Image source={posto} style={styles.posto}/>
    <Text style={styles.title}>Qual a melhor opção?</Text>
    <Text style={styles.subtitle}>Álcool (preço por litro)</Text>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={alcool}
      onChangeText={setAlcool}
      placeholder="Digite o preço do Álcool"
      placeholderTextColor="#ccc"
    />
    <Text style={styles.subtitle}>Gasolina (preço por litro)</Text>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={gasolina}
      onChangeText={setGasolina}
      placeholder="Digite o preço da Gasolina"
      placeholderTextColor="#ccc"
    />
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>

  </ImageBackground>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
  posto: {
    width: 300,
    height: 180,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#ff00ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textShadowColor: '#ff00ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textShadowColor: '#ff00ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#000000aa',
    color: '#fff',
    fontSize: 18,
    shadowColor: '#ff00ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    width: 315,
    height: 45,
    backgroundColor: '#f2e81d',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f2e81d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
}
)