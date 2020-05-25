import React from "react";
import CSS from './../../css/inlineCss';


function TitleMoreProgramm(props) {


    return (
        <tr>
            <td colSpan="3"
                style={CSS.TitleMore}
                dangerouslySetInnerHTML={{ __html: props.text }}>
            </td>
        </tr>
    )
}

export default TitleMoreProgramm;