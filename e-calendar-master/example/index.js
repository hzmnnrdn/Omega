$(document).ready(function () {
    //$('#calendar').eCalendar();

    //start here
    $('#calendar').eCalendar({url: 'loadCalendar'});


$('#calendar').eCalendar({url: 'loadCalendar',
                          weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                          firstDayOfWeek: 1}); // calendar starting on monday | (0 - 6: week days format)

//With links on the description
$('#calendar').eCalendar({
    events: [
        {
          title: 'Event Title 1',
          description: 'Description 1. Without link',
          datetime: new Date(2018, 9, 20, 17)
        },
        {
          title: 'Event Title 2',
          description: 'Description 2. Only with link opening in the same tab',
          datetime: new Date(2018, 9, 23, 16), 
          url: "https://www.google.com"
        },
        {
          title: 'Event Title 2',
          description: 'Description 3. With link opening on new tab',
          datetime: new Date(2018, 9, 23, 16),
          url: "https://www.google.com",
          url_blank: true
        },
        {
          title: 'Event Title 2',
          description: 'Description 4. Only with link opening in the same tab',
          datetime: new Date(2018, 9, 23, 16),
          url: "https://www.google.com",
          url_blank: false
        }
    ]
});

});
