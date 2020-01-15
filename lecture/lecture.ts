const i:number = 1;
console.log('hello typescript!!!');
console.log(i);

[1,2,3].forEach((item) => {
    console.log(item)
});



class aaa{
    a = 1;
    b = 2;

    aa(){
        this.aa.call(this.a);
    }
}



const bruce = {
    name : 'Bruce'
};

const madeline = {
    name : 'Madeline'
};


function update(birthYear: number, occupation: string){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(bruce, 1949, 'singer'); // bruce 변경

 