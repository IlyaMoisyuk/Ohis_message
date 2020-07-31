import React from "react";
import CSS from './../../css/inlineCss'


function TitleCourse(props) {


    return (
        <tr style={CSS.pad}>
            <td colSpan="3" style={CSS.titleCourse} dangerouslySetInnerHTML={{__html: props.text}}>
            </td>
        </tr>
    )
}

export default TitleCourse;