$(document).ready(function () {



    $('#calendar').fullCalendar({
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next, agendaWeek, month, add_event, listDay'
        },

        dayClick: function (date, jsEvent, view) {

            $('#calendar').fullCalendar('gotoDate', date);
            $('#calendar').fullCalendar('changeView', 'agendaDay');

        },


        customButtons: {
            add_event: {
                text: 'Day',
                click: function () {

                    $("#week").hide();
                    $("#day").show();


                }
            }
        },

        minTime: "07:00:00",
        maxTime: "21:00:00",
        slotLabelFormat: "HH:mm",

        selectable: true,
        selectHelper: true,
        editable: true,




        defaultView: 'agendaWeek',
        height: 735,
        firstDay: 1,


        eventClick: function (event, jsEvent, view) {

            $('#modalTitle').html(event.title);
            $('#modalAssignment').html(event.assignment);




        },
        //theme: true,


        slotEventOverlap: false,
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
    //$('.fc-button').removeClass('.fc-state-active');
    $('.fc-button').addClass('test');
    //$('.fc-button').addClass('btn btn-info').appendTo('.fc-header-right').append('fc-Buttons');




});




$(document).ready(function () {

    $(".teammates").select2({
        placeholder: 'Choose a Label',
    });


});

$(document).ready(function () {
    $(".assignment").select2({
        placeholder: 'Choose a Label',
    });
});


$(document).ready(function () {

    $(".projects").select2();

});

$(document).ready(function () {

    $(".label").select2({
        placeholder: 'Choose Label',
    });

});


