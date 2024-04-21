import { StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'


//palette https://coolors.co/ff6700-ebebeb-c0c0c0-3a6ea5-004e98
//https://coolors.co/02a292-000022-001242-0099cc-040f16




const styles = StyleSheet.create({


    safearea: {
        flex: 1,
        flexDirection: 'column',
        height: '100%'
    },

    cardContainer: {
        paddingTop: 5,
        paddingHorizontal: 0
    },

    container: {
        paddingTop: 10,
        paddingHorizontal: 20

    },

    centerContainer: {
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'center' 
          
    },

    transactionCard: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingVertical: 15,
        borderColor: '#C0C0C0',
        marginBottom: 0
    },

    groupCard: {

        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'white',
        paddingVertical: 25,
        borderColor: '#C0C0C0',
        marginBottom: 0,
        height: 150
    },

    tintedButton: {
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        height: 45
    },

    tintedButtonText: {
        fontSize: 15,
        fontWeight: '500',
    },

    profileImg: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        borderRadius: 360,
        borderWidth: 4,



    },

    groupCardPictures: {
        flexDirection: 'row',
        paddingTop: 5

    },


    groupDetailsSubtitle: {
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: 20,
        marginBottom: 5,
        textTransform: 'uppercase',
        color: 'grey'
    },

    pageTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: '600'
    },

    cardSubtitle: {
        textTransform: 'uppercase',
        fontWeight: '500',
        color: 'grey',
        letterSpacing: 1,
        fontSize: 12

    },

    textInput: {

        marginVertical: 10,
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 15
    }
})

const stackOptions = {

    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff'

}

export { styles, stackOptions }