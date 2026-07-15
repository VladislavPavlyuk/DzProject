import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#f9f9fb',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#1c1c1e',
    },
    label: {
        fontSize: 14,
        color: '#8e8e93',
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        height: 50,
        borderColor: '#e5e5ea', // Світло-сіра рамка
        borderWidth: 1,
        borderRadius: 10,       // Заокруглені кути поля вводу
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 25,
        backgroundColor: '#ffffff', // Біле поле для тексту
    },
    buttonContainer: {
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden', // Щоб заокруглення працювали для стандартної кнопки на iOS/Android
    },
});