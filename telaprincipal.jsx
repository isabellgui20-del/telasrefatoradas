import React from 'react';
import { Button, Image, TextInput, Text, View, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Portal do Caçador</Text>
            <Text style={styles.headerSubtitle}>Rank: Prata | Ouro: 150</Text>
          </View>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RG_VctYDUNdBH9yZjOXg7DQluNBjpF7bzWSEa81XtA&s=10' }} 
            style={styles.avatar} 
          />
        </View>

        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>Buscar Contrato:</Text>
          <TextInput
            placeholder="Nome do monstro (ex: Dragão, Goblin...)"
            style={styles.searchInput}
          />
        </View>

        <ScrollView style={styles.scrollContent}>
          
          <Text style={styles.sectionTitle}>
            Contratos Disponíveis:
          </Text>

          <View style={styles.card}>
            <Image 
              source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EnEJJxlRdi8C0PMSs1upIvrfSKjEXJFuUeEEt_zsXw&s=10' }} 
              style={styles.cardImage} 
            />
            <Text style={styles.monsterName}>Lava Hound</Text>
            <Text style={styles.monsterReward}>Recompensa: 5.000 Moedas</Text>
            
            <Button 
              title="Aceitar Caçada" 
              onPress={() => alert("Caçada aceita! Prepare sua armadura de fogo.")} 
            />
          </View>

          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICBq6E78yYuaIp9pySR3Q91393rI1T9oapiKvohRBQ&s=10' }} 
              style={styles.cardImage} 
            />
            <Text style={styles.monsterName}>Arceus</Text>
            <Text style={styles.monsterReward}>Recompensa: 1.200 Moedas</Text>
            
            <Button 
              title="Aceitar Caçada" 
              onPress={() => alert("Caçada aceita! Não esqueça a prata.")} 
            />
          </View>

        </ScrollView>

        <View style={styles.footer}>
          <Pressable 
            onPress={() => alert("Abrindo mapa de rastreamento...")}
            style={styles.footerButton}
          >
            <Text style={styles.footerButtonText}>
              Reportar Monstro
            </Text>
          </Pressable>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004F71',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9DE16F',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchLabel: {
    color: '#9DE16F',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#003B54',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    marginBottom: 10,
  },
  monsterName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9DE16F',
  },
  monsterReward: {
    color: '#fff',
    marginBottom: 10,
  },
  footer: {
    padding: 15,
    backgroundColor: '#003B54',
  },
  footerButton: {
    backgroundColor: '#9DE16F',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#004F71',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
