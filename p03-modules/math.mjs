export function sum() {
    let n = arguments.length;
    console.log ('la function usm() est appelee avec '+n + ' arguments');
    let s = 0;
    for (let i = 0; i < n; i++){
        s+= arguments[i];
    }
    return s;
}

// spread operator ...args
export function sumv2(...args){
    // ...args est appele : ( Rest Parametre du reste)
    // il s'agit d'un tableau, au contraire de arguments qui n'est pas un tableau
    console.log('la function sum() est appelee avec' + args.length + 'arguments');
    return args.reduce((pv,cv) => pv + cv);
}

// export : syntaxe ES-6