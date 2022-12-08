import APIService from "../../api/APIService";
import React, { useEffect, useState } from "react";
import classNames from "../../utils/classNames";
import styles from "../MyProfile/styles.module.scss";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Props = {
  userId: number;
};

type Message = {
    question_id: number,
    question_text: string,
    apt_area: string,
    question_purpose: string,
    customer_id: number,
    question_status: string,
    question_reply: string,
    submission_date_time: string
}

function Row(props: { row: Message}) {
      const { row } = props;
      const [open, setOpen] = React.useState(false);

      return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
              {row.submission_date_time.slice(0, 10) + " " + row.submission_date_time.slice(11, 16)}
            </TableCell>
            <TableCell align="center">{row.question_purpose}</TableCell>
            <TableCell align="center">{row.apt_area}</TableCell>
            <TableCell align="center">{row.question_status}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center"><b>Question</b></TableCell>
                        <TableCell align="center"><b>Reply</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableCell align="center">{row.question_text}</TableCell>
                      <TableCell align="center">{row.question_reply}</TableCell>
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
    );
}

function MyMessages(props: Props) {
  const userId = props.userId;
  const [messageList, setMessageList] = useState<any[]>([]);

  useEffect(() => {
    console.log(userId);
    APIService.get_messages_by_customer(userId).then((resp) => {
      set_messages(resp);
      console.log(resp.length);
      // console.log(messageList.length)
    });
    console.log(messageList.length)
  }, [userId])

  const set_messages = (messages: []) => {
    messages.map(message => {
        // console.log(message['apt_area'])
        // console.log(typeof message)
        var this_apt_area = ''
        if (message['apt_area'] == 0) {
            this_apt_area = 'College Station'
        }
        else if (message['apt_area'] == 1) {
            this_apt_area = 'Austin'
        }
        else {
            this_apt_area = 'Houston'
        }

        var this_question_purpose = ''
        if (message['question_purpose'] == 0) {
            this_question_purpose = 'apartment special offers'
        }
        else if (message['question_purpose'] == 1) {
            this_question_purpose = 'apartment roommate'
        }
        else {
            this_question_purpose = 'apartment leasing office'
        }

        var this_question_status = ''
        if (message['question_status'] == 0) {
            this_question_status = 'not yet replied'
        }
        else {
            this_question_status = 'replied'
        }

        setMessageList(messageList => [
          ...messageList,
          {
              question_id: message['question_id'],
              question_text: message['question_text'],
              apt_area: this_apt_area,
              question_purpose: this_question_purpose,
              customer_id: message['customer_id'],
              question_status: this_question_status,
              question_reply: message['question_reply'],
              submission_date_time: message['submission_date_time']
          }
        ]);
    })
    // console.log("$$$")
    // console.log(messages.length)
    // console.log("@@@")
    // console.log(messageList.length)
    // console.log("###")
  };

  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  //
  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };
  //
  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
      <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
              <TableContainer component={Paper}>
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell><b>Submission Date Time</b></TableCell>
                        <TableCell align="center"><b>Question Purpose</b></TableCell>
                        <TableCell align="center"><b>Apt Area</b></TableCell>
                        <TableCell align="center"><b>Question Status</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/*{messageList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((message) => (*/}
                      {messageList.map((message) => (
                        <Row key={message.question_id} row={message} />
                      ))}
                    </TableBody>
                  </Table>
              </TableContainer>
          </Paper>
      </Box>

  );
}

export default MyMessages;
