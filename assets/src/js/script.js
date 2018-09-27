
$(document).ready(function() {

    //logs url
    $('.btn-var').on('click', function () {
        $(this).parents('.row').find('.var-block').toggleClass('show');
        $(this).children('.fa-angle-down').toggleClass('show');
    });


    // toggle tooltip status
    $.each($('.switch-active'), function() {

        let switchBtn = $(this),
            switchInput = $(this).find('input');

        if(switchInput.prop('checked')) {
            switchBtn.data('tooltip', 'Deactivate');
            switchBtn.attr('data-tooltip', 'Deactivate');
        } else {
            switchBtn.data('tooltip', 'Activate');
            switchBtn.attr('data-tooltip', 'Activate');
        }

        $('.switch-active').on('click', function () {

            if(switchInput.prop('checked')) {
                switchBtn.data('tooltip', 'Deactivate');
                switchBtn.attr('data-tooltip', 'Deactivate');
            } else {
                switchBtn.data('tooltip', 'Activate');
                switchBtn.attr('data-tooltip', 'Activate');
            }

            $(this).tooltip('close');

        });

    });


    // user type
    $('#user-type').on('change', function () {
        let selectUser = $('select#user-type').val();

        if(selectUser === '11') {
            $('.type-hide').removeClass('show');
            $('.type-shipper').addClass('show');
        } else if(selectUser === '21') {
            $('.type-hide').removeClass('show');
            $('.type-carrier').addClass('show');
        } else if(selectUser === '4') {
            $('.type-hide').removeClass('show');
            $('.type-hubsuper').addClass('show');
        } else if(selectUser === '5') {
            $('.type-hide').removeClass('show');
            $('.type-hubwork').addClass('show');
        } else if(selectUser === '7') {
            $('.type-hide').removeClass('show');
            $('.type-client').addClass('show');
        } else if(selectUser === '22') {
            $('.type-hide').removeClass('show');
            $('.type-sales').addClass('show');
        } else if(selectUser === '1') {
            $('.type-hide').removeClass('show');
            $('.type-admin').addClass('show');
        } else {
            $('.type-hide').removeClass('show');
        }
    });


    //insert code in input
    $('.var-content').on('click', 'a', function () {
        let text, $input, caretPos, inputVal, txtToAdd;

        text = $(this).text();
        $input = $('#url');

        caretPos = $input[0].selectionStart;
        inputVal = $input.val();
        txtToAdd = text;

        $input.val(inputVal.substring(0, caretPos) + " " + txtToAdd + " " + inputVal.substring(caretPos) );

        $input.next().addClass('active');

    });


    //open original data
    $('.original-btn').on('click', function () {
        $(this).parents('.card-modal').children('.original-data').toggleClass('active');
        $(this).toggleClass('active');
    });

    //original data close btn
    $('.original-close').on('click', function () {
        $(this).parents('.card-modal').children('.original-data').toggleClass('active');
        $(this).parents('.card-modal').find('.original-btn').toggleClass('active');
    });


    //dump logs
    $('.btn-source').on('click', function () {
        $(this).parents('.row').find('.block-source').toggleClass('show');
        $(this).children('.fa-angle-down').toggleClass('show');
    });

    //audit logs
    $('.btn-audit').on('click', function () {
        $(this).parents('.row').find('.block-audit').toggleClass('show');
        $(this).children('.fa-angle-down').toggleClass('show');
    });


    //additionally inputs for some country
    $('.country-dop').on('change', function () {
        let selectUser = $(this).val();

        if (selectUser === 'AX') {
            $('.dop-fields').slideDown();
        } else {
            $('.dop-fields').slideUp();
        }
    });


    //hide modal
    $('.hide-window').on('click', function () {
        $('body').toggleClass('overflow-auto');
        $(this).parents('.modal.open').toggleClass('modal-hide');
        $(this).parents('.modal.open').next().toggleClass('new-overlay');
    });


    //under construction
    $('.under-construction-page').addClass('active');


    //animate filter icon
    $('.card-button > .btn').on('click', function () {
        let el, $btnIcon = $(this).find('i');

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

            } else if (text !== undefined) {
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
                return '<div class="press-scale">' + escape(data.text) + '</div>';
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
    $('.iframe-add .products_var').remove();


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