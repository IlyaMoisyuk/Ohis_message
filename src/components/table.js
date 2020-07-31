import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CSS from './../css/inlineCss';
import Header from './table/header';
import FonImage from './table/fonImage';
import TitleCourse from './table/titleCourse';
import AboutCourse from './table/aboutCourse';
import TitleMoreProgramm from './table/titleMoreProgramm';
import Lectures from './table/lectures';
import Footer from "./table/footer";
import LinkFooter from './table/LinkFooter'
import * as clipboard from "clipboard-polyfill"
import './../css/form.scss';


function Table() {


    let data = useSelector(state => state)
    const table = useRef(null);
    const dispatch = useDispatch()
    const [didMount, setDidMount] = useState(data)


    // useEffect(() => {

    //     dispatch({
    //         type: 'ADD_MESAGE',
    //         message: table
    //     })



    //     console.log(data, 'reux')

    // })




    return (
        <>
            {data !== {} ?
                <>
                    <table bgcolor='#E5E5E5' style={CSS.container} ref={table}>
                        <tbody>
                            <tr>
                                <td>
                                    <center>
                                        <table border="0" cellPadding="0" cellSpacing='0' bgcolor="#fff" style={CSS.firstTable}>
                                            <tbody>
                                                <Header />
                                                <FonImage img={data.image} />
                                                <TitleCourse text={data.courseName} />
                                                <AboutCourse text={data.aboutCourse} />
                                                {/* <TitleMoreProgramm text={data.titleCourse} />
                                                {
                                                    data.lecture ?
                                                        data.lecture.map((el, key) => {
                                                            return <Lectures key={key} img={el.fotoLecture} cv={el.CVLecture} nameLecture={el.nameLecture} weibinars={el.lectureTopic} />
                                                        }) : ''
                                                } */}
                                                <Footer />
                                            </tbody>
                                        </table>
                                        <LinkFooter />
                                    </center>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="copuPast">
                        <input type="button" value="Скопировать письмо" onClick={() => clipboard.writeText(table.current.outerHTML)} />
                    </div>
                </>
                : ''}
        </>
    )

}


export default Table;