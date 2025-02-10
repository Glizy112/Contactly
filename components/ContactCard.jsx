import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

/*Contact Card Component*/

const ContactCard = (props) => {
  return (
    <View key={props?.idx} style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.imgContainer}>
                <Text style={{fontSize: 28, color: 'black', fontWeight: '500'}}> 
                    {props?.item?.name?.match(/(\b\S)?/g).join("").toUpperCase()} 
                </Text>
                {/* <Image
                    style={styles.avatar}
                    source={{uri: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"}}
                    resizeMode={"cover"}
                /> */}
            </View>
            <View style={{flexDirection: "column", alignItems: "flex-start", marginLeft: 12}}>
                <Text style={{fontSize: 22, color: 'black', fontWeight: '500'}}> {props?.item?.name} </Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8, paddingLeft: 2}}>
                    <Ionicons name="call-outline" color={"darkblue"} size={20}/>
                    <Text style={{fontSize: 18, color: 'black'}}> +91 - {props?.item?.phone} </Text>
                </View>
            </View>
        </View>
        <Ionicons name="trash-bin-outline" color={"maroon"} size={34} style={{marginRight: 20}}/>
    </View>
  )
}

export default ContactCard

const styles = StyleSheet.create({
    container: {
        padding: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        elevation: 8,
        backgroundColor: 'white',
        width: '97.5%',
        marginTop: 12,
    },
    imgContainer: {
        width: 84,
        height: 84,
        borderRadius: 42,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: '90%',
        height: '90%',
    },
})