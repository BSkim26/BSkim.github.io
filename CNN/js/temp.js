lenet = LeNet();

function restart() {

    architecture = $('#architecture').find('.entry').map((i,el) =>
        _.object(['numberOfSquares','squareHeight','squareWidth','filterHeight','filterWidth', 'op', 'layer'],
                 $(el).find('input[type="number"]').map((j,input) => parseFloat($(input).val())).get().concat([$(el).find('input[type="text"]').val(), i]))
        ).get()
         .filter(layer => Object.values(layer).every(val => !_.isNaN(val)));

    betweenLayers = $('#architecture').find('input[type="range"]').map((i,el) => $(el).val()).get().filter(input => $.isNumeric(input)).map(s => parseInt(s)); betweenLayers.pop();

    architecture2 = $('#architecture2').find('input').map((i,el) => $(el).val()).get().filter(input => $.isNumeric(input)).map(s => parseInt(s));

    lenet.redraw({'architecture_':architecture, 'architecture2_':architecture2});
    lenet.redistribute({'betweenLayers_':betweenLayers});

}

restart();

/////////////////////////////////////////////////////////////////////////////
                ///////    Select Styling    ///////
/////////////////////////////////////////////////////////////////////////////

$("#color1").change(         function () { lenet.style({'color1_': this.value}); });
$("#color2").change(         function () { lenet.style({'color2_': this.value}); });
$("#borderWidth").change(    function () { lenet.style({'borderWidth_': parseFloat(this.value)}); });
$("#rectOpacity").change(    function () { lenet.style({'rectOpacity_': parseFloat(this.value)}); });
$("#betweenSquares").change( function () { lenet.redistribute({'betweenSquares_': parseFloat(this.value)}); });
$("#showLabels").change(     function () { lenet.style({'showLabels_': this.checked}); });

$("input[name='spacing']").change(function() {
    betweenLayers = $('#architecture').find('input[type="range"]').map((i,el) => $(el).val()).get().filter(input => $.isNumeric(input)).map(s => parseInt(s)); betweenLayers.pop();
    lenet.redistribute({'betweenLayers_':betweenLayers});
});


/////////////////////////////////////////////////////////////////////////////
                 ///////    Select Architecture    ///////
/////////////////////////////////////////////////////////////////////////////


$(document).on('click', '#architecture .btn-add', function(e) {
    e.preventDefault();

    var controlForm = $('#architecture');
    var currentEntry = $(this).parents('.entry:first');
    var newEntry = $(currentEntry.clone()).appendTo(controlForm);

    newEntry.find('input').val('');
    controlForm.find('.entry:not(:last) .btn-add')
        .removeClass('btn-add').addClass('btn-remove')
        .removeClass('btn-primary').addClass('btn-secondary')
        .html('<span class="fa fa-minus"></span>');

    restart();

});

$(document).on('click', '#architecture .btn-remove', function(e) {
    e.preventDefault();

    $(this).parents('.entry:first').remove();

    restart();

    return false;

});

$(document).on('click', '#architecture2 .btn-add', function(e) {
    e.preventDefault();

    var controlForm = $('#architecture2');
    var currentEntry = $(this).parents('.entry:first');
    var newEntry = $(currentEntry.clone()).appendTo(controlForm);

    newEntry.find('input').val('');
    controlForm.find('.entry:not(:last) .btn-add')
        .removeClass('btn-add').addClass('btn-remove')
        .removeClass('btn-primary').addClass('btn-secondary')
        .html('<span class="fa fa-minus"></span>');

    restart();

});

$(document).on('click', '#architecture2 .btn-remove', function(e) {
    e.preventDefault();

    $(this).parents('.entry:first').remove();

    restart();

    return false;

});

$(document).on('change', 'input[type="number"]', function(e) {
    e.preventDefault();

    restart();  // TODO only fire if the whole row is filled.

});

$(document).on('change', 'input[type="text"]', function(e) {
    e.preventDefault();

    restart();
});


d3.select("#download").on("click", function() {
    // ga('send', 'event', 'downloadSVG', 'LeNet');

    d3.select(this)
      .attr("href", 'data:application/octet-stream;base64,' + btoa(unescape(encodeURIComponent(d3.select("#graph-container").html()))))
      .attr("download", "nn.svg")
});