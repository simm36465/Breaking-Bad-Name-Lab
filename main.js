var FirstName = document.getElementById("fn"),
	LastName = document.getElementById("ln"),
	Generate = document.getElementById("generate"),
 	Result = document.getElementById("result"),
 	Beg = document.getElementById("beg");

	var CHIMIE = ["H" ,"He" ,"Li" ,"Be" ,"B" ,"C" ,"N" ,"O" ,"F" ,"Ne" ,"Na" ,"Mg" ,"Al" ,"Si" ,"P" ,"S" 
,"Cl" ,"Ar" ,"K" ,"Ca" ,"Sc" ,"Ti" ,"V" ,"Cr" ,"Mn","Fe" ,"Co" ,"Ni" ,"Cu" ,"Zn" ,"Ga" ,"Ge" ,"As"
,"Se" ,"Br" ,"Kr" ,"Rb" ,"Sr" ,"Y" ,"Zr" ,"Nb" ,"Mo" ,"Tc" ,"Ru" ,"Rh" ,"Pd" ,"Ag" ,"Cd" ,"In" ,"Sn"
,"Sb","Te" ,"I" ,"Xe" ,"Cs" ,"Ba" ,"Hf" ,"Ta" ,"W" ,"Re" ,"Os" ,"Ir" ,"Pt" ,"Au" ,"Hg" ,"Tl" ,"Pb"
,"Bi" ,"Po" ,"At" ,"Rn" ,"Fr" ,"Ra" ,"Rf" ,"Db" ,"Sg" ,"Bh" ,"Hs" ,"Mt" ,"Ds" ,"Rg" ,"Cn" ,"Uut","Fl"
,"Uup" ,"Lv" ,"Uus" ,"Uuo" ,"La" ,"Ce" ,"Pr" ,"Nd" ,"Pm" ,"Sm" ,"Eu" ,"Gd" ,"Tb" ,"Dy" ,"Ho","Er"
,"Tm" ,"Yb" ,"Lu" ,"Ac" ,"Th" ,"Pa" ,"U" ,"Np" ,"Pu" ,"Am" ,"Cm" ,"Bk" ,"Cf" ,"Fm" ,"Md" ,"No" ,"Lr"];

var chimie = CHIMIE.sort();
var ch1,ch2;

Generate.addEventListener('click', function () {
if (!FirstName.value){
	alert("first name is require !!");
	return false;
} else if(!LastName.value) {
alert("last name is require !! ");
return false;
} else if (FirstName.value.length > 8) {
	alert("your first name is great than 8 ");
	return false;

} else if (FirstName.value.length < 3 ) {
	alert("your first name is less than 3 ");
	return false;
}else if (LastName.value.length > 8) {
	alert("your last name is great than 8 ");
	return false;

} else if (LastName.value.length < 3 ) {
	alert("your last name is less than 3 ");
	return false;
}

for (var i = 0; i <= chimie.length - 1; i++) {
		if (FirstName.value.toUpperCase().indexOf(chimie[i].toUpperCase()) > -1) {
			ch1 = chimie[i];
}
	}
	for (var i = 0; i <= chimie.length - 1; i++) {
		if (LastName.value.toUpperCase().indexOf(chimie[i].toUpperCase()) > -1) {
			ch2 = chimie[i];
}
	}
var posi1 = FirstName.value.toUpperCase().indexOf(ch1.toUpperCase()) + ch1.length - 1;
var posi2 = LastName.value.toUpperCase().indexOf(ch2.toUpperCase()) + ch2.length - 1;

Result.innerHTML = FirstName.value.substring(0, posi1) + "<b style='color: white;background: linear-gradient(90deg, #15ff45 0%, #004e02 100%);border: 1px solid;width: 35px;padding: 10px;'>" + ch1 + "</b>" + FirstName.value.substr(posi1 + 1 )+ "<br>" + "<br>" + LastName.value.substring(0, posi2)+ "<b style='color: white;background: linear-gradient(90deg, #15ff45 0%, #004e02 100%);border: 1px solid;width: 35px;padding: 10px;'>" + ch2 + "</b>" + LastName.value.substr(posi2 + 1 );

Beg.style.display = 'none';
Result.style.display = 'block';

});



