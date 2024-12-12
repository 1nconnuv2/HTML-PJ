piece();
function start(e){
    e.dataTransfer.setData("text", e.target.id);
}

function over(e){
    e.preventDefault();
    if (e.currentTarget.className == "vide")
        e.currentTarget.className="dessus";
        
}
function supprimer(placement){
    console.log("placement",placement);
    var carre = document.getElementById(placement);
    var f1 =  document.getElementById(placement+"*");
    f1=f1.getContext("2d")
    f1.clearRect(0,0,40,41)
    carre.innerHTML=""
}
function leave(e){
    if (e.currentTarget.className == "dessus")
        e.currentTarget.className="vide";
}
function drop(e){
    if (e.currentTarget.className == "vide")
        e.preventDefault();
        var obj = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(obj));
        e.currentTarget.className="pleine";
        e.stopPropagation();
        id = document.getElementsByClassName("piece")[0];
        var nom=e.currentTarget.id;
        nom=nom+"*";
        id.setAttribute("id",nom);
        id.setAttribute("draggable","false");
        console.log(id.id)
        piece();
        e.stopPropagation();
        verification();
}
function debut(){
    var canva = document.createElement('canvas');
    canva.setAttribute('id','carre');
    canva.setAttribute('width','40');
    canva.setAttribute('height','41');
    document.getElementsByClassName("carre")[0].appendChild(canva);
    var carre = document.getElementById("carre");
    var f1 = carre.getContext("2d");
    f1.fillStyle = "Blue" ;
    f1.rect(1,3,38,40);
    f1.fill();
}
function debut2(){
    var canva = document.createElement('canvas');
    canva.setAttribute('id','carre2');
    canva.setAttribute('width','40');
    canva.setAttribute('height','41');
    document.getElementsByClassName("carre")[1].appendChild(canva);
    var carre = document.getElementById("carre2");
    var f1 = carre.getContext("2d");
    f1.fillStyle = "Blue" ;
    f1.rect(1,3,38,40);
    f1.fill();
}
function debut3(){
    var canva = document.createElement('canvas');
    canva.setAttribute('id','carre3');
    canva.setAttributetext
    text
    text
    text
    text
    text
    Text('width','40');
    canva.setAttribute('height','41');
    document.getElementsByClassName("carre")[2].appendChild(canva);
    var carre = document.getElementById("carre3");
    var f1 = carre.getContext("2d");
    f1.fillStyle = "Blue" ;
    f1.rect(1,3,38,40);
    f1.fill();
}
function debut4(){
    var canva = document.createElement('canvas');
    canva.setAttribute('id','carre4');
    canva.setAttribute('width','40');
    canva.setAttribute('height','41');
    document.getElementsByClassName("carre")[3].appendChild(canva);
    var carre = document.getElementById("carre4");
    var f1 = carre.getContext("2d");
    f1.fillStyle = "Blue" ;
    f1.rect(1,3,38,40);
    f1.fill();
}
function piece(){
    debut();
    debut2();
    debut3();
    debut4();
    var piece = document.getElementsByClassName("piece")[0];
    piece.setAttribute('draggable','true');
    piece.setAttribute('ondragstart','start(event)');
}
function verif_ligne(x){
    nb=0;
    var I=x.toString();
    for(var j=0; j<7;j++){
        var J=j.toString();
        var case_verif= I+"-"+J;
        var c = document.getElementById(case_verif).classList.contains('pleine');
            if(c==true){
                nb++;
            };
    }
    if (nb==7){
        return true;
    }
    else{
        return false;
    }
};
function verif_colonne(x){
    nb=0;
    var I=x.toString();
    for(var j=0; j<7;j++){
        var J=j.toString();
        var case_verif= J+"-"+I;
        var c = document.getElementById(case_verif).classList.contains('pleine');
            if(c==true){
                nb++;
            }
    }  
    if (nb==7){
        return true  ;
    }
    else{
        return false;
    }
}

function disparition_ligne(x){
    var I=x.toString();
    for(var j=0; j<7;j++){
        var J=j.toString();
        var case_verif= I+"-"+J;
        var canva_suppr=document.getElementById(case_verif+"*");
        document.getElementById(case_verif).className='vide';
        if (canva_suppr!=null){
            console.log(case_verif+"*");
            supprimer(case_verif);
            

        }
    }}

function disparition_colonne(x){
    var I=x.toString();
    for(var j=0; j<7;j++){
        var J=j.toString();
        var case_verif= J+"-"+I;
        console.log(case_verif);
        var canva_suppr=document.getElementById(case_verif+"*");
        document.getElementById(case_verif).className='vide';
        if (canva_suppr!=null){
            console.log(case_verif+"*");
            supprimer(case_verif);   
        }
    }}


function verification(){
    let ligne_pleine=[]
    let colonne_pleine=[]
    let ligne=false
    let colonne=false
    let nb=0
    for(var x=0; x<7;x++){
        ligne=verif_ligne(x)
        if(ligne==true){
            ligne_pleine.push(x)
            nb++
        }
    }
    for(var y=0; y<7;y++){
        colonne=verif_colonne(y)
        if(colonne==true){
            colonne_pleine.push(y)
            nb++
        }
    }
    ligne_pleine.forEach((element) => disparition_ligne(element));
    colonne_pleine.forEach((element) => disparition_colonne(element));
    document.getElementById("score").innerText=parseInt(document.getElementById("score").innerHTML)+nb
}