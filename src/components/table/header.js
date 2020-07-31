import React from "react";
import CSS from './../../css/inlineCss'


function Header(props) {


    return (
        <>
            <tr>

                <td colSpan="2" style={CSS.headerTd} align="left">
                    <img style={{ height: '36px' }} src="logo.png" />
                </td>
                <td colSpan="2" align="right" style={CSS.lkWrapper}>
                    <a href="https://ohi-s.com/panel/login.php" target="_blank" style={CSS.lk}>Личный кабинет</a>
                </td>
            </tr>
        </>
    )
}

export default Header;