const socketio = io();
const form = document.getElementById("form");
const input = document.getElementById("msg");
const chats = document.getElementById("chats");

form.addEventListener('submit', function(event){
  if(input.value!==''){
    socketio.emit('message', msg);
    input.value='';
  }
    
  event.preventDefault();
})

socketio.on('message',function(msg){
  displayMessage(msg);
});

