import { View, Text } from "react-native";
import styles from "./style";

export default function Title()
{
    return(
        <View style={styles.boxTitulo}>
            <Text style={styles.textTitulo}>OneBitHealt</Text>
        </View>
    );
}