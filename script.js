debut();
var suite_de_combo = 0
var meilleur_combo = 0

function start(e){
    e.dataTransfer.setData("text", e.target.id);
}

function over(e){
    e.preventDefault();
    if (e.currentTarget.className == "vide")
        e.currentTarget.className="dessus";
        
}


function supprimer(placement){
    console.log("placement",placement)
    var carre = document.getElementById(placement);
    var f1 = document.getElementById(placement+"*");
    f1= f1.getContext("2d");
    f1.clearRect(0,0,40,41)
    carre.innerHTML=""

}

function leave(e){
    if (e.currentTarget.className == "dessus")
        e.currentTarget.className="vide";
}

function drop(e){
    e.preventDefault();
    var obj = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(obj));
    e.currentTarget.className="pleine";
    e.stopPropagation();
    id = document.getElementById("carre");
    var nom=e.currentTarget.id;
    nom=nom+"*";
    id.setAttribute("id",nom);
    id.setAttribute("draggable","false");
    console.log(id.id)
    debut();
    e.stopPropagation();
    verification();
}
function debut(){
    var canva = document.createElement('canvas');
    canva.setAttribute('id','carre');
    canva.setAttribute('width','40');
    canva.setAttribute('height','41');
    canva.setAttribute('ondragstart','start(event)');
    canva.setAttribute('draggable','true');
    document.getElementsByClassName("carre")[0].appendChild(canva);
    var carre = document.getElementById("carre");
    var f1 = carre.getContext("2d");
    f1.fillStyle = "Blue" ;
    f1.rect(0,3,40,40);
    f1.fill();
}

function verif_ligne(x){
    nb=0;
    var I=x.toString();
    for(var j=0; j<7;j++){;
        var J=j.toString();
        var case_verif= I+"-"+J;
        var c = document.getElementById(case_verif).classList.contains('pleine');
            if(c==true){;
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
    nb=0
    var I=x.toString()
    for(var j=0; j<7;j++){
        var J=j.toString()
        var case_verif= J+"-"+I
        var c = document.getElementById(case_verif).classList.contains('pleine')
            if(c==true){
                nb++
            }
    }  
    if (nb==7){
        return true  
    }
    else{
        return false
    }
}

function disparition_ligne(x){
    var I=x.toString()
    for(var j=0; j<7;j++){
        var J=j.toString()
        var case_verif= I+"-"+J
        var canva_suppr=document.getElementById(case_verif+"*")
        document.getElementById(case_verif).className='vide'
        if (canva_suppr!=null){
            supprimer(case_verif);

        }
    }}

function disparition_colonne(x){
    var I=x.toString()
    for(var j=0; j<7;j++){
        var J=j.toString()
        var case_verif= J+"-"+I
        var canva_suppr=document.getElementById(case_verif+"*")
        document.getElementById(case_verif).className='vide'
        if (canva_suppr!=null){
            supprimer(case_verif);

        }
    }}

function combo(nombre){
    var score = 0
    if (nombre==0){
        suite_de_combo=0
    }

    else{
        suite_de_combo=suite_de_combo+nombre
        nombre=suite_de_combo
    }

    console.log(nombre)
    if(nombre==1){
        score=1
    }
    else if (2<=nombre){
        score=Math.trunc(nombre+1,5**nombre)
        console.log("score",score)
    }
    return(score)

}

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

    var point= combo(nb)
    console.log("nombre de point ",point)
    ligne_pleine.forEach((element) => disparition_ligne(element));
    colonne_pleine.forEach((element) => disparition_colonne(element));
    document.getElementById("score").innerText=parseInt(document.getElementById("score").innerHTML)+point
    document.getElementById("combo_en_cours").innerText=suite_de_combo
    
    if(suite_de_combo>meilleur_combo){
        meilleur_combo=suite_de_combo
        document.getElementById("meilleur_combo").innerText=meilleur_combo
    }
}