import React from "react";
import CSS from './../../css/inlineCss';


function AboutCourse(props) {


    return (
        <tr>
            <td colSpan="3" style={CSS.padTwo}>
                <span contentEditable='true' dangerouslySetInnerHTML={{ __html: props.text }}></span>
                <br /><br />
            </td>
        </tr>
    )
}

export default AboutCourse;