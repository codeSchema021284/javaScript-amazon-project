  import iSatSun from './day.js';

    // Test the isWeekend function with a few different dates.
    let date = dayjs();
    console.log(date.format('dddd, MMMM D'));
    console.log(iSatSun(date));

    date = dayjs().add(2, 'day');
    console.log(date.format('dddd, MMMM D'));
    console.log(iSatSun(date));