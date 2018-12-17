$(document).ready(function () {
    $('#calendar').eCalendar();

    $('#calendar').eCalendar({
    events: [
        {
          title: 'Event Title 1',
          description: 'Description 1. Without link',
          datetime: new Date(2018, 0, 20, 17)
        },
        {
          title: 'Event Title 2',
          description: 'Description 2. Only with link opening in the same tab',
          datetime: new Date(2018, 1, 23, 16),
          url: "https://www.google.com"
        },
        {
          title: 'Event Title 2',
          description: 'Description 3. With link opening on new tab',
          datetime: new Date(2018, 11, 23, 16),
          url: "https://www.google.com",
          url_blank: true
        },
        {
          title: 'Event Title 2',
          description: 'Description 4. Only with link opening in the same tab',
          datetime: new Date(2018, 10, 23, 16), 
          url: "https://www.google.com",
          url_blank: false
        }
    ]
});
});
