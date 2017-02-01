var phrases = ["Yo! I'm Nate!",
              "Currently I am working as a programmer, helping to build airplanes at Boeing.",
              "If you find me at work, I'm probably whipping up C#, Html, SQL or Javascript.",
              "I also enjoy working in Python, modding RaspberryPis, and playing with my dog, Max 🐶"];

var typeLine = function (target, message, index, interval) {
  if (index < message.length) {
    target = target + message[index++];
    setTimeout(function () { typeline(target, message, index, interval); }, interval);
  }
}
function typeLines(lines) {
  for(var i = 0; i < lines.length; i++) {
      typeLine(document.getElementById("words").innerHTML, lines[i], 0, 500);
  }
}
typeLines(phrases)
