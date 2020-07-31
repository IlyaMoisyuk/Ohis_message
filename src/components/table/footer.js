import React from "react";
import CSS from './../../css/inlineCss'


function Footer(props) {


    return (
            <tr>
                <td colSpan="3"
                    style={CSS.footer}>
                    <span style={CSS.sectionFooterLeft}>    
                        Всегда на связи,<br></br> <span style={CSS.wrapperImg}>Команда Ohis<img style={CSS.footerImg} src='logo_ohisLove.png' /></span>
                    </span>
                    <span style={CSS.sectionFooterRight}>
                        <img style={CSS.rightSectionImg} src="Facebook.png" />
                        <img style={CSS.rightSectionImg} src="VK.png" />
                        <img style={CSS.rightSectionImg} src="Instagram.png" />
                        <img src="Youtube.png" />
                    </span>
                </td>
            </tr>
    )
}

export default Footer;