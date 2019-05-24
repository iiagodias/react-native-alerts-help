import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contain:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center"
    },
    boxBody:{
        backgroundColor: "#fff",
        borderRadius: 3,
        padding: 10,
        width: "80%",
        flexWrap: "wrap"
    },
    title:{
        flexDirection: "row"
    },
    textTitle:{
        marginTop: -2,
        marginLeft: 5,
        fontWeight: "bold"
    },
    description:{
        marginTop: 10
    },
    textDescription:{
        fontSize: 12
    },
    bntClose:{
        padding: 6,
        alignItems: "center",
        width: "100%",
        borderRadius: 5,
        marginTop: 25
    },
    textBnt:{
        fontSize: 12,
        color: "#fff"
    }
  });

export default styles;