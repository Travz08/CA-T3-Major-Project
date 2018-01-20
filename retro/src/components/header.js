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
  DropdownItem } from 'reactstrap';


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
        return <NavLink href="/auth/google">Login With Google</NavLink>
      default:
        return <NavLink href="/api/logout">Logout</NavLink>
    }
  }

  renderLogs() {
    // auth can only be one of three values, why we use a switch statement.
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return null
      default:
        return <NavLink href="/logs">Logs</NavLink>
    }
  }

  render() {
    // console.log(this.props)
    return (
      <div>
       <Navbar color="faded" light expand="md">
         <NavbarBrand href="/">Retrospect</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
              {this.renderLogs()}
             </NavItem>
             <NavItem>
              <NavLink href="/classroom">Classrooms</NavLink>
             </NavItem>
             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Options
               </DropdownToggle>
               <DropdownMenu >
                 <DropdownItem>
                   Travz is cool
                 </DropdownItem>
                 <DropdownItem>
                   Terry is cool
                 </DropdownItem>
                 <DropdownItem>
                    Syaf is sorta cool
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
