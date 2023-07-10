import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";

import { Link } from "react-router-dom";

const GET_TOKEN = gql`
  query getRegistrationDetails($id: Int) {
    Details: getRegistrationDetails(id: $id) {
      address
      email
      id
      nationality
      password
      phoneNumber
      pincode
      username
    }
  }
`;

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllDetails = () => {
  const { loading, error, data } = useQuery(GET_TOKEN, {
    variables: { id: 6 }, // You can pass the desired ID as a variable here
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const registrationDetails = data?.Details;

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Password</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Pincode</TableCell>
          <TableCell>Nationality</TableCell>
          <TableCell>DELETE</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {registrationDetails.map((detail) => (
          <TRow key={detail.id}>
            <TableCell>{detail.id}</TableCell>
            <TableCell>{detail.username}</TableCell>
            <TableCell>{detail.password}</TableCell>
            <TableCell>{detail.email}</TableCell>
            <TableCell>{detail.phoneNumber}</TableCell>
            <TableCell>{detail.address}</TableCell>
            <TableCell>{detail.pincode}</TableCell>
            <TableCell>{detail.nationality}</TableCell>
            <TableCell>
              <Button color="secondary" variant="contained">
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllDetails;
