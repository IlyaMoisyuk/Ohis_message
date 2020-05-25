import React, { useRef, useState } from 'react';
import './../css/form.scss';
import { useDispatch, useSelector } from 'react-redux'
import Lecture from "./lecture";




function Form() {
    const form = useRef(null);
    const dispatch = useDispatch()
    const [countLecture, setcountLecture] = useState(1);
    let data = useSelector(state => state)



    const infoForm = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_FORM',
            data: sortForm(form.current)
        })
    }

    function forLecture(n) {
        let mas = [];
        for (let i = 0; i < n; i++) {
            mas[i] = <Lecture key={i} remove={() => delete mas[i]}></Lecture>;
        }
        return mas;
    }



    function sortForm(form) {
        let data = {
            courseName: form.courseName.value,
            image: form.image.value,
            aboutCourse: form.aboutCourse.value,
            titleCourse: form.titleCourse.value,
            lecture: []
        }

        let lec = form.querySelectorAll('.Lecture_label');
        lec.forEach(el => {

            let obj = {
                nameLecture: el.querySelector('[name="nameLecture"]').value,
                CVLecture: el.querySelector('[name="CVLecture"]').value,
                fotoLecture: el.querySelector('[name="fotoLecture"]').value,
                lectureTopic: []
            };

            let topic = el.querySelectorAll('.lectureTopic');

            topic.forEach(elTwo => {
                console.log(elTwo)
                let objTWo = {
                    topicLecture: elTwo.querySelector('[name="topicLecture"]').value,
                    dateLectureL: elTwo.querySelector('[name="dateLecture"]').value,
                    aboutTopicLecture: elTwo.querySelector('[name="aboutTopicLecture"]').value
                }

                obj.lectureTopic.push(objTWo)
            })

            data.lecture.push(obj)
        })

        return data;

    }

    function CopyText(txt) {

    }






    return (
        <>
            <form className="Form-for-Liza" ref={form} onSubmit={infoForm}>
                <label>
                    <span>Название курса: </span>
                    <input type="text" name="courseName" />
                </label>
                <label>
                    <span>Url изображения: </span>
                    <input type="text" name="image" />
                </label>
                <label>
                    <span>Описание курса: </span>
                    <textarea type="text" name="aboutCourse" />
                </label>
                <label>
                    <span>Заголовок программы: </span>
                    <input type="text" name="titleCourse" />
                </label>
                {forLecture(countLecture)}
                <button type="submit" className="Send">OK</button>
            </form>
            <div className="menu">
                <input type="button" value="Добавить лектора" onClick={() => setcountLecture(countLecture + 1)} />
            </div>
        </>
    );
}




export default Form;
