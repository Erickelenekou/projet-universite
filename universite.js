
   let actualites=document.getElementById('actualites')
   let actu_message=document.getElementById('actu_message');

   let display=false
   actualites.addEventListener('click', ()=>{
    // actu_message.style.display='block'
    if (!display) {
        actu_message.style.display='block'
        display=true
    }else{
        actu_message.style.display='none'
        display=false
    }
   })



   let heurediv=document.querySelector('.heure');
   let datediv=document.querySelector('.date');

   var afficheheure=function () {
        var today,annee, listemois , mois, listejour,journumero,
            journom,heure, minute,seconde,deuxchiffre

            today=new Date();
            annee=today.getFullYear();

        listemois=["Janvier","Fevrier","Mars","Avril","Mai","Juin","juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
        mois=listemois[today.getMonth()];
        journumero=today.getDate();
        listejour=["lundi","Mardi","Mercredi","Jeudi","vendredi","Samedi","Dimanche"];
        journom=listejour[today.getDay()];

        deuxchiffre=function (element) {
            if (element<10) {
                return element="0" + element
            }else{
                return element;
            }
        }

        heure = deuxchiffre(today.getHours());
        minute= deuxchiffre(today.getMinutes());
        seconde= deuxchiffre(today.getSeconds());

        heurediv.textContent=heure+":"+minute+":"+seconde
        datediv.textContent=journom+":"+journumero+":"+mois+""+annee;

        setTimeout(afficheheure, 1000)
   }
   afficheheure();