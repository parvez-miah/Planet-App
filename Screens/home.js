import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import PlanetHeader from '../src/Components/Text/planet-header'
import { colors } from '../Theme/colors'
import { typography } from '../Theme/typography'
import { PlanetList } from '../src/Components/Data/planet-list'
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {




    // Loap Start Here

    const renderItem = ({ item }) => {

        const { name, color } = item;

        return (
            <SafeAreaView style={styles.allItem}>
                <Pressable onPress={() => {
                    navigation.navigate('Details', { planet: item });
                }}
                    style={styles.item}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.circle, { backgroundColor: color }]} />
                        <Text style={{ color: 'white', textTransform: 'uppercase' }}>{name}</Text>
                    </View>
                    <AntDesign name="right" size={18} color="white" />
                </Pressable>

            </SafeAreaView >
        );
    }

    const SearchFilter = (text) => {

        const filterList = PlanetList.filter(() => {
            const itemName = item.name.toLowercase()
            const userSearch = text.toLowercase()

            return itemName.indexOf(userSearch) > -1;

        });

        console.log('we find', filterList)

    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader></PlanetHeader>



            <TextInput
                placeholder="Type The Planet"
                autoCorrect={false}

                style={styles.searchInput}

                onChangeText={(text) => SearchFilter(text)}
            />

            <FlatList
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.name}
                data={PlanetList}
                // funtion Call Here
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        fontSize: 20,
        fontFamily: typography.bold,
    },
    item: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    circle: {
        height: 30,
        width: 30,
        marginRight: 10,
        borderRadius: 30

    },

    list: {

    },

    allItem: {
        color: colors.white,
        padding: 10,
        marginLeft: 19,
        fontSize: 20,
        fontFamily: typography.bold

    },

    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.2,

    },
    searchInput: {
        padding: 10,
        margin: 10,
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }
});