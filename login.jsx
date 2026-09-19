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
        placeholder="Seu nome"
        style={styles.input}
      />

      <Text style={styles.label}>Senha da Guilda:</Text>
      <TextInput
        placeholder="Sua senha"
        keyboardType="numeric"
        secureTextEntry={true}
        style={styles.input}
      />

      <Pressable onPress={() => { alert("Busque o mestre da guilda para recuperar.") }}>
        <Text style={styles.linkText}>Esqueci minha senha</Text>
      </Pressable>

      <View style={styles.buttonContainer}>
        <Button 
          title="Entrar"
          color="#003B54"
          onPress={() => { alert("Bem-vindo de volta, Caçador!!") }}
        />
      </View>

      <Pressable onPress={() => { alert("Redirecionando para cadastro...") }}>
        <Text style={styles.createAccountText}>Criar nova conta</Text>
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
    marginBottom: 30,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#9DE16F',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9DE16F',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: '10%'
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9DE16F',
    marginVertical: 10,
    padding: 10
  },
  linkText: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 30
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 30
  },
  createAccountText: {
    color: '#9DE16F',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  }
});
