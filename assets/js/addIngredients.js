import $ from 'jquery';

// setup an "add a tag" link
var $addTagLink = $('<a href="#" class="btn btn-outline-success">Add ingredient</a>');
var $newLinkLi = $('<a></a>').append($addTagLink);

$(document).ready(function() {
    // Get the div that holds the collection of tags
    var $collectionHolder = $('div.ingredients-list');

    // add the "add a tag" anchor and li to the tags ul
    $collectionHolder.append($newLinkLi);

    // count the current form inputs we have (e.g. 2), use that as the new
    // index when inserting a new item (e.g. 2)
    $collectionHolder.data('index', $collectionHolder.find(':input').length);

    //add remove button to existing items
    $collectionHolder.find('.panel').each(function () {
        addRemoveButton($(this));
    })

    $addTagLink.on('click', function(e) {
        // prevent the link from creating a "#" on the URL
        e.preventDefault();

        // add a new tag form (see code block below)
        addTagForm($collectionHolder, $newLinkLi);
    });


});

function addTagForm($collectionHolder, $newLinkLi) {
    // Get the data-prototype explained earlier
    var prototype = $collectionHolder.data('prototype');

    // get the new index
    var index = $collectionHolder.data('index');

    // Replace '$$name$$' in the prototype's HTML to
    // instead be a number based on how many items we have
    var newForm = prototype.replace(/__name__/g, index);

    // increase the index with one for the next item
    $collectionHolder.data('index', index + 1);

    // Display the form in the page in an li, before the "Add a tag" link li
    //create the card
    var $panel = $('<div class="panel card mb-3"><div class="card-header">New ingredient</div></div>');
    var $newFormLi = $('<div class="card-body"></div>').append(newForm);
    //append the body to the panel
    $panel.append($newFormLi);

    //append the remove button to the new panel
    addRemoveButton($panel);

    $newLinkLi.before($panel);
}

//remove them

function addRemoveButton ($panel){
    //add remove button
    var $removeButton = $('<a href="#" class="btn btn-outline-danger">Delete</a>');
    //appending the remove button to the panel footer
    var $panelFooter = $('<div class="card-footer"></div>').append($removeButton);

    //handle the click event on the remove button
    $removeButton.click(function (e){
        e.preventDefault();
        $(e.target).parents('.panel').slideUp(1000, function () {
            $(this).remove();
        });
    });

    //append the footer to the panel
    $panel.append($panelFooter);
}