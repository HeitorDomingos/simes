import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  scanButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themas.Colors.primary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  scanButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 25,
  },
  listContainer: {
    marginTop: 16,
    paddingBottom: 80,
  },
  productItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productText: {
    fontSize: 14,
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginTop: 16,
  },
  finalizeButton: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: themas.Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  finalizeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: themas.Colors.primary, //"#e63946",
    padding: 10,
    borderRadius: 8,
    alignContent: "flex-end",
  },
});
