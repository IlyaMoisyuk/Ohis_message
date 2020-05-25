import React, { useState } from 'react'


function Weibenar(props) {


    const [remove, setcountRemove] = useState(true);




    function Remove() {
        props.remove()
        setcountRemove(!remove);
    }


    return (
        <>
            {remove ?
                <div className="lectureTopic">
                    <div className='remove' onClick={Remove}>
                        <span>X</span>
                    </div>
                    <label>
                        <span>Тема: </span>
                        <input type="text" name="topicLecture" />
                    </label>
                    <label>
                        <span>Дата: </span>
                        <input type="text" name="dateLecture" />
                    </label>
                    <label>
                        <span>Описание: </span>
                        <textarea type="text" name="aboutTopicLecture" />
                    </label>
                </div>

                : ''}
        </>

    )
}

export default Weibenar;