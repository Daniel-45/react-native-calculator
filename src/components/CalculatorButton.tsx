/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text: string;
    color?: string;
    wideButton?: boolean;
    action: (action: string) => void;
}

export const CalculatorButton = ({ text, color = '#2d2d2d', wideButton = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)} activeOpacity={0.8}>
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (wideButton) ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.textButton,
                    color: (color === '#9b9b9b') ? '#000' : '#fff',
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        padding: 8,
        fontSize: 30,
        fontWeight: '300',
    },
});
