import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap'
import RegisterModel from './auth/RegisterModal'

class AppNavBar extends Component {
    state = {
            isOpen: false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">To-Do List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                   <RegisterModel/>
                            </NavItem>
                        </Nav>
                    </Collapse> 
                </Container>
            </Navbar>
        </div>
    )}
}

export default AppNavBar