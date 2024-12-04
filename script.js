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
        var canva_suppr=document.getElementsByName(case_verif+"*")
        document.getElementById(case_verif).className='vide'
        if (canva_suppr!=null){
            document.getElementsById(case_verif).removeChild
            console.log("suppression")
        }
    }}

function disparition_colonne(x){
    var I=x.toString()
    for(var j=0; j<7;j++){
        var J=j.toString()
        var case_verif= J+"-"+I
        console.log(case_verif)
        var canva_suppr=document.getElementsByName(case_verif+"*")
        document.getElementById(case_verif).className='vide'
        if (canva_suppr!=null){
            document.getElementById(case_verif).removeChild
            console.log("suppression")
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
function canvas(){
    var canva = document.createElement('canvas');
    canva.setAttribute('id','forme');
    canva.setAttribute('width','40');
    canva.setAttribute('height','41');
    canva.setAttribute('ondragstart','start(event)');
    canva.setAttribute('draggable','true');
    document.getElementsByClassName("class1")[0].appendChild(canva);
}
function forme(){
    canvas()
    var carre = document.getElementById("forme");
    var f1 = carre.getContext("2d");
    f1.fillStyle = "Blue";
    f1.rect(0,3,40,40);
    f1.fill();
}


function start(e){
    e.dataTransfer.setData("text", e.target.id);
}

function over(e){
    e.currentTarget.className="dessus";
    e.preventDefault();
}

function leave(e){
    e.currentTarget.className="vide";
}

function drop(e){
    e.preventDefault();
    var obj = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(obj));
    e.currentTarget.className="pleine";
    var nom=e.currentTarget.id
    nom=nom+"*";
    e.name= nom;
    console.log(e.name)
    e.stopPropagation()
    forme();
    id = document.getElementById("forme");
    id.removeAttribute("id");
    id.setAttribute(draggable,false);
    verification()
}