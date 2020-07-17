//find  smallest string from array

function tinyFriend(names){
	let smallName=names[0].length;
	for(let i=0;i<names.length;i++){
		let arrayName=names[i].length;
		if(arrayName<smallName){
			smallName=arrayName;
		}
	}
	for(let i=0;i<names.length;i++){
		if(names[i].length===smallName){
			return names[i];
		}
	}
}

console.log(tinyFriend(["karim","jamal Uddin",'car','d']));