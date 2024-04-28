    let who = ["My neighbour ", "Your mom ", "Your dog "];
    let action = ["threw ", "kicked ", "stole "];
    let what = ["my car ", "my keys ", "my phone "];
    let where = ["on the street", "in my house", "near the toilet"];

    const Boring = arr => {
        let num = Math.floor(Math.random() * arr.length);
        return arr[num];
    };

    addEventListener("load", () => {
        document.querySelector("#excuse").innerHTML = `${Boring(who)} ${Boring(
            action)} ${Boring(what)} ${Boring(where)}`;
    });

    document.querySelector("#printIt").addEventListener("click", () => {
        document.querySelector("#excuse").innerHTML = `${Boring(who)} ${Boring(
            action)} ${Boring(what)} ${Boring(where)}`;
    });