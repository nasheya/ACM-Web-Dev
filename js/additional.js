$(document).ready(function(){
    $(".clickable").click(function(){
        $(".slider").slideToggle("slow", "swing");
    });
});

// row.child(format(row.data())).show();
// tr.addClass('shown');

// $('div.slider', row.child()).slideDown();

// $('#my_table > tbody > tr.my_row')
//  .find('td')
//  .wrapInner('<div style="display: block;" />')
//  .parent()
//  .find('td > div')
//  .slideUp(700, function(){

//   $(this).parent().parent().remove();

//  });




//  $("tr").click(function(){
//          $('#my_table > tbody > tr.my_row')
//  .find('td')
//  .wrapInner('<div style="display: none;" />')
//  .parent()
//  .find('td > div')
//  .slideDown(700, function(){

//   var $set = $(this);
//   $set.replaceWith($set.contents());

//  });
//     });