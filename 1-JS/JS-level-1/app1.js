
function sessionStart(){
    function Trainer(name){
        this.name=name;
        this.doTeach=function(){
            console.log(this.name+" teaching ");
            let self=this;
            let doLearn=function(){
                console.log(this.name+" learning.."+self.name);
            }
            return doLearn;
        }
    }
    function Employee(name){
        this.name=name;
    }
    let tnr=new Trainer('Nag'); // constructor invocation
    let e1=new Employee('A');
    let e2=new Employee('B');
    let doLearnFunc=tnr.doTeach(); // method invocation
    doLearnFunc.call(e1); // call/apply/bind invocation
    doLearnFunc.call(e2);
}
sessionStart(); // function invocation