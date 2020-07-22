$('form').each(function() {
    if (!$(this).is('[action]')) {
        $(this).attr('action', '/');
    }
});