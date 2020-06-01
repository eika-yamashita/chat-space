$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `
         <div class="chat-main__message-list">
           <div class="message__info-taker">
             ${message.user_name}
           </div>
           <div class="message__info-date">
             ${message.created_at}
           </div>
         </div>
         <div class="message__text">
           <p class="lower-message__content">
             ${message.text}
           </p>
         </div>
         <img src=${message.image} >
       `
     return html;
   } else {
     var html =
      `
         <div class="chat-main__message-list">
           <div class="message__info-taker">
             ${message.user_name}
           </div>
           <div class="message__info-date">
             ${message.created_at}
           </div>
         </div>
         <div class="message__text">
           <p class="lower-message__content">
             ${message.text}
           </p>
         </div>
       `
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__message-lists').append(html);
    $('form')[0].reset();
    $('.chat-main__message-lists').animate({ scrollTop: $('.chat-main__message-lists')[0].scrollHeight});
    $('.submit-btn').prop('disabled', false);
  })
  .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
})
});