import React, { useState } from 'react'; // Importação do React e do useState para utilização de estados
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native'; // Importação de componentes do React Native

interface AppProps {} // Definição de uma interface vazia para as props do componente

const App: React.FC<AppProps> = () => { // Declaração do componente principal como uma função de componente React

    // Definição de estados utilizando o useState hook
    const [isLoginScreen, setIsLoginScreen] = useState<boolean>(true); // Estado para controlar se a tela de login está sendo exibida
    const [username, setUsername] = useState<string>(''); // Estado para armazenar o nome de usuário
    const [password, setPassword] = useState<string>(''); // Estado para armazenar a senha
    const [name, setName] = useState<string>(''); // Estado para armazenar o nome completo
    const [celular, setCelular] = useState<string>(''); // Estado para armazenar o número de celular
    const [email, setEmail] = useState<string>(''); // Estado para armazenar o endereço de email
    const [createpassword, setCreatePassword] = useState<string>(''); // Estado para armazenar a senha de criação
    const [confirmpassword, setConfPassword] = useState<string>(''); // Estado para armazenar a confirmação de senha

    // Função para lidar com o evento de login
    const handleLogin = (): void => {
        if (isLoginScreen) {
            console.log('Username:', username); // Exibir nome de usuário no console
            console.log('Password:', password); // Exibir senha no console
        } else {
            console.log('Nome:', name); // Exibir nome completo no console
            console.log('Celular:', celular); // Exibir número de celular no console
            console.log('E-mail:', email); // Exibir endereço de email no console
            console.log('Criar Senha:', createpassword); // Exibir senha de criação no console
            console.log('Confirmar Senha:', confirmpassword); // Exibir confirmação de senha no console

            if (createpassword !== confirmpassword) { // Verificar se as senhas de criação e confirmação são diferentes
                alert('As senhas não coincidem! Tente novamente.'); // Exibir alerta se as senhas não coincidirem
            }
        }
    };

    // Função para alternar entre a tela de login e a tela de cadastro
    const toggleScreen = (): void => {
        setIsLoginScreen(!isLoginScreen); // Inverter o valor de isLoginScreen
    };

    // Retorno do JSX que representa a estrutura do aplicativo
    return (
        <ImageBackground
            source={require('./assets/tijolos.png')}
            style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    {isLoginScreen ? ( // Renderizar tela de login ou cadastro baseado no valor de isLoginScreen
                        <>
                            <TextInput
                                style={styles.input}
                                placeholder="Login"
                                onChangeText={text => setUsername(text)}
                                value={username}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={true}
                                value={password}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.cadastro}>CADASTRO</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome Completo"
                                onChangeText={text => setName(text)}
                                value={name}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Celular"
                                onChangeText={text => setCelular(text)}
                                value={celular}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                onChangeText={text => setEmail(text)}
                                value={email}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Criar Senha"
                                onChangeText={text => setCreatePassword(text)}
                                value={createpassword}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Confirmar Senha"
                                onChangeText={text => setConfPassword(text)}
                                value={confirmpassword}
                            />
                        </>
                    )}
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>{isLoginScreen ? 'Entrar' : 'Cadastrar'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleScreen}>
                        <Text style={styles.signupText}>
                            {isLoginScreen ? 'Não tem uma conta? Crie uma aqui!' : 'Já tem uma conta? Faça Login!'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.empress}>CRIADO POR R.E.E.V.O SOFT</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

// Estilos para os componentes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    signupText: {
        marginTop: 20,
        color: '#fff',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    empress: {
        textDecorationLine: 'underline',
        color: '#fff',
        fontSize: 20,
    },
    cadastro: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
    },
});

