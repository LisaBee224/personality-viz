 var data_by_sub: {
    E: 49.3,
    I: 50.7,
    S: 73.3,
    N: 26.7,
    T: 40.2,
    F: 59.8,
    J: 54.1,
    P: 45.9
 }

var data_by_types ={
  ISTJ: 11.6,
  ISFJ: 13.8,
  INFJ: 1.5,
  INTJ: 2.1,
  ISTP: 5.4,
  ISFP: 8.8,
  INFP: 4.4,
  INTP: 3.3,
  ESTP: 4.3,
  ESFP: 8.5,
  ENFP: 8.1,
  ENTP: 3.2,
  ESTJ: 8.7,
  ESFJ: 12.3,
  ENFJ: 2.5,
  ENTJ: 1.8
}

function Collection() {
  this.ei = undefined,
  this.sn = undefined,
  this.tf = undefined,
  this.jp = undefined
}

  Collection.prototype.allFull = function() {
    var arr = []
    for (var i in this){
      if (this[i](typeof(String)) {
        arr.push(this[i]);
      }
    }
    return arr.length == 4;
  }

Collection.prototype.generateType = function() {
    var values = []
    for (var i in this) {
      values.push(this[i]);
    }
    return values.join();
}
