import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../../Theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from '../../../Theme/typography';
import { useNavigation } from '@react-navigation/native';



export default function PlanetHeader({ backBtn, title = 'THE PLANET' }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {
                    backBtn && (

                        <Pressable style={{ marginRight: 14 }} onPress={() => {
                            navigation.goBack();
                        }}>
                            <AntDesign name="fastbackward" size={18} color="white" />
                        </Pressable>

                    )
                }
                <Text style={styles.headerText} >{title}</Text>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        color: colors.white,

    },

    headerText: {
        color: 'white',
        fontSize: 20,
    }
});