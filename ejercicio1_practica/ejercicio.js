$(function() {
    $('[id$=-related-button]').click(function() { // $= (puede ser cualquier valor ahí)
        var related = this.id.split('-')[0]; // this es: "first-related-more" o "second-related-more", etc
        console.log(related);
        $('#' + related + '-related-more').siblings().hide(); // oculto a sus hijos
        $('#' + related + '-related-more').show(150); // parametro: tiempo que se demora en mostrar
    });

    $('[id$=-hide-button]').click(function() { //misma idea pero para ocultar.
        var related = this.id.split('-')[0];
        $('#' + related + '-related-more').hide(200);
    });
});