
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

    $('input[class*="timepicker-"]').timepicker({
        vibrate: true,
        twelveHour: false,
        autoClose: true,
        showClearBtn: true
    });

    $('input[class*="datepicker-"]').datepicker({
        showDaysInNextAndPreviousMonths: true,
        showMonthAfterYear: true,
        firstDay: 1,
        selectMonths: true,
        autoClose: true,
        selectYears: 50,
        showClearBtn: true,
        format: 'yyyy/mmm/dd',
        // minDate: '2018/3/20',
       // maxDate: 2018/Aug/18,
        onSelect: function () {

            // var d1 = $('#date-start').val();
            // var d2 = $('#date-end').val();
            //
            // var date1 = new Date(d1);
            // var date2 = new Date(d2);
        },
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

});

