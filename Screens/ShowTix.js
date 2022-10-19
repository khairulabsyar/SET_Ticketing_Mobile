import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Button, Dialog, Paper } from "@react-native-material/core";
// import { ShowDialog } from "./Components";
import { UseAuth, UseDialog } from "../Hooks";
import { View } from "react-native";

const ShowTix = () => {
  const { token, delTick, role } = UseAuth();
  const [ticket, setTicket] = useState([]);
  const { tixOpen, showTixDetails, closeTixDetails } = UseDialog();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchTicket = () => {
    return axios.get("http://127.0.0.1:8000/api/ticket", config);
  };

  const { data, isLoading, isError, error, refetch } = useQuery(
    ["tickets"],
    fetchTicket,
    {
      enabled: true,
      onSuccess: (res) => {
        // console.log("Successfull", res);
      },
      onError: (res) => {
        console.log("Error", res);
      },
    }
  );

  if (isLoading) {
    return <View>Loading...</View>;
  }
  if (isError) {
    return <View>Error! {error.message}</View>;
  }

  const Tickets = data?.data?.data;

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

  return (
    <>
      <Box sx={{ display: "flex", width: 1, flexDirection: "column" }}>
        {/* In Progress & Backlog */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "5%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>In Progress & Backlog Ticket</h1>
          {Tickets.map((ticket) =>
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
              >
                {/* Left Side */}
                <View
                  style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "20%" }}>
                    <h1>
                      #{ticket.id}: {ticket.title}
                    </h1>
                  </Box>
                  <Box sx={{ width: "30%" }}>
                    <h1>Description: {ticket.description}</h1>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <h1>Created By: {ticket.username}</h1>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <h1>
                      Assign to:{" "}
                      {ticket.developer ? ticket.developer : "Unassigned"}
                    </h1>
                  </Box>
                </View>
                {/* Right Side */}
                <View
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
          )}
        </Box>

        {/* Completed*/}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "5%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Completed Tickets</h1>
          {Tickets.map((ticket) =>
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
              >
                {/* Left Side */}
                <div
                  style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "20%" }}>
                    <h1>
                      #{ticket.id}: {ticket.title}
                    </h1>
                  </Box>
                  <Box sx={{ width: "30%" }}>
                    <h1>Description: {ticket.description}</h1>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <h1>Created By: {ticket.username}</h1>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <h1>
                      Assign to:{" "}
                      {ticket.developer ? ticket.developer : "Unassigned"}
                    </h1>
                  </Box>
                </div>
              </Box>
            ) : null
          )}
        </Box>
      </Box>

      {/* <Dialog open={tixOpen} onClose={handleCloseDialog}>
        <ShowDialog ticket={ticket} />
      </Dialog> */}
    </>
  );
};

export default ShowTix;
