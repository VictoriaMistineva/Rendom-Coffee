const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export const weekdays = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота"
];

export const shortNameDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const monthsNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const getDateTitle = (date = new Date()) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${
    days[date.getDay()]
  }`;
};

export const getMonthTitle = (date = new Date()) => {
  return `${monthsNames[date.getMonth()]}`;
};

export const getDateString = (year, month, day) =>
  `${day >= 10 ? day : `0${day}`}.${month >= 10 ? month : `0${month}`}.${year}`;

export const getWeekDays = (currentDate) => {
  const date = new Date(currentDate);
  const week = [];
  const weekDay = date.getDay();

  date.setDate(date.getDate() - (weekDay === 0 ? 7 : weekDay));

  for (let i = 0; i < 7; i += 1) {
    date.setDate(date.getDate() + 1);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    week.push({
      day: shortNameDays[i],
      daysFull: days[i],
      months: months[month + 1],
      months2: months[month],
      number: day,
      string: getDateString(year, month + 1, day),
    });
  }
  return week;
};

export const getDateMeetInfo = (date) => {
  
  
  const modifedDate = date.split('.').map((el) => Number(el));
  const inputDate = new Date(modifedDate[2], modifedDate[1] - 1, modifedDate[0]);
  const dayOfWeek = days[inputDate.getDay()];
  return `${modifedDate[0]} ${
    months[modifedDate[1] - 1]
  } ${new Date().getFullYear()}, ${dayOfWeek}`;
};

export const getMonthLength = (date) => {
  const newDate = new Date(date.getFullYear(), date.getMonth(), 32);
  return 32 - newDate.getDate();
};

export const parseAssistantDate = (dateString) => {
  const dateValues = dateString.split('.').reverse();
  if (dateValues[1]) dateValues[1] -= 1;
  const date = new Date(...dateValues);
  if (isNaN(+date)) return new Date();
  return date;
};
