import { createStore } from 'redux';

const INITIAL_STATE = {
    aboutCourse: "Чтобы завершить настройку учетной записи Ohi-s, нам нужно убедиться, что это ваш адрес электронной почты. <br><br>Для прроверки адреса жлектронной почты используйте этот код беопасности:",
    courseName: "Проверка адреса <br> электронной почты",
    image: "./slide1.jpg",
    lecture: [{
        CVLecture: " asd fsa dfsa fsa f",
        fotoLecture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/JPEG_example_down.jpg/350px-JPEG_example_down.jpg",
        lectureTopic: [{
            aboutTopicLecture: "as dfas dfas fs df",
            dateLectureL: " as dfasdf ",
            topicLecture: "as f as dfas fas fas",
        }],
        nameLecture: " as fsa fsa fs fs df",
        titleCourse: "sdd afs  dfas fas fas "
    }]

};


function Data(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_FORM':
            console.log(action.data);
            return { ...action.data };
        case "ADD_MESAGE":
            return { ...action.message };
        default:
            return state;
    }
}

const store = createStore(Data);

export default store;