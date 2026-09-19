import { Button, Image, TextInput, Text, View, Pressable, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RG_VctYDUNdBH9yZjOXg7DQluNBjpF7bzWSEa81XtA&s=10' }} 
        style={styles.logo} 
      />
      
      <Text style={styles.label}>Nome do Caçador:</Text>
      <TextInput
        placeholder="Como você é chamado?"
        style={styles.input}
      />

      <Text style={styles.label}>Email de Contato:</Text>
      <TextInput
        placeholder="seu@email.com"
        keyboardType="email-address"
        style={styles.input}
      />

      <Text style={styles.label}>Crie uma Senha:</Text>
      <TextInput
        placeholder="Sua senha secreta"
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.label}>Confirme sua Senha:</Text>
      <TextInput
        placeholder="Repita sua senha"
        keyboardType="numeric"
        secureTextEntry={true}
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Forjar Registro"
          color="#003B54"
          onPress={() => { alert("Registro aceito na Guilda dos Caçadores!!") }}
        />
      </View>

      <Pressable onPress={() => { alert("Redirecionando para a Tela de Login...") }}>
        <Text style={styles.loginLink}>Já é um caçador? Entrar aqui.</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004F71',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#9DE16F',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9DE16F',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: '10%', 
  },
  input: {
    backgroundColor: '#fff', 
    width: '80%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9DE16F',
    marginVertical: 5,
    padding: 10
  },
  buttonContainer: {
    width: '80%',
    marginTop: 25,
    marginBottom: 20,
  },
  loginLink: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 14,
  }
});
