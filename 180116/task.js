//  4 5 7 9 3 21
// 21 7 9 4 3 5
var  heap = {
    data:[0],
    test:function(){
        for(var i=0;i<arguments.length;i++){
            this.add(arguments[i]);
        }
        return this.data;
    },
    add:function(e){
        var index = this.data.length;
        var eindex=index;
        if(index===1){
            this.data.push(e);
        }else {
            while(index>1){
                index =Math.floor(index/2);
                if(e>this.data[index]){
                    this.data[eindex] = this.data[index];
                    eindex = index;
                }else{
                  break;
                }
            }
            this.data[eindex]=e;
        }
        console.log(this.data);
    },
    swap:function(m,n){
        var t;
        t =  this.data[m];
        this.data[m] = this.data[n] ;
        this.data[n] = t;
    },
    getMax:function(){
        var max = this.data[1];
        var eindex = 1;
        this.data[1] = this.data.pop();
        while(eindex * 2<this.data.length){
            var n1 = 2*eindex;
            var n2 = n1+1;
            var nmax = this.data[n1]>this.data[n2]?n1:n2;
            if(this.data[eindex]<this.data[nmax]){
                this.swap(eindex,nmax);
                eindex = nmax;
            }else{
                break;
            }
        }
        console.log(this.data);
        return max;
    }
}
