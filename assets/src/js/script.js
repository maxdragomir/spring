
$(document).ready(function(){

    //test
    // ScrollReveal().reveal('.page-title', { duration: 2000 });
    ScrollReveal().reveal('table tbody tr', { interval: 200, distance: '50px' });

    //hide modal
    $('.hide-window').on('click', function () {
        $('body').toggleClass('overflow-auto');
        $(this).parents('.modal.open').toggleClass('modal-hide');
        $(this).parents('.modal.open').next().toggleClass('new-overlay');
    });


    //under construction
    $('.under-construction-page').addClass('active');


    //animate filter icon
    $('.card-button').on('click', '.clear-btn', function () {
        let el, $btnIcon = $('.clear-btn i');

        el = $btnIcon.clone().removeClass('active');
        $btnIcon.remove();
        $(this).append(el);
        el.addClass('active');

    }).on('click', '.search-btn', function () {
        let el, $btnIcon = $('.search-btn i');

        el = $btnIcon.clone().removeClass('active');
        $btnIcon.remove();
        $(this).append(el);
        el.addClass('active');

    }).on('click', '.other-btn', function () {
        let el, $btnIcon = $('.other-btn i');

        el = $btnIcon.clone().removeClass('active');
        $btnIcon.remove();
        $(this).append(el);
        el.addClass('active');

    }).on('click', '.delivery-download', function () {
        let el, $btnIcon = $('.delivery-download i');

        el = $btnIcon.clone().removeClass('active');
        $btnIcon.remove();
        $(this).append(el);
        el.addClass('active');

    });


    //btn cancel table row
    $('.btn-cancel').on('click', function () {
        swal({
            title: 'Are you sure?',
            type: 'warning',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            confirmButtonClass: 'waves-effect',
            cancelButtonClass: 'waves-effect',
            showCancelButton: true,
        })
    });


    //btn delete table row
    $('.btn-delete').on('click', function () {

        (async function getText () {
            const {value: text} = await swal({
                title: 'Are you sure?',
                text: 'Type \' Y \' to confirm',
                type: 'warning',
                input: 'text',
                showCancelButton: true,
                inputAttributes: {
                    autocapitalize: 'off'
                },
                inputValidator: (value) => {
                    return !value && 'You need to write something!'
                }
            });
            if (text === 'Y' || text === 'y') {
                swal({
                    type: 'success',
                    title: 'Okay',
                    text: 'You write: ' + text,
                })

            } else if (text === undefined) {
                return;
            } else {
                swal({
                    type: 'error',
                    title: 'Nope',
                    text: 'You write: ' + text,
                })
            }

        })()

    });


    //log out
    $('.log-out').on('click', function (e) {
        e.preventDefault();

        swal({
            title: 'Are you sure?',
            type: 'warning',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            confirmButtonClass: 'waves-effect',
            cancelButtonClass: 'waves-effect',
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                location.href = 'login.html';
            }
        })

    });


    //multi-tags
    $('.multi-tags').selectize({
        maxItems: 1000,
        plugins: ['remove_button'],
        persist: false,
        create: false,
        render: {
            item: function(data, escape) {
                return '<div>' + escape(data.text) + '</div>';
            }
        }
    });


    //products
    $('#list-products').addInputArea({
        area_var: '.products_var',
        btn_add: '.products_add',
        btn_del: '.products_remove',
        maximum : 20,
        after_add: function () {
            $('select').formSelect();
            $('.tooltipped').tooltip({
                margin: -5,
                transitionMovement: 10
            });
        }
    });
    $('#add .products_var').remove();


    //csv tabs
    $('.csv-file').hide();
    $('.csv-file.active').show();

    $('.file-btn').on('click', function () {
        $('.csv-btn').removeClass('active');
        $(this).addClass('active');
        $('#file-block').addClass('active').slideDown();
        $('#url-block').removeClass('active').slideUp();
        $('#content-block').removeClass('active').slideUp();
    });

    $('.url-btn').on('click', function () {
        $('.csv-btn').removeClass('active');
        $(this).addClass('active');
        $('#file-block').removeClass('active').slideUp();
        $('#url-block').addClass('active').slideDown();
        $('#content-block').removeClass('active').slideUp();
    });

    $('.content-btn').on('click', function () {
        $('.csv-btn').removeClass('active');
        $(this).addClass('active');
        $('#file-block').removeClass('active').slideUp();
        $('#url-block').removeClass('active').slideUp();
        $('#content-block').addClass('active').slideDown();
    });


    //modal edit or modal add close
    $('.modal-ask-close').on('click', function () {
        swal({
            title: 'Are you sure?',
            text: 'If you bla bla bla bla',
            type: 'warning',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            confirmButtonClass: 'waves-effect',
            cancelButtonClass: 'waves-effect',
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
                $('.modal-style').modal('close');
                $('.modal-overlay').removeClass('new-overlay');
            }
        })
    });


//Materialize func ---------------------------------------------


    //modal
    $('.modal-style').modal({
        dismissible: false,
        onCloseEnd: function(){
            $('body').removeClass('overflow-auto');
            $('.modal-style').removeClass('modal-hide');
        },
        onCloseStart: function(){
            $('.modal-overlay').removeClass('new-overlay');

        }
    });


    //dropdown
    $('.dropdown-trigger').dropdown();
    $('.dropdown-trigger-right').dropdown({
        alignment: 'right'
    });


    //select
    $('select').formSelect();


    //tooltip
    $('.tooltipped').tooltip({
        margin: -5,
        transitionMovement: 10
    });


    //collaps in mobile
    $('.collapsible').collapsible({
        accordion: true
    });


    //sidenav mobile
    $('.sidenav').sidenav({
        edge: 'right',
        onOpenEnd: function () {
            $('.sidebar_bg').addClass('open');
            setTimeout(function () {
                $('.sidebar_bg span').addClass('open');
            }, 10000);
        },
        onCloseStart: function () {
            $('.sidebar_bg').removeClass('open');
            $('.sidebar_bg span').removeClass('open');
        }
    });


    //timepicker
    $('input[class*="timepicker-"]').timepicker({
        vibrate: true,
        twelveHour: false,
        autoClose: true,
        showClearBtn: true
    });


    //datepicker
    $('#date-start').rangePicker('#date-end', {
        showDaysInNextAndPreviousMonths: true,
        showMonthAfterYear: true,
        firstDay: 1,
        selectMonths: true,
        autoClose: true,
        selectYears: 50,
        showClearBtn: true,
        format: 'yyyy/mmm/dd',
    });

});


//rangePicker
$.fn.rangePicker = function(pickerTo, options) {
    let from = $(this),
        to = $(pickerTo);

    if(options['onSelect'] === undefined) {
        options['onSelect'] = () => {
            let instanceFrom = M.Datepicker.getInstance(from),
                instanceTo = M.Datepicker.getInstance(to);

            if (instanceFrom.date) {
                instanceTo.options.minDate = instanceFrom.date;
            }

            if (instanceTo.date) {
                instanceFrom.options.maxDate = instanceTo.date;
            }
        }
    }

    $(to).datepicker(options);
    $(from).datepicker(options);
};