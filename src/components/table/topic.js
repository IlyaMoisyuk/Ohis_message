import React from "react";
import CSS from './../../css/inlineCss';


function Topic(props) {


    return (
        <tr>
            <td colSpan="3" style={CSS.padFour}>
                {props.date == '' ? <span style={CSS.dateSoon}>Дата уточняется...</span> : <span style={CSS.date}>{props.date}</span>}
                {/* <span
                    style="background-color: #ff6833; padding: 5px 10px; color: white; text-transform: uppercase; font-size: 13px; border-radius: 5px;">Бесплатно</span> */}
                <br />
                <span style={CSS.titleWEB}>{props.title}</span>
                <br /><br />
                <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
                <br></br>
            </td>
        </tr>

    )
}

export default Topic;