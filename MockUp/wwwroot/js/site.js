$(document).ready(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next agendaDay,agendaWeek,month '
        },

        dayClick: function (date, jsEvent, view) {

            $('#calendar').fullCalendar('gotoDate', date);
            $('#calendar').fullCalendar('changeView', 'agendaDay');

        },


        minTime: "07:00:00",
        maxTime: "21:00:00",
        slotLabelFormat: "HH:mm",

        selectable: true,
        selectHelper: true,




        defaultView: 'agendaWeek',
        height: 740,
        firstDay: 1,


        eventClick: function (event, jsEvent, view) {

            $('#modalTitle').html(event.title);
            $('#modalAssignment').html(event.assignment);



        },

        eventDragStart: function (event, jsEvent, view) {
            $('#calendar').bind('touchmove', function (e) { e.preventDefault() })
        },
        eventDragStop: function (event, jsEvent, view) {
            $('#calendar').unbind('touchmove')
        },
        eventResizeStart: function (event, jsEvent, view) {
            $('#calendar').bind('touchmove', function (e) { e.preventDefault() })
        },
        eventResizeStop: function (event, jsEvent, view) {
            $('#calendar').unbind('touchmove')
        },



        events: [
            {
                title: 'Development',
                assignment: 'BackEnd',
                start: '2017-08-04 09:00',
                end: '2017-08-04 11:00',

            },
            {
                title: 'GUI',
                assignment: 'BackEnd',
                start: '2017-08-04 11:30',
                end: '2017-08-04 16:00',

            },
            {
                title: 'Development',
                assignment: 'BackEnd',
                start: '2017-08-03 09:00',
                end: '2017-08-03 18:00',

            },
            {
                title: 'GUI',
                assignment: 'BackEnd',
                start: '2017-08-02 09:00',
                end: '2017-08-02 14:00',

            },
            {
                title: 'GUI',
                assignment: 'BackEnd',
                start: '2017-08-02 14:15',
                end: '2017-08-02 18:00',

            },
            {
                title: 'Business',
                assignment: 'BackEnd',
                start: '2017-08-01 09:15',
                end: '2017-08-01 15:00',

            },

            ]

    })

});


$(document).ready(function () {
    
    $(".teammates").select2();
});

$(document).ready(function () {
    $(".assignment").select2();
});