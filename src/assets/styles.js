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


    },

    groupCard: {

        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'white',
        paddingVertical: 25,
        borderColor: '#C0C0C0',
        marginBottom: 0
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: '600'
    },

    cardSubtitle: {
        textTransform: 'uppercase',
        fontWeight: '500',
        color: 'grey',
        letterSpacing: 1,
        fontSize: 12

    }
})

const stackOptions = {

    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff'

}

export { styles, stackOptions }