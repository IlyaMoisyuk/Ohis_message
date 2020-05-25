import React from "react";
import CSS from './../../css/inlineCss';
import Topic from './topic';


function Lectures(props) {


    return (
        <>
            <tr>
                <td style={CSS.padThree}>
                    <img style={CSS.lectureIMG}
                        src={props.img} />
                </td>
                <td colSpan="2" style={CSS.padThree}>
                    <span style={CSS.nameLecture}>{props.nameLecture}</span>
                    <br /><br />
                    <span dangerouslySetInnerHTML={{ __html: props.cv }} ></span>
                </td>
            </tr>
            {props.weibinars ? props.weibinars.map((el, key) => { return <Topic date={el.dateLectureL} title={el.topicLecture} text={el.aboutTopicLecture} key={key} /> }) : ''}
        </>
    )
}

export default Lectures;