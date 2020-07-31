import React from "react";
import CSS from './../../css/inlineCss';


function AboutCourse(props) {


    return (
        <>
            <tr>
                <td colSpan="3" style={CSS.padTwo}>
                    <span contentEditable='true' dangerouslySetInnerHTML={{ __html: props.text }}></span>
                </td>
            </tr>
            <tr>
                <td colSpan="3" style={CSS.numberUserWrapper}>
                    <span style={CSS.numberUser}>4790</span>
                </td>
            </tr>
            <tr>
                <td colSpan="3" style={CSS.padTwo}>
                    <span>Если вы не регистрировались на сайе, то можете смело игнорировать это сообщение. Возможно кто-то ввел ваш адрес электронной почты по ошибке.</span>
                </td>
            </tr>
        </>
    )
}

export default AboutCourse;