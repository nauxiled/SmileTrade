// import { StyleSheet } from 'react-native';


// export const globalStyles = StyleSheet.create({
//   titleText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#333',
//     fontFamily:'Satisfy_400Regular',
  
//   },
//   paragraph: {
//     marginVertical: 8,
//     lineHeight: 20,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F0D7CE',
//     alignItems:'center',
//     justifyContent: 'center'
//   },
//   subtitles: {
//       fontSize:19,
//       paddingTop:20,
//       fontFamily:"Arial"
//   }
// });

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor: '#F0D7CE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 170,
        height: 170,
    },
    logoContainer: {
        position: 'absolute',
        top: 60,
        alignItems: "center",
    },
    reg: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 80,
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily:'Satisfy_400Regular',
        color: 'black',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f6d0c6',
        marginTop: 30,
        borderRadius: 25,
    },
    btnText: {
        color: 'black',
        fontWeight: 'bold',
    },
})