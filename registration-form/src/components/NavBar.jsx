import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

/*Styles*/

const Header = styled(AppBar)`
  background: #472eb8;
`;

const Tabs = styled(NavLink)`
  margin-right: 20px;
  font-size: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/Add">Register Form</Tabs>
        <Tabs to="All">Registration Details</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
