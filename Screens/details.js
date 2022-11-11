import { View, Text, SafeAreaView, StyleSheet, ScrollView, Pressable, Linking } from 'react-native'
import React from 'react'
import PlanetHeader from '../src/Components/Text/planet-header'
import { typography } from '../Theme/typography'
import { colors } from '../Theme/colors';





const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
            <Text style={{ color: 'white', fontSize: 16 }}>{value}</Text>
        </View>
    );

};



export default function Details({ navigation, route }) {
    const planet = route.params.planet;
    const { name, color, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

    const Openlink = () => {
        Linking.openURL(wikiLink)
    };

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.detailsView}>
                    <Text style={{ color: 'white', fontSize: 30, textTransform: 'uppercase', padding: 20, }}>{name}</Text>
                    <Text style={{ color: 'white', fontSize: 14, padding: 20, }}>{description}</Text>
                    <Pressable onPress={Openlink} style={styles.source}>

                        <Text style={{ color: 'white' }}>Source: </Text>
                        <Text style={{ color: 'white', textDecoration: 'underline' }}>WikiPedia</Text>
                    </Pressable>
                </View>
                <View style={{ height: 40 }} />
                <PlanetSection title="ROTATION TIME" value={rotationTime} />
                <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
                <PlanetSection title="RADIOUS" value={radius} />
                <PlanetSection title="AVARAGE TEMP" value={avgTemp} />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        fontSize: 20,
        fontFamily: typography.bold,
    },
    detailsView: {
        color: colors.white,
        marginTop: 20,
        marginHorizontal: 10,
        lineHeight: 19,
    },
    source: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
    },
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 10,
        marginBottom: 10,

    }
})


