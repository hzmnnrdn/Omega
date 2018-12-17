$(document).ready(function () {
    //$('#calendar').eCalendar();

    $('#calendar').eCalendar({
    events: [
        {
          title: 'Save Life',
          description: 'Darul Hikmah Library, IIUM Gombak',
          datetime: new Date(2019, 0, 6, 8)
        },
        {
          title: 'Donate save soul',
          description: 'Masjid Sultan Ahmad Shah, IIUM Gombak',
          datetime: new Date(2018, 11, 23, 9),
          /*url: "https://www.google.com"*/
        },
        {
          title: 'Kempen Derma Darah 2.0',
          description: 'LRT Masjid Jamek',
          datetime: new Date(2018, 11, 23, 9),
//           url: "https://www.google.com",
//           url_blank: true
        },
        {
          title: 'Ayuh Selamatkan Nyawa',
          description: 'Dewan UniKL',
          datetime: new Date(2019, 2, 23, 8), 
//           url: "https://www.google.com",
//           url_blank: false
        },
        {
          title: 'Blood Donation Campaign',
          description: 'KLCC',
          datetime: new Date(2019, 0, 20, 8)
        },
        {
          title: 'Donation for Blood Bank',
          description: 'Al Malik Faisal Hall',
          datetime: new Date(2019, 0, 20, 9)
        },
        {
          title: 'PPUM Kempen Derma Darah',
          description: 'Surau Mahallah Abu Bakar',
          datetime: new Date(2019, 1, 25, 9)
        },
        {
          title: 'Blood Donation Campaign 2.0',
          description: 'KLCC',
          datetime: new Date(2019, 1, 20, 10)
        },
        {
          title: 'Kempen Derma Darah',
          description: 'Klinik Uia',
          datetime: new Date(2019, 2, 5, 8)
        },
        {
          title: 'Kempen Derma Darah',
          description: 'Klinik Uia',
          datetime: new Date(2019, 2, 6, 8)
        },
        {
          title: 'Life Savior',
          description: 'CAC IIUM Gombak',
          datetime: new Date(2019, 2, 17, 9)
        },
        {
          title: 'Life Savior',
          description: 'CAC IIUM Gombak',
          datetime: new Date(2019, 2, 18, 9)
        },
        {
          title: 'Life Savior',
          description: 'CAC IIUM Gombak',
          datetime: new Date(2019, 2, 19, 9)
        }
    ] 
    });
});
