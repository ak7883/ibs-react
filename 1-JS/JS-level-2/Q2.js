

// let invoice={
//     num:123,
//     process:function(){
//         console.log(`INV-${this.num} processed`);
//     }
// }



// let invoice={
//     num:123,
//     process:function(){
//         console.log(`INV-${this.num} processed partially`);
//         let self=this;
//         let complete=function(){
//             console.log(`INV-${self.num} processed completly`);
//         }
//         return complete;
//     }
// }

// let complete=invoice.process();
// complete();

//--------------------------------------------------------------------------

// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let self = this;
//         let doLearn = function () {
//             console.log(this.name + " learning .js from " + self.name);
//         }
//         return doLearn;
//     }
// };

// let emp = { name: 'cts' };

// let doLearn = trainer.doTeach();
// doLearn.call(emp);

// let newTnr = { name: 'Praveen' }
//  doLearn = trainer.doTeach.call(newTnr);
// doLearn.call(emp);

//-------------------------------------------------------------------



// // Model
// let tnr = { name: 'Nag' }
// // Service
// let ctsTngService = {
//     doTraining: function () {
//         console.log(this.name + " giving training to cts");
//     }
// }
// //  ???
// // ctsTngService.doTraining.call(tnr); // way-1

// // ctsTngService.doTraining.apply(tnr); // way-2

// let tng=ctsTngService.doTraining.bind(tnr);  // way-3 
// tng();
// tng();


//-------------------------------------------------------------------