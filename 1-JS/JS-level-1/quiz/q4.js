

let trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let notes = '.js-notes';
        let self=this;
        let doLearn = function () {
            console.log(this.name + ' learning with ' + notes + ' from ' + self.name);
        }
        //doLearn();
        let emp = { name: 'cts' };
        doLearn.call(emp)
        console.log("teaching end..");
    }
};

trainer.doTeach();
let newTnr = { name: 'Praveen' };
trainer.doTeach.call(newTnr);
