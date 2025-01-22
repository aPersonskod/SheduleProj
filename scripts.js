document.addEventListener('DOMContentLoaded', function () {
    const chislitelForm = document.getElementById('chislitel-form');
    const znamenatelForm = document.getElementById('znamenatel-form');
    const messageDiv = document.getElementById('message');
    let chislitelData = { daysData: [] }; // Инициализируем структуру данных для числителя
    let znamenatelData = { daysData: [] }; // Инициализируем структуру данных для знаменателя

    // Загрузка данных (имитация)
    async function loadData() {
        try {
            // Имитация загрузки из файла (в реальном коде это будет fetch запрос)
            const loadedChislitelData = {
                "daysData": [
                    {
                        "name": "Понедельник",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Технологии трехмерного моделирования и анимации",
                        "fTeacher": "(пр.) Николаева Л.Г.",
                        "fCab": "В 484",
                        "fLink": {
                            "link": "",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "",
                        "sTeacher": "",
                        "sCab": "",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    },
                    {
                        "name": "Вторник",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Информационные системы и технологии",
                        "fTeacher": "(лек.) Шевякова А.Р.",
                        "fCab": "ДО",
                        "fLink": {
                            "link": "https://teams.microsoft.com/",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "Информационные системы и технологии",
                        "sTeacher": "(пр.) Шевякова А.Р.",
                        "sCab": "ДО",
                        "sLink": {
                            "link": "https://teams.microsoft.com/",
                            "key": ""
                        }
                    },
                    {
                        "name": "Среда",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Разработка ИТ проекта",
                        "fTeacher": "(пр.) Волкова Г.К.",
                        "fCab": "ДО",
                        "fLink": {
                            "link": "https://teams.microsoft.com/",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "Администрирование информационных систем",
                        "sTeacher": "(пр.) Валуев К.В. (пары не будет, иди чай пей!)",
                        "sCab": "ДО",
                        "sLink": {
                            "link": "https://zoom.us/",
                            "key": ""
                        }
                    },
                    {
                        "name": "Четверг",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Экономика проектной деятельности",
                        "fTeacher": "(лек) Дроботун Н.В.",
                        "fCab": "ДО",
                        "fLink": {
                            "link": "https://teams.microsoft.com/",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "Экономика проектной деятельности",
                        "sTeacher": "(пр) Дроботун Н.В.",
                        "sCab": "ДО",
                        "sLink": {
                            "link": "https://teams.microsoft.com",
                            "key": ""
                        }
                    },
                    {
                        "name": "Пятница",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Разработка ИТ проекта",
                        "fTeacher": "(лек) Волкова Г.К.",
                        "fCab": "ДО",
                        "fLink": {
                            "link": "https://teams.microsoft.com",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "Эта ссылка только для избранных",
                        "sTeacher": "Не ходи сюда, если не избранный!",
                        "sCab": "даже не думай!",
                        "sLink": {
                            "link": "https://teams.microsoft.com",
                            "key": ""
                        }
                    },
                    {
                        "name": "Суббота",
                        "fTime": "all time",
                        "fLesson": "hope",
                        "fTeacher": "we chill",
                        "fCab": "at home",
                        "fLink": {
                            "link": "",
                            "key": ""
                        },
                        "sTime": "all time",
                        "sLesson": "hope",
                        "sTeacher": "we chill",
                        "sCab": "at home",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    },
                    {
                        "name": "Воскресение",
                        "fTime": "all time",
                        "fLesson": "hope",
                        "fTeacher": "we chill",
                        "fCab": "at home",
                        "fLink": {
                            "link": "",
                            "key": ""
                        },
                        "sTime": "all time",
                        "sLesson": "hope",
                        "sTeacher": "we chill",
                        "sCab": "at home",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    }
                ]
            }
            //chislitelData = loadedChislitelData;
            chislitelData = await fetch('https://localhost:7089/Chislitel')
                .then((response) => response.json());
            console.log('Загружены данные для числителя:', chislitelData);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }

        try {
            // Имитация загрузки из файла (в реальном коде это будет fetch запрос)
            const loadedZnamenatelData = {
                "daysData": [
                    {
                        "name": "Понедельник",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Системы искуственного интеллекта",
                        "fTeacher": "(лек) Волков А.И.",
                        "fCab": "ДО",
                        "fLink": {
                            "link": "https://teams.microsoft.com/",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "Системы искуственного интеллекта",
                        "sTeacher": "(лаб) Волков А.И.",
                        "sCab": "ДО",
                        "sLink": {
                            "link": "https://teams.microsoft.com/",
                            "key": ""
                        }
                    },
                    {
                        "name": "Вторник",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Патентно-лицензионная работа",
                        "fTeacher": "(лек.) Шванкин А.М.",
                        "fCab": "525",
                        "fLink": {
                            "link": "https://us04web.zoom.us/",
                            "key": "3K9Gpb"
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "Патентно-лицензионная работа",
                        "sTeacher": "(лек.) Шванкин А.М.",
                        "sCab": "525",
                        "sLink": {
                            "link": "https://us04web.zoom.us/",
                            "key": "3K9Gpb"
                        }
                    },
                    {
                        "name": "Среда",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Администрирование информационных систем",
                        "fTeacher": "(лек.) Валуев К.В.",
                        "fCab": "ДО",
                        "fLink": {
                            "link": "https://zoom.us",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "",
                        "sTeacher": "",
                        "sCab": "",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    },
                    {
                        "name": "Четверг",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Web-дизайн",
                        "fTeacher": "(пр) Кокорин Е.С.",
                        "fCab": "В 462",
                        "fLink": {
                            "link": "",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "Web-дизайн",
                        "sTeacher": "(пр) Кокорин Е.С.",
                        "sCab": "В 462",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    },
                    {
                        "name": "Пятница",
                        "fTime": "18:30 - 20:00",
                        "fLesson": "Технологии трехмерного моделирования и анимации",
                        "fTeacher": "(лек.) Николаева Л.Г.",
                        "fCab": "В 452",
                        "fLink": {
                            "link": "",
                            "key": ""
                        },
                        "sTime": "20:10 - 21:40",
                        "sLesson": "",
                        "sTeacher": "",
                        "sCab": "",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    },
                    {
                        "name": "Суббота",
                        "fTime": "all time",
                        "fLesson": "hope",
                        "fTeacher": "we chill",
                        "fCab": "at home",
                        "fLink": {
                            "link": "",
                            "key": ""
                        },
                        "sTime": "all time",
                        "sLesson": "hope",
                        "sTeacher": "we chill",
                        "sCab": "at home",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    },
                    {
                        "name": "Воскресение",
                        "fTime": "all time",
                        "fLesson": "hope",
                        "fTeacher": "we chill",
                        "fCab": "at home",
                        "fLink": {
                            "link": "",
                            "key": ""
                        },
                        "sTime": "all time",
                        "sLesson": "hope",
                        "sTeacher": "we chill",
                        "sCab": "at home",
                        "sLink": {
                            "link": "",
                            "key": ""
                        }
                    }
                ]
            };
            //znamenatelData = loadedZnamenatelData;
            znamenatelData = await fetch('https://localhost:7089/Znamenatel')
                .then((response) => response.json());
            console.log('Загружены данные для знаменателя:', znamenatelData);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }
    }

    loadData(); // Вызываем загрузку данных при загрузке страницы

    chislitelForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const day = document.getElementById('chislitel-day').value;
        const lesson1 = {
            time: document.getElementById('chislitel-time1').value,
            lesson: document.getElementById('chislitel-lesson1').value,
            teacher: document.getElementById('chislitel-teacher1').value,
            cab: document.getElementById('chislitel-cabinet1').value,
            link: { link: document.getElementById('chislitel-link1').value, key: '' }
        };
        const lesson2 = {
            time: document.getElementById('chislitel-time2').value,
            lesson: document.getElementById('chislitel-lesson2').value,
            teacher: document.getElementById('chislitel-teacher2').value,
            cab: document.getElementById('chislitel-cabinet2').value,
            link: { link: document.getElementById('chislitel-link2').value, key: '' }
        };
        const dayIndex = chislitelData.findIndex(item => item.name === day);

        if (dayIndex !== -1) {
            chislitelData[dayIndex] = {
                name: day,
                fTime: lesson1.time,
                fLesson: lesson1.lesson,
                fTeacher: lesson1.teacher,
                fCab: lesson1.cab,
                fLink: lesson1.link,
                sTime: lesson2.time,
                sLesson: lesson2.lesson,
                sTeacher: lesson2.teacher,
                sCab: lesson2.cab,
                sLink: lesson2.link,
            };
        } else {
            chislitelData.push({
                name: day,
                fTime: lesson1.time,
                fLesson: lesson1.lesson,
                fTeacher: lesson1.teacher,
                fCab: lesson1.cab,
                fLink: lesson1.link,
                sTime: lesson2.time,
                sLesson: lesson2.lesson,
                sTeacher: lesson2.teacher,
                sCab: lesson2.cab,
                sLink: lesson2.link,
            });
        }
        saveData(chislitelData, 'chislitel');
    });

    znamenatelForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const day = document.getElementById('znamenatel-day').value;
        const lesson1 = {
            time: document.getElementById('znamenatel-time1').value,
            lesson: document.getElementById('znamenatel-lesson1').value,
            teacher: document.getElementById('znamenatel-teacher1').value,
            cab: document.getElementById('znamenatel-cabinet1').value,
            link:  { link: document.getElementById('znamenatel-link1').value, key: '' }
        };
        const lesson2 = {
            time: document.getElementById('znamenatel-time2').value,
            lesson: document.getElementById('znamenatel-lesson2').value,
            teacher: document.getElementById('znamenatel-teacher2').value,
            cab: document.getElementById('znamenatel-cabinet2').value,
            link:  { link: document.getElementById('znamenatel-link2').value, key: '' }
        };

        const dayIndex = znamenatelData.findIndex(item => item.name === day);


        if (dayIndex !== -1) {
            znamenatelData[dayIndex] = {
                name: day,
                fTime: lesson1.time,
                fLesson: lesson1.lesson,
                fTeacher: lesson1.teacher,
                fCab: lesson1.cab,
                fLink: lesson1.link,
                sTime: lesson2.time,
                sLesson: lesson2.lesson,
                sTeacher: lesson2.teacher,
                sCab: lesson2.cab,
                sLink: lesson2.link,
            };
        } else {
            znamenatelData.push({
                name: day,
                fTime: lesson1.time,
                fLesson: lesson1.lesson,
                fTeacher: lesson1.teacher,
                fCab: lesson1.cab,
                fLink: lesson1.link,
                sTime: lesson2.time,
                sLesson: lesson2.lesson,
                sTeacher: lesson2.teacher,
                sCab: lesson2.cab,
                sLink: lesson2.link,
            });
        }
        saveData(znamenatelData, 'znamenatel');
    });


    async function saveData(data, type) {
        try {
            let response;
            if(type === 'chislitel'){
                response = await fetch("https://localhost:7089/Chislitel/update", {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });
            }
            else{
                response = await fetch("https://localhost:7089/Znamenatel/update", {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });
                console.log('Сохранено в Znamenatel.json:', JSON.stringify(data));
            }

            if(response.ok) messageDiv.textContent = 'Данные успешно сохранены!';
            messageDiv.style.border = '1px solid green';
        } catch (error) {
            messageDiv.textContent = 'Произошла ошибка при сохранении данных.';
            messageDiv.style.border = '1px solid red';
            console.error('Ошибка сохранения:', error);
        }
    }

    // Обработчики события change для выпадающих списков
    const chislitelDaySelect = document.getElementById('chislitel-day');
    chislitelDaySelect.addEventListener('change', () => {
        updateChislitelFields(chislitelDaySelect.value);
    });

    const znamenatelDaySelect = document.getElementById('znamenatel-day');
    znamenatelDaySelect.addEventListener('change', () => {
        updateZnamenatelFields(znamenatelDaySelect.value);
    });


    // Функция для обновления полей числителя
    function updateChislitelFields(day) {
        const dayData = chislitelData.find(item => item.name === day);
        if (dayData) {
            document.getElementById('chislitel-time1').value = dayData.fTime || '';
            document.getElementById('chislitel-lesson1').value = dayData.fLesson || '';
            document.getElementById('chislitel-teacher1').value = dayData.fTeacher || '';
            document.getElementById('chislitel-cabinet1').value = dayData.fCab || '';
            document.getElementById('chislitel-link1').value = dayData.fLink.link || '';

            document.getElementById('chislitel-time2').value = dayData.sTime || '';
            document.getElementById('chislitel-lesson2').value = dayData.sLesson || '';
            document.getElementById('chislitel-teacher2').value = dayData.sTeacher || '';
            document.getElementById('chislitel-cabinet2').value = dayData.sCab || '';
            document.getElementById('chislitel-link2').value = dayData.sLink.link || '';
        } else {
            document.getElementById('chislitel-time1').value = '';
            document.getElementById('chislitel-lesson1').value = '';
            document.getElementById('chislitel-teacher1').value = '';
            document.getElementById('chislitel-cabinet1').value = '';
            document.getElementById('chislitel-link1').value = '';

            document.getElementById('chislitel-time2').value = '';
            document.getElementById('chislitel-lesson2').value = '';
            document.getElementById('chislitel-teacher2').value = '';
            document.getElementById('chislitel-cabinet2').value = '';
            document.getElementById('chislitel-link2').value = '';
        }
    }

    // Функция для обновления полей знаменателя
    function updateZnamenatelFields(day) {
        const dayData = znamenatelData.find(item => item.name === day);
        if (dayData) {
            document.getElementById('znamenatel-time1').value = dayData.fTime || '';
            document.getElementById('znamenatel-lesson1').value = dayData.fLesson || '';
            document.getElementById('znamenatel-teacher1').value = dayData.fTeacher || '';
            document.getElementById('znamenatel-cabinet1').value = dayData.fCab || '';
            document.getElementById('znamenatel-link1').value = dayData.fLink.link || '';

            document.getElementById('znamenatel-time2').value = dayData.sTime || '';
            document.getElementById('znamenatel-lesson2').value = dayData.sLesson || '';
            document.getElementById('znamenatel-teacher2').value = dayData.sTeacher || '';
            document.getElementById('znamenatel-cabinet2').value = dayData.sCab || '';
            document.getElementById('znamenatel-link2').value = dayData.sLink.link || '';
        } else {
            document.getElementById('znamenatel-time1').value = '';
            document.getElementById('znamenatel-lesson1').value = '';
            document.getElementById('znamenatel-teacher1').value = '';
            document.getElementById('znamenatel-cabinet1').value = '';
            document.getElementById('znamenatel-link1').value = '';

            document.getElementById('znamenatel-time2').value = '';
            document.getElementById('znamenatel-lesson2').value = '';
            document.getElementById('znamenatel-teacher2').value = '';
            document.getElementById('znamenatel-cabinet2').value = '';
            document.getElementById('znamenatel-link2').value = '';
        }
    }

});