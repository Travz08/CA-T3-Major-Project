import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';
import retrospectLogo from '../retrospect_logo.png';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderContent() {
    // auth can only be one of three values, why we use a switch statement.
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return null;
      default:
        return <NavLink href="/api/logout">Logout</NavLink>
    }
  }

  renderClassrooms() {
    // auth can only be one of three values, why we use a switch statement.
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return null
      default:
        return <NavLink href="/classroom">Classrooms</NavLink>
    }
  }

  renderButton() {
    switch (this.props.auth) {
      case null:
        return 'Login With Google';
      case false:
        return <NavLink className="loginButton" href="/auth/google">Login With Google</NavLink>
      default:
      return null;
    }
  }


  render() {
    if (this.props.auth === false ) {
      return (
        <div>
         <Navbar expand="md">
           <NavbarBrand  className="trademark" href="/"><img src={retrospectLogo}/></NavbarBrand>
           <NavbarToggler onClick={this.toggle} />

           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
             <Button className="btn btn-warning landingButton">
                {this.renderButton()}
             </Button>
             </Nav>
           </Collapse>
         </Navbar>
        </div>
      )
    } else {
    return (
      <div>
       <Navbar color="faded"  expand="md">
         <NavbarBrand  className="trademark" href="/"><img src={retrospectLogo}/></NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav>
                 <Button className="btn btn-warning landingButton">
                 Menu
                 </Button>
               </DropdownToggle>
               <DropdownMenu >
                 <DropdownItem>
                   {this.renderClassrooms()}
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   {this.renderContent()}
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
           </Nav>
         </Collapse>
       </Navbar>
     </div>
    )
    }
  }
};







  // gets called with the entire state object out of the redux store.
  // the only thing we care about is the auth piece of state.
function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}

// same as above
// function mapStateToProps({auth}) {
//  // returning an object, and passing it to Header as props.
//   return {auth}
// }


export default connect(mapStateToProps)(Header)
