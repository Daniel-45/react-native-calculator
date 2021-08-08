import { useRef, useState } from 'react';

enum Operators {
    add, subtract, multiply, divide
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');

    const [previusNumber, setPreviusNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clear = () => {
        setNumber('0');
        setPreviusNumber('0');
    };

    const createNumber = (textNumber: string) => {
        // Don't accept more than one point
        if (number.includes('.') && textNumber === '.') {
            return;
        }

        if (number.startsWith('0') || number.startsWith('-0')) {
            // Decimal point
            if (textNumber === '.') {
                setNumber(number + textNumber);
                // Evaluate if it's another zero and there is a dot
            } else if (textNumber === '0' && number.includes('.'))  {
                setNumber(number + textNumber);
                // Evaluate if it's non-zero and does not have a dot
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
                // Avoid 000.00
            } else if (textNumber === '0' && !number.includes('.')) {
               setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }
    };

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' +  number);
        }
    };

    const deleteButton = () => {
        setNumber(number.slice(0, -1));
        if (number.length === 2 && number.includes('-')) {
             setNumber('0');
        } else if (number.length === 1) {
             setNumber('0');
        }
    };

    const changeNumberToPrevious = () => {
        if (number.endsWith('.')) {
            setPreviusNumber(number.slice(0,-1));
        } else  {
            setPreviusNumber(number);
        }
        setNumber('0');
    };

    const divideButton = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.divide;
    };

    const multiplyButton = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.multiply;
    };

    const subtractButton = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.subtract;
    };

    const addButton = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.add;
    };

    const calculate = () => {
        const number1 = Number(number);
        const number2 = Number(previusNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${number1 + number2}`);
                break;
            case Operators.subtract:
                setNumber(`${number2 - number1}`);
                break;
            case Operators.multiply:
                setNumber(`${number1 * number2}`);
                break;
            case Operators.divide:
                // Avoid division by zero
                if (number1 === 0 || isNaN(number1)) {
                    setNumber('0');
                } else {
                    setNumber(`${number2 / number1}`);
                }
                break;
            default:
                break;
        }

        setPreviusNumber('0');
    };

    return {
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
    };
};
