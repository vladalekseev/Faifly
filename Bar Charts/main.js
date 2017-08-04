
    var diagram = document.getElementById('diagram');
    var arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

    for(var i = 0; i < arr.length; i++) {
        var div = document.createElement('div');
        div.className = 'char';
        div.style.height = arr[i] * 20 + 'px';
        div.style.backgroundColor = arr[i] <= 5 ? 'green' : arr[i] <= 10 ? 'yellow' : 'red';
        diagram.appendChild(div);

        var value = document.createElement('div');
        value.innerHTML = arr[i];
        value.className = 'value';
        value.style.bottom = arr[i] * 20 + 'px';
        diagram.appendChild(value);

        var index = document.createElement('div');
        index.innerHTML = i;
        index.className = 'index';
        div.appendChild(index);
    }
