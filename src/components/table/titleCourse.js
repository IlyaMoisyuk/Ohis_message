import React from "react";
import CSS from './../../css/inlineCss'


function TitleCourse(props) {


    return (
        <tr style={CSS.pad}>
            <td colSpan="3" style={CSS.titleCourse}>
                {props.text}
            </td>
        </tr>
    )
}

export default TitleCourse;