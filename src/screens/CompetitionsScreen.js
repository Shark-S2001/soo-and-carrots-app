import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { theme } from '../core/theme'
import { Appbar } from 'react-native-paper';
import Background from '../components/Background'

const competitions = [
  {
    title: '20th Asian Game - Achi Nagoya',
    season: '2026 (Winter)',
    dateRange: '2026-01-01 ~ 2026-01-31',
    location: 'PyeongChang, Gangwon-do, Korea'
  },
  {
    title: '20th Asian Game - Achi Nagoya',
    season: '2026 (Winter)', 
    dateRange: '2026-01-01 ~ 2026-01-31',
    location: 'PyeongChang, Gangwon-do, Korea'
  },
  {
    title: '20th Asian Game - Achi Nagoya',
    season: '2026 (Winter)',
    dateRange: '2026-01-01 ~ 2026-01-31',
    location: 'PyeongChang, Gangwon-do, Korea'
  },
  {
    title: '20th Asian Game - Achi Nagoya',
    season: '2026 (Winter)',
    dateRange: '2026-01-01 ~ 2026-01-31',
    location: 'PyeongChang, Gangwon-do, Korea'
  },
  {
    title: '20th Asian Game - Achi Nagoya',
    season: '2026 (Winter)',
    dateRange: '2026-01-01 ~ 2026-01-31',
    location: 'PyeongChang, Gangwon-do, Korea'
  }
]

const CompetitionsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const navigation = useNavigation()

  const filteredCompetitions = competitions.filter(competition =>
    competition.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <ScrollView style={styles.container}>
       <Appbar.Header>
        <Appbar.BackAction onPress={(goBack) => {}} />
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      </Appbar.Header>
      <Background style={styles.container1}>
        <Header>Competition</Header>
        <Text style={styles.infoText1}>
          An account is needed per one host. If you already have an account for the host of competition you want to sign up, you can login and register.
        </Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {filteredCompetitions.map((competition, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate('CreateAccountScreen')}>
              <Text style={styles.cardTitle}>{competition.title}</Text>
              <Text style={styles.cardText}>{competition.season}</Text>
              <Text style={styles.cardText}>{competition.dateRange}</Text>
              <Text style={styles.cardText}>{competition.location}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: theme.colors.secondary,
    marginVertical: 20,
  }, 
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: theme.colors.cardcolor,
    color: theme.colors.cardtextcolor,
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    shadowColor: theme.colors.cardtextcolor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    color: theme.colors.cardtextcolor,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: theme.colors.cardtextcolor,
  }
})

export default CompetitionsScreen
