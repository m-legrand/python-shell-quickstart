var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  scriptPath: './python_scripts'
};

function jsc(o1, o2) {
  var res = mObj=JSON.parse(JSON.stringify(o1));;
  for (var key in o2) {
    res[key] = o2[key];
  }
  return res;
}

// Hello world !

new PythonShell('hello.py', options)
  .on('message', function (message) {
    console.log(message);
  });

// Waiter

new PythonShell('wait.py', jsc(options, {
  args: ['1...', '2...', '3...', "Soleil !"]
}))
  .on('message', function (message) {
    console.log(message);
  });

// Repeater

new PythonShell('repeat.py', jsc(options, {
  args: ['1...', '2...', '3...', "Soleil !"]
}))
  .on('message', function (message) {
    if (message != "Soleil !") console.log(message);
  });

// Additionner

new PythonShell('add.py', options)
  .on('message', function (message) {
    console.log(message);
  });

new PythonShell('add.py', jsc(options, {
  args: [3, 5, 2]
}))
  .on('message', function (message) {
    console.log(message);
  });

// Displayer

title = "Simulation Numérique Monte-Carlo";
result1 = "3.41\%";
result2 = "2.57\%";
new PythonShell('disp.py', jsc(options, {
  args: [title, result1, result2]
}))
  .on('message', function (message) {
    console.log(message);
  });
