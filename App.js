/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { LinearGradient } from 'react-native-linear-gradient'

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  SafeAreaViewBase
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import Colors from './Util/Colors'

function App() {
  const [confirmedNumber, setConfirmedNumber] = useState();
  const [gameOverState, setGameOverState] = useState(true);
  const [totalRound,setTotalRound] = useState(0);

  function confirmedNumberHandler(number) {
    setConfirmedNumber(number);
    setGameOverState(false);
  }

  function gameOverStateHandler(rounds){
    setGameOverState(true);
    setTotalRound(rounds);
  }

  function startGameHandler(){
    setConfirmedNumber(null);
    setGameOverState(true)
  }

  let screens = <StartGameScreen onPickNumber={confirmedNumberHandler} />
  if (confirmedNumber) {
    screens = <GameScreen onPickNumber={confirmedNumber} onGameOver={gameOverStateHandler}/>
  }

  if(gameOverState && confirmedNumber){
    screens= <GameOverScreen userNumber={confirmedNumber} roundNumber={totalRound} startGame={startGameHandler}/>
  }

  return (
    <LinearGradient colors={[Colors.primary400, Colors.yellow500]} style={styles.appContainer}>
      <ImageBackground source={require('./assets/images/background.png')} style={styles.appContainer} resizeMode='cover' imageStyle={styles.imageTransperence}>
        <SafeAreaView>
          {screens}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  imageTransperence: {
    opacity: 0.15,
  }
});

export default App;
