import APIService from "../../api/APIService";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type Props = {
  userId: number;
  isAdmin: boolean;
};

type Message = {
  question_id: number;
  question_text: string;
  apt_area: number;
  question_purpose: number;
  customer_id: number;
  question_status: number;
  question_reply: string;
  submission_date_time: string;
};

function Row(props: { row: Message; isAdmin: boolean }) {
  const { row, isAdmin } = props;
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState("");

  useEffect(() => {
    console.log("row is admin", isAdmin);
  }, [isAdmin]);

  const pushReply = () => {
    APIService.reply({
      question_id: row.question_id,
      question_status: 1,
      question_reply: reply,
    }).then((resp) => {
      console.log(resp);
      window.location.reload();
    });
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.submission_date_time.slice(0, 10) +
            " " +
            row.submission_date_time.slice(11, 16)}
        </TableCell>

        <TableCell align="center">
          {row.question_purpose == 0
            ? "apartment special offers"
            : row.question_purpose == 1
            ? "apartment roommate"
            : "apartment leasing office"}
        </TableCell>
        <TableCell align="center">
          {row.apt_area == 0
            ? "College Station"
            : row.apt_area == 1
            ? "Austin"
            : "Houston"}
        </TableCell>
        <TableCell align="center">
          {row.question_status == 0 ? "not yet replied" : "replied"}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>Question</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Reply</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell align="center">{row.question_text}</TableCell>
                  {row.question_status === 1 ? (
                    <TableCell align="center">{row.question_reply}</TableCell>
                  ) : (
                    isAdmin && (
                      <TableCell align="center">
                        <input
                          placeholder="Type your reply here..."
                          onChange={(e) => setReply(e.target.value)}
                        />
                        <button onClick={pushReply}>Submit</button>
                      </TableCell>
                    )
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function MessageList(props: Props) {
  const { userId, isAdmin } = props;
  const [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    if (isAdmin) {
      APIService.get_messages().then((resp) => {
        // set_messages(resp);
        setMessageList(resp);
      });
    } else {
      APIService.get_messages_by_customer(userId).then((resp) => {
        // set_messages(resp);
        setMessageList(resp);
      });
    }
  }, [userId]);

  useEffect(() => {
    console.log(messageList);
    console.log("Message List isAdmin", isAdmin);
  }, [messageList]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <b>Submission Date Time</b>
                </TableCell>
                <TableCell align="center">
                  <b>Question Purpose</b>
                </TableCell>
                <TableCell align="center">
                  <b>Apt Area</b>
                </TableCell>
                <TableCell align="center">
                  <b>Question Status</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messageList.map((message) => (
                <Row
                  key={message.question_id}
                  row={message}
                  isAdmin={isAdmin}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default MessageList;
