//konfiguracja inputa
function lTemp(temp){
    return Math.floor(temp-273,15);
}
function km(wind){
    return Math.ceil((wind*3600)/1000);
}
$('#city').keydown(function(e){
    if(e.keyCode==13){
        $name=$('#city').val().trim();
        $("#here").html($name);$('#city').val('');
        if($name!=""){
            $.get('http://api.openweathermap.org/data/2.5/weather?q='+$name+'&APPID=b661e18bc64e4000eac618e90194e845')
            .done(function(response){
                //console.log( response);
                $('#temp').html(lTemp(response.main.temp)+" &#176;"+"C");
                $('#pressure').html(response.main.pressure+" hPa");
                $('#humidity').html(response.main.humidity+" %");
                $('#clouds').html(response.clouds.all+" %");
                $('#wind').html(km(response.wind.speed)+" km/h");
            })
            $.get('http://api.openweathermap.org/data/2.5/forecast?q='+$name+'&APPID=b661e18bc64e4000eac618e90194e845')
            .done(function(response_f){
                $('#day1').html(lTemp(response_f.list[1].main.temp)+" &#176;"+"C");
                $('#day2').html(lTemp(response_f.list[2].main.temp)+" &#176;"+"C");
                $('#day3').html(lTemp(response_f.list[3].main.temp)+" &#176;"+"C");
                $('#day4').html(lTemp(response_f.list[4].main.temp)+" &#176;"+"C");
                $('#day5').html(lTemp(response_f.list[5].main.temp)+" &#176;"+"C");
            })
        }
    }
});
//dodawanie aktualnego dnia
let data = new Date();
let dayOfWeek=data.getDay();
switch(dayOfWeek){
    case 1: $('#right').html("Poniedziałek ");
    break;
    case 2: $('#right').html("Wtorek ");
    break;
    case 3: $('#right').html("Środa ");
    break;
    case 4: $('#right').html("Czwartek ");
    break;
    case 5: $('#right').html("Piątek ");
    break;
    case 6: $('#right').html("Sobota ");
    break;
    case 0: $('#right').html("Niedziela ");
    break;
}
let day = data.getDate();
$('#right').append(day);
//dodawanie aktualnego miesiąca
let month = data.getMonth();
switch(month)
{
    case 0: $('#right').append(" Styczeń ");
    break;
    case 1: $('#right').append(" Luty ");
    break;
    case 2: $('#right').append(" Marzec ");
    break;
    case 3: $('#right').append(" Kwiecień ");
    break;
    case 4: $('#right').append(" Maj ");
    break;
    case 5: $('#right').append(" Czerwiec ");
    break;
    case 6: $('#right').append(" Lipiec ");
    break;
    case 7: $('#right').append(" Sierpień ");
    break;
    case 8: $('#right').append(" Wrzesień ");
    break;
    case 9: $('#right').append(" Październik ");
    break;
    case 10: $('#right').append(" Listopad ");
    break;
    case 11: $('#right').append(" Grudzień ");
    break;
}
//dodawania aktualnego roku
let year = data.getFullYear();
$("#right").append( year+" ");
//dodawanie aktualnej godziny
let clock = document.querySelector("#hours");
function foo(){
    var date = new Date();
    var godzina = date.getHours();
    var minuty = date.getMinutes();
    var sek = date.getSeconds();
    if(godzina<10)
    {
        godzina="0"+godzina;
    }
    if(minuty<10)
    {
        minuty="0"+minuty;
    }
    if(sek<10)
    {
        sek="0"+sek;
        
    }
    clock.innerHTML=godzina+":"+minuty+":"+sek; }
    foo();
    setInterval(foo, 1000);
    let tab=['Niedziela', 'Poniedziałek', 'Wtorek', "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela",'Poniedziałek', 'Wtorek', "Środa", "Czwartek", "Piątek"];
    $('#d1').html(tab[dayOfWeek+1]);
    $('#d2').html(tab[dayOfWeek+2]);
    $('#d3').html(tab[dayOfWeek+3]);
    $('#d4').html(tab[dayOfWeek+4]);
    $('#d5').html(tab[dayOfWeek+5]);



