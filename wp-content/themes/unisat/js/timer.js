function updateTimer() {
    future  = Date.parse("April 12, 2022 9:00:00");
    now     = new Date();
    diff    = future - now;

    days  = Math.floor( diff / (1000*60*60*24) );

    d = days;

    var day_id=document.getElementById("days_id");
    //day_id.innerHTML = d ;
    var str=''+d+'';
    //wrapChars(str);
    day_id.innerHTML = wrapChars(str);

    var day_1 = document.getElementById("id_day_1");
    var day_2 = document.getElementById("id_day_2");
    var day_3 = document.getElementById("id_day_3");

    day_1.style.display = "none";
    day_2.style.display = "none";
    day_3.style.display = "none";
    
    if (d<1000 && d>0){
        if(Math.floor(d%100/10)!=1){
            if (d%10==1){
                day_1.style.display = "block";
            }
            else if(d%10>1 && d%10<5){
                day_2.style.display = "block";
            }
            else{
                day_3.style.display = "block";
            }
        }else{
            day_3.style.display = "block";
        }

    }else{
        day_3.style.display = "block";
    }


    if (d<=0){
        var str1='0';
        day_id.innerHTML = wrapChars(str1);
    }


}
setInterval('updateTimer()', 1000 );

function wrapChars(str, tmpl) {
    return str.replace(/\w/g, tmpl || "<span>$&</span>");
}


var joinBtn = document.getElementById('join_id'),
    gagarinImg = document.getElementById('gagarin_id'),
    gagarin_go = document.getElementById('gagarin_go');
audios = document.querySelectorAll('audio');


joinBtn.addEventListener('mouseover', function() {
    [].forEach.call(audios, function(audio) {
        // do whatever
        audio.play();
    });
}, false);

joinBtn.addEventListener('mouseleave', function() {
    gagarin_go.pause();
    gagarin_go.currentTime = 0;
}, false);

gagarinImg.addEventListener('mouseover', function() {
    gagarin_go.play();
}, false);

gagarinImg.addEventListener('mouseleave', function() {
    gagarin_go.pause();
    gagarin_go.currentTime = 0;
}, false);


/*Gallery Masonry*/
function resizeGridItem(item){
    grid = document.getElementsByClassName("gallery")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
    allItems = document.getElementsByClassName("gallery-item");
    for(x=0;x<allItems.length;x++){
        resizeGridItem(allItems[x]);
    }
}

window.onload = resizeAllGridItems();

window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("gallery-item");
for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
}

function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
}
/*Gallery Masonry*/
