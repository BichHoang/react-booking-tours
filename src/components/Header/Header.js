import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="loader-wrapper">
                    <div className="loader-content">
                        <div className="cube1 t-cube" />
                        <div className="cube2 t-cube" />
                    </div>
                </div>
            </div>

        );
    }
}
export default Header;
