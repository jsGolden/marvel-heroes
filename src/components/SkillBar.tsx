import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native';
import colors, { primaryColors } from '../styles/colors';

interface SkillBarProps extends ViewProps {
    value: number;
}

export default function SkillBar({ value, ...rest }: SkillBarProps) {

    const barra = (value: number) => {
        var bar: JSX.Element[] = [];
        for(var i=1; i<value; i++) {
            bar.push(
                <View style={styles.whiteBar} key={i} />
            )
        }

        bar.push(
            <View style={styles.midBar} key={i} />
        )

        for(var i=value+1; i<=50; i++) {
            bar.push(
                <View style={styles.greyBar} key={i} />
            )
        }
        return bar
    }

    return (
        <View style={styles.container}>
            
            {barra(value)}
            {rest.style}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    whiteBar: {
        width: 2,
        height: '100%',
        backgroundColor: colors.white,
        marginLeft: 3
    },
    midBar: {
        width: 2,
        backgroundColor: colors.white,
        marginLeft: 3,
        height: 14
    },
    greyBar: {
        width: 2,
        height: '100%',
        backgroundColor: primaryColors.dark,
        marginLeft: 3
    }
})