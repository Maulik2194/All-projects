let addbtn=document.querySelector(".adding");
let main=document.querySelector("#main");

addbtn.addEventListener("click",addNote);

function addNote(){
    const note=document.createElement("div");
    note.className="notes";
    note.innerHTML=`<div class="dgcolor">
    <button id="save"><i class="fa-regular fa-floppy-disk"></i></button>
    <button id="del"><i class="fa-solid fa-trash"></i></button>
    </div>
    <textarea id="txtara"></textarea>`;

    let save=note.querySelector("#save");
    let del=note.querySelector("#del");
    let textarea=note.querySelector("textarea");

    save.addEventListener("click",saveNotes);
    textarea.addEventListener("input",saveNotes);
    del.addEventListener("click",()=>{
        note.remove();
        saveNotes();
    })

    main.appendChild(note);
}

function saveNotes(){
    let notes = document.querySelectorAll("textarea");
    let data=Array.from(notes).map(x);
    function x(note){
        return note.value;
    };
    console.log(notes,data);
    if(data.length==null){
        localStorage.removeItem("notes");
    }else {
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

function loadNotes(){
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    if(lsnotes!==null){
        lsnotes.forEach(noteText=>{
            addNote();

            const notes= document.querySelectorAll(".notes textarea");
            const lastNote = notes[notes.length -1];
            lastNote.value=noteText;
        });
    }else{
        addNote();
    }
}

loadNotes();