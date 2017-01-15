$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        menu: '#menu',
        anchors: ['uvod', 'info', 'doprava', 'pozvanka', 'radost'],
        navigation: true,
        responsiveWidth: 900
    });

});
lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
})