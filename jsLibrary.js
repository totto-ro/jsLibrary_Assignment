let _ = {

    map: function(arr,callback) {
        let result = [];
        for( let value of arr ) {
            result.push( callback(arr[value-1]) );
    }
        return result;
    },

    reduce: function( sumArr, callback, initialVal ){
        let countResultArrBy = 0;
        if ( !initialVal ){
            initialVal = sumArr[0];
            countResultArrBy = 1;
        }
        for ( let i = countResultArrBy; i < sumArr.length; i++ ) {
            initialVal = callback( sumArr[i], initialVal );
        }
        return initialVal;
    },

    find: function( arr, callback ) {
        for( let value of arr ) {
            if( callback(arr[value]) ){
                return arr[value];
            }
        }
    },

    filter: function( arr, callback ) {
        let result = [];
        for( let value of arr ) {
            if( callback( arr[value] ) ) {
                result.push( arr[value] );
        }
    }
        return result;
    },

    reject: function( arr, callback ) {
        let result = [];
        for( var i = 0; i < arr.length; i++ ) {
            if( !callback( arr[i] ) ) {
                result.push( arr[i] );
        }
    }
        return result;
    },

}

let arrArgument = [1, 2, 3, 4, 5, 6]
console.log( _.filter( arrArgument, function(num){ return num % 2 == 0; } ) ); // if things are working right, this will return [2,4,6].
console.log(_.map( arrArgument, function(num){ return num * 2; } ) );
console.log(_.reduce( arrArgument, function(sumArr, initialVal){ return sumArr + initialVal; }, 4  /*sending 4 as initial value of the array: [4+1+2+3+4+5+6]*/) ); 
console.log( _.find( arrArgument, function(num){ return num === 5; } ) );
console.log(_.reject([3, 2, 3, 4, 3, 6], function(num){ return num % 2 == 0; }));