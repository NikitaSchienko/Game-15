var array = [[1,5,9,13], [2,6,10,14], [3,7,11,15], [4,8,12,0]];
var arrayReference = [[1,5,9,13], [2,6,10,14], [3,7,11,15], [4,8,12,0]];
var page;
var count = 0;
var timestart;

function random()
{
	var arrayTest = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

	function compareRandom(a, b) 
	{
  		return Math.random()-0.5;
	}

	arrayTest.sort(compareRandom);

	for(var i = 0; i < 4; i++)
	{
		for(var j = 0; j < 4; j++)
		{
			array[i][j] = arrayTest[i*4 + j];
		}
	}
}

function drawCanvas()
{

	canvas = document.getElementById("draw")
	page = canvas.getContext("2d");
	page.clearRect(0, 0, canvas.width, canvas.height);

	random();

	page.fillStyle="#727272";
	page.strokeStyle = "black";
	page.font = 'bold 70px sans-serif';
	page.textAlign = "center";
			
	for(var i = 0; i < 4; i++)
	{
		for(var j = 0; j < 4; j++)
		{
			if(array[i][j] != 0)
			{
				page.fillRect(i*100, j*100,100,100);
				page.fillStyle = "#a0a09f";
				page.fillRect(i*100, j*100,95,95);
				page.fillStyle = "#727272";
				page.strokeRect(i*100, j*100,100,100);	
				page.strokeText(array[i][j], i*100+50, j*100+75);
			}
		}
	}
	var date = new Date();
	timestart = date.getTime();
	count = 0;
	document.getElementById('count').innerHTML = "Счет: "+count; 

}

$(document).ready(function() {
	drawCanvas();		

});


function drawRect(xOld, yOld, xNew, yNew)
{

	page.clearRect(xOld*100, yOld*100,100,100);

	array[xNew][yNew]=array[xOld][yOld];
	array[xOld][yOld]=0;

	page.fillRect(xNew*100, yNew*100,100,100);
	page.fillStyle = "#a0a09f";
	page.fillRect(xNew*100, yNew*100,95,95);
	page.fillStyle = "#727272";
	page.strokeRect(xNew*100, yNew*100,100,100);	
	page.strokeText(array[xNew][yNew], xNew*100+50, yNew*100+75);
}


    window.onload = function(){
    (function(){
        var date = new Date();
        div = document.getElementById('time');
        div.innerHTML = 'Время: '+Math.floor((date.getTime() - timestart)/1000);
        window.setTimeout(arguments.callee, 1);
    })();
};





function move() 
{
	var canvas = draw.getBoundingClientRect();
	var x = event.pageX-canvas.left; 
	var y = event.pageY-canvas.top;
	
	count++;
	document.getElementById('count').innerHTML = "Счет: "+count; 
	
	x = Math.floor(x / 100);
	y = Math.floor(y / 100);



	if(((x+1)<4) && (array[x+1][y]==0))
	{
		drawRect(x,y,x+1,y);
	}
	else if(((1+y)<4) && (array[x][y+1]==0))
	{
		drawRect(x,y,x,y+1);
	}
	else if((x-1>=0) && array[x-1][y]==0)
	{
		drawRect(x,y,x-1,y);
	}
	else if((y-1>=0) && array[x][y-1]==0)
	{
		drawRect(x,y,x,y-1);
	}

	if(gameOver())
	{
		alert("Поздравляем!");
	}
}

function gameOver()
{
	var currentNumber = array[0][0];

	for(var i = 0; i < array.length; i++)
	{
		for(var j = 0; j < array[i].length; j++)
		{
			if(array[i][j] != arrayReference[i][j])
			{
				return false;
			}
		}
	}
	return true;
}