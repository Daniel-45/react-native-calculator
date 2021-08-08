import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
        previusNumber,
        number,
        clear,
        positiveNegative,
        deleteButton,
        divideButton,
        createNumber,
        multiplyButton,
        subtractButton,
        addButton,
        calculate,
    } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            {
                (previusNumber !== '0') && (<Text style={styles.smallResult}>{previusNumber}</Text>)
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {number}
            </Text>

            {/* Buttons row */}
            <View style={styles.row}>
                <CalculatorButton text="C" color="#9b9b9b" action={clear} />
                <CalculatorButton text="±" color="#9b9b9b" action={positiveNegative} />
                <CalculatorButton text="DEL" color="#9b9b9b" action={deleteButton} />
                <CalculatorButton text="÷" color="#f57c00" action={divideButton} />
            </View>
            {/* Buttons row */}
            <View style={styles.row}>
                <CalculatorButton text="7" action={createNumber} />
                <CalculatorButton text="8" action={createNumber} />
                <CalculatorButton text="9" action={createNumber} />
                <CalculatorButton text="×" color="#f57c00" action={multiplyButton} />
            </View>
            {/* Buttons row */}
            <View style={styles.row}>
                <CalculatorButton text="4" action={createNumber} />
                <CalculatorButton text="5" action={createNumber} />
                <CalculatorButton text="6" action={createNumber} />
                <CalculatorButton text="−" color="#f57c00" action={subtractButton} />
            </View>
            {/* Buttons row */}
            <View style={styles.row}>
                <CalculatorButton text="1" action={createNumber} />
                <CalculatorButton text="2" action={createNumber} />
                <CalculatorButton text="3" action={createNumber} />
                <CalculatorButton text="+" color="#f57c00" action={addButton} />
            </View>
            {/* Buttons row */}
            <View style={styles.row}>
                <CalculatorButton text="0" action={createNumber} wideButton={true} />
                <CalculatorButton text="." action={createNumber} />
                <CalculatorButton text="=" color="#f57c00" action={calculate} />
            </View>
        </View>
    );
};
