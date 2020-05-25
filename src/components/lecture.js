import React, { useState } from 'react';
import Weibenar from './webinar'

function Lecture(props) {
    const [remove, setcountRemove] = useState(true);
    const [countWebinar, setCountWebinar] = useState(1);


    function Remove() {
        props.remove()
        setcountRemove(!remove);
    }



    function forWeibenar(n) {
        let mas = [];
        for (let i = 0; i < n; i++) {
            mas[i] = <Weibenar key={i} remove={() => delete mas[i]}></Weibenar>;
        }
        return mas;
    }



    return (
        <>
            {remove ?
                <div className="Lecture_label ">
                    <div className='remove' onClick={Remove}>
                        <span>X</span>
                    </div>
                    <label>
                        <span>Имя лектора: </span>
                        <input type="text" name="nameLecture" />
                    </label>
                    <label>
                        <span>Cv лектора: </span>
                        <textarea type="text" name="CVLecture" />
                    </label>
                    <label>
                        <span>URL фото лектора: </span>
                        <input type="text" name="fotoLecture" />
                    </label>
                    {forWeibenar(countWebinar)}
                    <input type="button" value="Добавить вебинар" onClick={() => setCountWebinar(countWebinar + 1)} />
                </div> : ''
            }
        </>
    )
}

export default Lecture;