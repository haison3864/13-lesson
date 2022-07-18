


// let row = document.querySelector(".row")

// function map_qilish(qiymat) {
//     row.innerHTML = "";

//     qiymat.map((value, index)=> {


//         let rasm = document.createElement("img")
//         let h1 = document.createElement("h1")
//         let button = document.createElement("button")
//         button.innerText = "Batafsil";
//         let buttonD = document.createElement("button")
//         buttonD.innerText = "Delete";
//         buttonD.classList.add("btn", "btn-danger")
        // buttonD.setAttribute("onclick", `Delete(${index})`)

//         let p = document.createElement("p")
//         let col = document.createElement("div")
//         col.classList.add("col-lg-4", "col-md-6", "col-sm-12")
//         let card = document.createElement("div")
//         card.classList.add("card")

//         // qiymatlarni berish.
//         rasm.src = value.photo;
//         rasm.alt = "daryo news rasmlari"

//         h1.innerHTML = value.categories;
//         p.innerHTML = value.title

//         card.appendChild(rasm)
//         card.appendChild(h1)
//         card.appendChild(p)
//         card.appendChild(button)
//         card.appendChild(buttonD)
//         col.appendChild(card)

//         row.appendChild(col)
//     })
// }
// map_qilish(daryoYangiliklari);


// function searching(a) {
//     console.log(a);
//     let yangiMassiv = daryoYangiliklari.filter(word => {
//         return word.title.toLocaleLowerCase().includes(a.toLocaleLowerCase())
//     })
//     map_qilish(yangiMassiv)
// }

// function Delete(indexi) {
//     daryoYangiliklari.splice(indexi,1)
//     map_qilish(daryoYangiliklari)
// }



let row2 = document.querySelector(".row");

function mapping(kiyimlarim) {

    row2.innerHTML = ""

    kiyimlarim.map((kiyim, index) => {

        let rasm = document.createElement("img")

        let mavzu = document.createElement("h2")
        mavzu.classList.add("mavzu")

        let words = document.createElement("p")
        words.classList.add("words")

        let button1 = document.createElement("button")
        button1.classList.add("btn", "tugma1")

        let button2 = document.createElement("button")
        button2.classList.add("btn", "tugma2")
        button2.setAttribute("onclick", `Delete2(${index})`)

        let part2 = document.createElement("div")
        part2.classList.add("d-flex", "justify-content-between")

        let card = document.createElement("div")
        card.classList.add("card", "text-center", "border-none", "mt-2", "karta")

        let col = document.createElement("div")
        col.classList.add("col-lg-4", "col-md-6", "col-sm-12")

        let part1 = document.createElement("div")
        part1.classList.add("p-2")


        // qiymatlarni berish......

        rasm.src = kiyim.photo;
        rasm.alt = "Nike buyumlari"

        mavzu.innerHTML = kiyim.nomi;
        words.innerHTML = kiyim.category;
        button1.innerText = "Batafsil";
        button2.innerText = "Delete"

        card.appendChild(rasm)
        card.appendChild(part1)

        part1.appendChild(mavzu)
        part1.appendChild(words)
        part1.appendChild(part2)
        part2.appendChild(button1)
        part2.appendChild(button2)


        col.appendChild(card)
        row2.appendChild(col)


    })

}

mapping(Kiyimlar);

function searching2(qidir) {
    let yangiMassiv2 = Kiyimlar.filter(nike => {
        return nike.nomi.toLocaleLowerCase().includes(qidir.toLocaleLowerCase()) 
        || nike.category.toLocaleLowerCase().includes(qidir.toLocaleLowerCase())
    })
    mapping(yangiMassiv2)
}

function Delete2(indexRaqami) {
    Kiyimlar.splice(indexRaqami,1)
    mapping(Kiyimlar)
}

