//Copyright (c) 2018 Alexander Lenail
fcnn = FCNN();

function restart() {

    architecture = $('#architecture').find('input[name="numberOfNodes"]').map((i,el) => $(el).val()).get().filter(input => $.isNumeric(input)).map(s => parseInt(s));

    betweenNodesInLayer = $('#architecture').find('input[name="betweenNodesInLayer"]').map((i,el) => parseFloat($(el).val())).get();

    fcnn.redraw({'architecture_':architecture});
    fcnn.redistribute({'betweenNodesInLayer_':betweenNodesInLayer});

    if(fcnn.graph.links.length>=3000){alert('edge의 개수가 3000개 이상일 수 없습니다.'); this.value =1; restart();};

    $('#count span:first').text(fcnn.graph.nodes.length+" nodes " +fcnn.graph.links.length+" edges ")
}

restart();

/////////////////////////////////////////////////////////////////////////////
                ///////    Select Styling    ///////
/////////////////////////////////////////////////////////////////////////////

$("#edgeWidthProportional").change(   function() { fcnn.style({'edgeWidthProportional_': this.checked}) });
$("#edgeWidth").change(               function() { fcnn.style({'edgeWidth_': parseFloat(this.value)}) });
$("#edgeOpacityProportional").change( function() { fcnn.style({'edgeOpacityProportional_': this.checked});
    if (this.checked) { $("#edgeOpacity").prop('disabled', true); }
    else { $("#edgeOpacity").prop('disabled', false); }
});
$("#edgeOpacity").change(             function() { fcnn.style({'edgeOpacity_': parseFloat(this.value)}) });
$("#negativeEdgeColor").change(       function() { fcnn.style({'negativeEdgeColor_': this.value}) });
$("#positiveEdgeColor").change(       function() { fcnn.style({'positiveEdgeColor_': this.value}) });
$("#edgeColorProportional").change(   function() { fcnn.style({'edgeColorProportional_': this.checked}) });
$("#defaultEdgeColor").change(        function() { fcnn.style({'defaultEdgeColor_': this.value}) });
$("#nodeDiameter").change(            function() { fcnn.style({'nodeDiameter_': parseFloat(this.value)}) });
$("#nodeColor").change(               function() { fcnn.style({'nodeColor_': this.value}) });
$("#nodeBorderColor").change(         function() { fcnn.style({'nodeBorderColor_': this.value}) });
$("#betweenLayers").change(           function() { fcnn.redistribute({'betweenLayers_': parseFloat(this.value)}) });
$('#nnDirection input:radio').change( function() { fcnn.redistribute({'nnDirection_': this.value}) });
$("#showBias").change(                function() { fcnn.redraw({'showBias_': this.checked}); fcnn.redistribute(); });
$("#showLabels").change(              function() { fcnn.redraw({'showLabels_': this.checked}) });
$("#showArrowheads").change(          function() { fcnn.style({'showArrowheads_': this.checked}) });
$("#arrowhead input:radio").change(   function() { fcnn.style({'arrowheadStyle_': this.value}) });


/////////////////////////////////////////////////////////////////////////////
                 ///////    Select Architecture    ///////
/////////////////////////////////////////////////////////////////////////////

$(document).on('click', '.btn-add', function(e) {
    e.preventDefault();

    var controlForm = $('#architecture');
    var currentEntry = $(this).parents('.entry:first');
    var newEntry = $(currentEntry.clone()).appendTo(controlForm);

    newEntry.find('input[name="numberOfNodes"]').val('1');
    controlForm.find('.entry:not(:last) .btn-add')
        .removeClass('btn-add').addClass('btn-remove')
        .removeClass('btn-primary').addClass('btn-secondary')
        .html('-');

    restart();

});

$(document).on('click', '.btn-remove', function(e) {
    e.preventDefault();

    $(this).parents('.entry:first').remove();

    restart();

    return false;

});

$(document).on('change', "input[name='numberOfNodes']", restart);

$(document).on('change', "input[name='betweenNodesInLayer']", restart);  // fix this so we only redistribute

$(document).on('click', '#newRandomWeights', function() {
    link = fcnn.link.data([]);
    fcnn.link.exit().remove();
    restart();
});

d3.select("#download").on("click", function() {
    // ga('send', 'event', 'downloadSVG', 'FCNN');

    d3.select(this)
      .attr("href", 'data:application/octet-stream;base64,' + btoa(unescape(encodeURIComponent(d3.select("#graph-container").html()))))
      .attr("download", "nn.svg")
})