$('.source').addClass('animate__animated')
    .on('mouseenter', (e) => {
        $('.source').removeClass('animate__jello');
        $(e.delegateTarget).addClass('animate__jello');
    }).on('mouseleave', (e) => {
    $('.source').removeClass('animate__jello');
});

$('#start').addClass('animate__animated')
.on('mouseenter', (e)=> {
    $(e.delegateTarget).addClass('animate__jello');
}).on('mouseleave', (e)=>{
    $(e.delegateTarget).removeClass('animate__jello');
}).on('click', ()=>{
    $("#progress").show();
    let x = 0;
    const tmrId = setInterval(()=> {
        if (x >= 100) {
            clearInterval(tmrId);
            $("#progress").hide();
            $("#overlay").fadeOut();
        }
        $("#bar").width((x+=10) + '%');
    }, 100);
});

$(".target").each((index, element)=>{
    $(element).droppable({
        accept: `[alt=${$(element).text()}]`,
        drop: (e, ui)=> {
            $(e.target).text("");
            ui.draggable.css('position', 'static');
            $(e.target).append(ui.draggable);
        }
    })
});

$(".source img").draggable({ revert: "invalid" });