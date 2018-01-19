var array = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,0]];
draw();

function draw()
{
	var canvas=document.getElementById("draw")
			var x=canvas.getContext("2d");

			x.fillStyle="#a0a09f";
			x.strokeStyle="#565656";
			x.strokeStyle = "black";
			x.font = 'bold 70px sans-serif';
			x.textAlign = "center";
			
			for(var i = 0; i < 4; i++)
			{
				for(var j = 0; j < 4; j++)
				{
					x.fillRect(i*100, j*100,100,100);
					x.strokeRect(i*100, j*100,100,100);	

					x.strokeText(array[i][j], i*100+50, j*100+75);
				}
			}

			x.clearRect(300,300,100,100);
}

function move() 
{
	var x = event.pageX; 
	var y = event.pageY;
	
	var canvas = document.getElementById("draw")
	var page = canvas.getContext("2d");

	
	x = Math.floor(x / 100);
	y = Math.floor(y / 100);

	if(((x+1)<4) && (array[x+1][y]==0))
	{
		page.clearRect(x*100, y*100,100,100);

		array[x+1][y]=array[x][y];
		array[x][y]=0;
		x = x+1;

		page.fillRect(x*100, y*100,100,100);
		page.strokeRect(x*100, y*100,100,100);	
		page.strokeText(array[x][y], x*100+50, y*100+75);
	}
	else if(((1+y)<4) && (array[x][y+1]==0))
	{
		page.clearRect(x*100, y*100,100,100);

		array[x][y+1]=array[x][y];
		array[x][y]=0;
		y = y+1;
		
		page.fillRect(x*100, y*100,100,100);
		page.strokeRect(x*100, y*100,100,100);	
		page.strokeText(array[x][y], x*100+50, y*100+75);
	}
	else if((x-1>=0) && array[x-1][y]==0)
	{
		page.clearRect(x*100, y*100,100,100);

		array[x-1][y]=array[x][y];
		array[x][y]=0;
		x = x-1;
		
		page.fillRect(x*100, y*100,100,100);
		page.strokeRect(x*100, y*100,100,100);	
		page.strokeText(array[x][y], x*100+50, y*100+75);
	}
	else if((y-1>=0) && array[x][y-1]==0)
	{
		page.clearRect(x*100, y*100,100,100);

		array[x][y-1]=array[x][y];
		array[x][y]=0;
		y = y-1;
		
		page.fillRect(x*100, y*100,100,100);
		page.strokeRect(x*100, y*100,100,100);	
		page.strokeText(array[x][y], x*100+50, y*100+75);
	}

	
}