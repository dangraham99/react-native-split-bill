import { StyleSheet } from 'react-native'

//palette https://coolors.co/ff6700-ebebeb-c0c0c0-3a6ea5-004e98
//https://coolors.co/02a292-000022-001242-0099cc-040f16

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        flexDirection: 'column',
        height: '100%'
    },

    container: {
        padding: 24,



    }
})

const stackOptions = {

    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff'

}

export { styles, stackOptions }