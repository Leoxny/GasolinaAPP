import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native';

export const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [alcool, setAlcool] = useState(0);
    const [gasolina, setGasolina] = useState(0);
    const [recomendacao, setRecomendacao] = useState('');

    function calcular() {
        if (alcool && gasolina) {
            let soma = alcool / gasolina;
            let recomendacao;

            if (soma > 0.7) {
                recomendacao = 'Compensa usar Gasolina';
            } else {
                recomendacao = 'Compensa usar Álcool';
            }

            setModalVisible(true);
            setRecomendacao(recomendacao);
        } else {
            alert("Informe os valores");
        }
    }

    function calcularNovamente() {
        setModalVisible(false);
        setAlcool(0);
        setGasolina(0);
    }

    return (
        <>

            <Modal
                visible={modalVisible}>
                <View style={styles.containerModal}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/gas.png')}
                        />
                        <Text style={[styles.text, { color: 'green' }]}>{recomendacao}</Text>
                        <Text style={[styles.text, { fontSize: 25 }]}>Com os preços:</Text>
                        <Text style={[styles.text, { fontSize: 18 }]}>Ácool: R$ {alcool}</Text>
                        <Text style={[styles.text, { fontSize: 18 }]}>Gasolina: R$ {gasolina}</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btn2} onPress={calcularNovamente}>
                            <Text style={[styles.textBtn, { color: 'red' }]}>Calcular novamente</Text>
                        </TouchableOpacity>
                    </View >
                </View>
            </Modal>

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/logo.png')}
                        />
                        <Text style={styles.text}>Qual a melhor opção?</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={styles.texto}>Álcool (preço por litro):</Text>
                        <View style={{ alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                value={alcool}
                                keyboardType='numeric'
                                onChangeText={(texto) => setAlcool(texto)}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.texto}>Gasolina (preço por litro):</Text>
                        <View style={{ alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                value={gasolina}
                                keyboardType='numeric'
                                onChangeText={(texto) => setGasolina(texto)}
                            />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btn} onPress={calcular}>
                            <Text style={styles.textBtn}>Calcular</Text>
                        </TouchableOpacity>
                    </View >
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    containerModal:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#333333',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 50,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginTop: 10
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    texto: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20
    },
    btn: {
        width: '90%',
        height: 50,
        backgroundColor: "red",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold"
    },
    btn2: {
        width: '80%',
        borderColor: 'red',
        backgroundColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        alignItems: 'center',
    }
})