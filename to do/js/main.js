//**
// Build a to do list:
//
// Unorder List and Listed Items are needed
// <ul>
// <li></li>
// </ul>
// Prevent the page from refreshing every time you are entering in an item in the input sections.
//*


$(document).ready(function(){
  var input = $('#input').val();
  var length = $('#li').length;
  console.log(input);


  // Behavior when add button is clicked
  $('#add').on('click', function(){
    $('#list').append('<li class="new">' + $('input').val() + '</li>');
    length++;
    console.log(length);
    $('#number').html(length);
  })

  // Behavior when clear list button clicked
  $('#clear').on('click', function(){
    $('#list').empty();
    $('#number').html("0");
  })

  // Behavior for when list item is double clicked
  // Text decoration strikethrough
  $('#list').on('click', 'li', function(){
    $(this).toggleClass ('lineThru');
  })

  $('li').find('#list').remove();

  // // Behavior when clear complete is clicked
  //
  // $('#complete').on('click', function(){
  //
  // // Remove li from ul
  //
  //
  // })
  //
  })
