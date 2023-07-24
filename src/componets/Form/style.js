import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: 
  {
  
    flex: 1, 
    backgroundColor: "#ffffff",
    
    alignItems: "center",
    paddingTop:30,
    borderTopLeftRadius:40,
    borderTopRightRadius: 40,
  },

  formulario:
  {
    width: "100%",
   
 
  },

  formLabel:
  {
    color: "#000000",
    fontSize:18,
    paddingLeft:20, 
  },

  inpunt:
  {
    width: "90%",
    borderRadius:50,
    backgroundColor: "#f6f6f6",
    height:40,
    margin: 12,
    paddingLeft:10,
  },

  btnCalcular: 
  {
    borderRadius:50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    marginTop:30,
  },

  textBtnCalcular:
  {
    fontSize:20,
    color:"#ffffff"
  },

  erroMensagem:
  {
    fontSize:12,
    color: "red",
    fontWeight: "bold",
    paddingLeft:20,
  }
});

export default styles