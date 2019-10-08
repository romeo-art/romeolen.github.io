var topic = "romeo/fan/status";

$(document).ready(function () {
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");

  document.getElementById('one').addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById('state').innerHTML = "The fan is currently at 1";
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    client.subscribe(topic);
    client.publish(topic, "The fan is currently at 1 " + time);
  })

  document.getElementById('two').addEventListener("click", function (e) {
    e.preventDefault();
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('state').innerHTML = "The fan is currently at 2";
    client.subscribe(topic);
    client.publish(topic, "The fan is currently at 2 " + time);
  })

  document.getElementById('three').addEventListener("click", function (e) {
    e.preventDefault();
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('state').innerHTML = "The fan is currently at 3";
    client.subscribe(topic);
    client.publish(topic, "The fan is currently at 3 " + time);
  })

  document.getElementById('off').addEventListener("click", function (e) {
    e.preventDefault();
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('state').innerHTML = "The fan is currently off";
    client.subscribe(topic);
    client.publish(topic, "The fan is currently turn off" + time);
  })
})


