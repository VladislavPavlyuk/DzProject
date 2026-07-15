import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { styles } from './styles';

function App() {

  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const [number, setNumber] = useState<number | string>('?');

  const generateNumber = () => {

    const min = parseInt(minValue, 10);
    const max = parseInt(maxValue, 10);

    // Перевірка: чи користувач взагалі ввів числа
    if (isNaN(min) || isNaN(max)) {
      Alert.alert(
        'Увага!',
        'Будь ласка, введіть і мінімальне, і максимальне число.',
      );
      return;
    }

    // Перевірка: чи правильно вказано діапазон
    if (min > max) {
      Alert.alert(
        'Помилка',
        'Мінімальне число не може бути більшим за максимальне!',
      );
      return;
    }

    const randomResult = Math.floor(Math.random() * (max - min + 1)) + min;

    setNumber(randomResult);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Генератор випадкових чисел</Text>

        {/* Контейнер для введення мінімального числа */}
        <Text style={styles.label}>Мінімальне значення:</Text>
        <TextInput
          style={styles.input}
          placeholder="Введіть мінімальне число"
          value={minValue}
          onChangeText={setMinValue}
          keyboardType="numeric"
        />

        {/* Контейнер для введення максимального числа */}
        <Text style={styles.label}>Максимальне значення:</Text>
        <TextInput
          style={styles.input}
          placeholder="Введіть максимальне число"
          value={maxValue}
          onChangeText={setMaxValue}
          keyboardType="numeric"
        />

        {/* Кнопка, яка на собі відображає результат */}
        <View style={styles.buttonContainer}>
          <Button
            title={`Згенерувати: ${number}`}
            onPress={generateNumber}
            color="#007AFF"
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
