var addInArray = [];
function add()
{
    var todoname = document.getElementById('whattodo').value;
    var ul = document.getElementById('todolist');
    if(todoname != '')
    {
        addInArray.push(todoname);
        document.getElementById('totalItems').innerHTML = addInArray.length;
        document.getElementById('whattodo').style.border = '2px solid lightgreen';
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(todoname));
        var div = document.createElement('div');
        div.setAttribute('id','icon');
        var span = document.createElement('span');
        span.setAttribute('class','glyphicon glyphicon-remove-sign');
        span.onclick = function() { var ddiv = this.parentNode; var dli = ddiv.parentNode; var dol = dli.parentNode; dol.removeChild(dli); var i = addInArray.indexOf(dli.innerHTML); addInArray.splice(i, 1); document.getElementById('totalItems').innerHTML = addInArray.length; };
        div.appendChild(span);
        li.appendChild(div);
        ul.appendChild(li);
        document.getElementById('whattodo').value = '';
    }
    else
    {
        document.getElementById('whattodo').style.border = '2px solid red';
    }
}

function delall()
{
    var ul = document.getElementById('todolist').innerHTML = '';
    while(addInArray.length > 0) 
    {
        addInArray.pop();
    }
    document.getElementById('totalItems').innerHTML = addInArray.length;
}