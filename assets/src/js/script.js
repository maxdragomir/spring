
$(document).ready(function(){

    //hide modal
    $('.hide-window').on('click', function () {
        $('body').toggleClass('overflow-auto');
        $(this).parents('.modal.open').toggleClass('modal-hide');
        $(this).parents('.modal.open').next().toggleClass('new-overlay');
    });


    $('.card-title_printer-btn').on('click', function () {
       $(this).next().toggleClass('show');
       $(this).toggleClass('show');
    });

    //under construction
    $('.under-construction-page').addClass('active');

    $('.card-filters label').addClass('show-label');

    //clear filters and animate icon
    $('.card-button').on('click', '.clear-btn', function () {

        var el = $('.clear-btn i').clone().removeClass('active');
        $('.clear-btn i').remove();
        $('.clear-btn').append(el);
        el.addClass('active');

    }).on('click', '.search-btn', function () {

        var el = $('.search-btn i').clone().removeClass('active');
        $('.search-btn i').remove();
        $('.search-btn').append(el);
        el.addClass('active');

    });

    // btn cancel
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

    // btn delete
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

    //modal close
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

//Materialize func ------------

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


    $('.materialboxed').materialbox();

    $('.dropdown-trigger').dropdown();
    $('.dropdown-trigger-right').dropdown({
        alignment: 'right'
    });

    $('select').formSelect({
        dropdownOptions: {
            // container: '.card'
            // hover: true,
            // autoTrigger: false
            // closeOnClick: false
        }
    });

    $('.tooltipped').tooltip({
        margin: -5,
        transitionMovement: 10
    });

    $('.collapsible').collapsible({
        accordion: true
    });

    $('.sidenav').sidenav({
        edge: 'right',
        onOpenEnd: function () {
            $('.sidebar_bg').addClass('open');
        },
        onCloseStart: function () {
            $('.sidebar_bg').removeClass('open');
        }
    });

    $('input[class*="timepicker-"]').timepicker({
        vibrate: true,
        twelveHour: false,
        autoClose: true,
        showClearBtn: true
    });

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

    // addPikadayRange(tmp['s_date1'],tmp['s_date2']);

});

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











//OLD PICKERS
var W=window,
    D=W.document,
    tmp=D.forms['SearchForm'].elements;


function getEl(el) {
    return (typeof(el)=='string') ? D.getElementById(el) : el;
}


function addPikaday(el,onSelectCallback) {
    el=getEl(el);

    el.x_pikaday=new Pikaday({
        'field' : el,
        'firstDay' : 1,
        'onSelect' : (onSelectCallback || null)
    });
}

function addPikadayRange(el1,el2) {
    el1=getEl(el1);
    el2=getEl(el2);

    var onSelectCallback=function () {
        var p1=el1.x_pikaday,
            p2=el2.x_pikaday,
            d1=p1.getDate(),
            d2=p2.getDate();
        p1.setStartRange(d1);
        p1.setEndRange(d2);
        p1.setMaxDate(d2 || new Date('9999-12-31 12:00:00'));
        p2.setStartRange(d1);
        p2.setEndRange(d2);
        p2.setMinDate(d1 || new Date('0001-01-01 12:00:00'));
    };
    addPikaday(el1,onSelectCallback);
    addPikaday(el2,onSelectCallback);
    onSelectCallback();
}

