import { StyleSheet } from 'react-native'




export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#02685a",
    paddingHorizontal: 20,
    height: 270,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: "100%",
  },
  imgIcon: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
    paddingVertical: 5,
  },
  username: {
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#cde1df",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },

  searchContainer:{
    marginHorizontal:10
  },
  searchIcon: {
    marginLeft: 10,
  },
  serviceText: {
    fontSize: 22,
    fontWeight: "700",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  subText: {
    paddingHorizontal: 20,
    color: "#333",
    fontWeight: "500",
  },
  heads: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 20,
    alignItems: "center",
  },
  doc: {
    paddingTop: 20,
  },
  docHeader: {},
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#e5e5e5",
    margin: 10,
  },
  docImage: {
    width: 80,
    height: 80,
  },
  docContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 20,
    alignItems: "flex-start",
    borderWidth: 0.3,
    marginVertical: 10,
    borderRadius: 15,
  },
  docDetails: {
    paddingVertical: 10,
  },
  docName: {
    fontSize: 22,
    fontWeight: "700",
  },
  starContainer: {
    flexDirection: "row",
    gap: 5,
  },
  starText: {
    fontWeight: "600",
  },
  timeContainer: {
    flexDirection: "row",
    gap: 6,
  },

  dateContain: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "30%",
    height: 100,
    marginBottom: 20,
    backgroundColor: "#CDE1DF",
    borderRadius: 20,
  },
  dateText: {
    fontSize: 35,
    fontWeight: "500",
    color: "#fff",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#2f786d",
  },
  bookedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#02685a",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  selectedDoctor: {
    backgroundColor: "#2f786d",
  },
});
