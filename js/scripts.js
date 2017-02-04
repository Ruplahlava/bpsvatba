$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        menu: '#menu',
        anchors: ['uvod', 'info', 'doprava', 'radost', 'pozvanka'],
        responsiveWidth: 900
    });

});
lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
})