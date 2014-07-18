<?php

include_once('header.php');

?>

<div style="text-align: center">

    <h1>Random BJCP Style</h1>

    <div id="results" style="margin-bottom: 40px"></div>

    <a id="run" class="btn btn-primary btn-lg">Select a different random style</a>
</div>


<script type="text/javascript">
    var styles = [];
    var globaldata;

$(function() {
    var result = $('#results');
    result.html('<i class="fa fa-circle-o-notch fa-spin"></i>');

    $.ajax({
        type: 'GET',
        url: 'assets/data/style-data.min.json',
        dataType: 'json',
    }).fail(function(jqXHR) {
        alert('Error: (' + jqXHR.status + ') ' + jqXHR.statusText);
    }).done(function(data) {
        globaldata = data;

        $.each(data.Beer, function( index, value ) {
            if(value.subcategory) {
                $.each(value.subcategory, function(sub_index, sub_value) {

                    styles.push(value.number + sub_value.letter + ' - ' + sub_value.name);

                });
            } else {
                styles.push(value.number + ' - ' + value.name);
            }
        });
        pick_random();
    });

    $('#run').click(function() {
        pick_random();
    });
});

function pick_random() {
    var item = styles[Math.floor(Math.random()*styles.length)];
    $('#results').html(item);
}
</script>

<?php
include_once('footer.php');
