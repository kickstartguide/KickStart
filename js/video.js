var link =["videos/11.mp4","videos/2.mp4","videos/3.mp4","videos/4.mp4","videos/5.mp4","videos/6.mp4","videos/7.mp4","videos/8.mp4","videos/9.mp4","videos/10.mp4",];

var activeLink=0;
var videoTag = document.querySelector("video");
var sourceTag = document.querySelector("#sourceFile");
console.log(sourceTag);
console.log(sourceTag.src);

console.log(sourceTag.src);
var changeSource = function(linkNumber)
{
	activeLink=linkNumber-1;
	sourceTag.src=link[ activeLink ];
	videoTag.load();

}
var useControl= function(switchValue)
{
	if(switchValue)
	{
		changeSource(activeLink+2);
	}	
	else
	{
		changeSource(activeLink);
	}	
}