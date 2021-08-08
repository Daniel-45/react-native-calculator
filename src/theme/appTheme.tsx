import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    result: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingLeft: 20,
    },
});
