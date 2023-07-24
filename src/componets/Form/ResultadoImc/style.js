import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 resultadoImc: {
    flex:1 ,//1 para usar todo o espaço que sobrou pr ele
    marginTop:20,
    paddingTop:60,
    borderRadius:50,
    alignItems:"center",
    width:"100%",
  
 },

 numeroImc:
 {
    fontSize:48,
    color:"#ff0043",
    fontWeight: "bold",
 },

 informacao:
 {
    fontSize:18,
    color:"#ff0043",
    fontWeight: "bold",

 },

 boxCompartilhar:
 {
   width: "100%",
   alignItems: "center",
   marginBottom:10,
 },

 compartilhar:
 {
   backgroundColor: "#1877f2",
   borderRadius:50,
   paddingBottom:5,
   paddingTop:5,
   
 },

 textCompartilhar: 
 {
   color: "#ffffff",
   fontWeight: "bold",
   paddingHorizontal: 30,
   
 }

});

export default styles