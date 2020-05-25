import React from "react";
import CSS from './../../css/inlineCss'


function FonImage(props) {


    return (
        <tr>
            <td colSpan="3">
                <img style={CSS.fonImage} src={props.img} />
            </td>
        </tr>
    )
}

export default FonImage;