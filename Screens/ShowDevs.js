import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { ShowDialog } from "./Components";
import { UseAuth, UseDialog } from "../Hooks";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RenderDev } from "./RenderDev";
import { apiGetDev } from "../Api/users";

const ShowDevs = (props) => {
  const { token, delTick, role, getDevList } = UseAuth();
  const [ticket, setTicket] = useState([]);
  const { tixOpen, showTixDetails, closeTixDetails } = UseDialog();

  console.log(getDevList);

  const handleClientOptionOn = (ticket) => {
    setTicket(ticket);
    showTixDetails();
  };

  const handleCloseDialog = () => {
    closeTixDetails();
  };

  const handleFetch = () => {
    refetch();
  };

  const handleDelete = (tixId) => {
    delTick(tixId);
    handleFetch();
  };

  const renderItem = ({ item }) => (
    <RenderDev item={item} navigation={props.navigation} />
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={getDevList}
          numColumns={2}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />

        {/* {Devs.map((ticket) =>
            ticket.status !== "Complete" ? (
              <Box
                elevation={4}
                style={{
                  width: "90%",
                  fontSize: "50%",
                  padding: "1%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 2,
                }}
              > */}
        {/* Left Side */}
        {/* <View
                  style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "20%" }}>
                    <Text>
                      #{ticket.id}: {ticket.title}
                    </Text>
                  </Box>
                  <Box sx={{ width: "30%" }}>
                    <Text>Description: {ticket.description}</Text>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <Text>Created By: {ticket.username}</Text>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <Text>
                      Assign to:{" "}
                      {ticket.developer ? ticket.developer : "Unassigned"}
                    </Text>
                  </Box>
                </View> */}
        {/* Right Side */}
        {/* <View
                  style={{
                    display: "flex",
                    width: "10%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  {role?.includes("Client") || role?.includes("Admin") ? (
                    <Button
                      onClick={() => handleDelete(ticket.id)}
                      variant='contained'
                      color='error'
                    >
                      Delete
                    </Button>
                  ) : null}
                  <Button
                    onClick={() => handleClientOptionOn(ticket)}
                    variant='contained'
                  >
                    More
                  </Button>
                </View>
              </Box>
            ) : null
          )} */}

        {/* Completed*/}

        {/* <Text>Completed Devs</Text>
          {Devs.map((ticket) =>
            ticket.status === "Complete" ? (
              <Box
                elevation={4}
                style={{
                  width: "90%",
                  fontSize: "50%",
                  padding: "1%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 2,
                }}
              > */}
        {/* Left Side */}
        {/* <div
                  style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "20%" }}>
                    <Text>
                      #{ticket.id}: {ticket.title}
                    </Text>
                  </Box>
                  <Box sx={{ width: "30%" }}>
                    <Text>Description: {ticket.description}</Text>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <Text>Created By: {ticket.username}</Text>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <Text>
                      Assign to:{" "}
                      {ticket.developer ? ticket.developer : "Unassigned"}
                    </Text>
                  </Box>
                </div>
              </Box>
            ) : null
          )} */}

        {/* <Dialog open={tixOpen} onClose={handleCloseDialog}>
        <ShowDialog ticket={ticket} />
      </Dialog> */}
      </View>
    </>
  );
};

export default ShowDevs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  TicketContainer: {
    backgroundColor: "#cbced1",
    width: 160,
    height: 250,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    marginTop: 15,
    padding: 10,
    justifyContent: "center",
    marginLeft: 7,
  },
  textContainer: {
    flexDirection: "row",
    backgroundColor: "#cbced1",
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
    borderRadius: 15,
    alignItems: "center",
  },
});
