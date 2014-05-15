// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.ui.all
//= require_tree .


function loadModal(modalTarget) {
  return function(evt) {
    evt.preventDefault();
    return $("#modal").load(modalTarget).dialog({
      modal: true,
      draggable: false,
      resizeable: false,
      width: 500,
      title: null
    });
  }
}


var modal;
function closeModal() { modal.dialog('close') }
$(document).ready(function() {
  $('#login').click(loadModal('/signin'));
  $('.tea-time-scheduling').on('click', function(evt) {
    modal = loadModal(evt.currentTarget.href)(evt)
  })
  $('input.cancel').on('click', function(evt) {
    evt.preventDefault();
    closeModal();
  })
})