import React from "react";
import CSS from './../../css/inlineCss'


function Footer(props) {


    return (
        <tr>
            <td colSpan="3"
                style={CSS.footer}>
                Мы любим вас,<br />
                    OHI-S и его команда
            </td>
        </tr>
    )
}

export default Footer;