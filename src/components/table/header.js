import React from "react";
import CSS from './../../css/inlineCss'


function Header(props) {


    return (
        <tr>

            <td style={CSS.headerTd} align="left">
                <img style={{ maxWidth: '135px' }} src="https://ohi-s.com/wp-content/uploads/2020/05/logo.png" />
            </td>
            <td style={CSS.titleHeader} align="right">Стоматологический портал </td>
            <td align="right">
                <a href="https://ohi-s.com/panel/login.php" target="_blank" style={CSS.lk}>Личный кабинет</a>
            </td>
        </tr>
    )
}

export default Header;