const fs = require("fs")
const util = require('util')
const path = require('path')

const writeFileAsync = util.promisify(fs.writeFile)

// var $noteTitle = $(".note-title");
// var $noteText = $(".note-textarea");
// var $saveNoteBtn = $(".save-note");
// var $newNoteBtn = $(".new-note");
// var $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};


// A function for getting all notes from the db
var getNotes = function () {
    let db = require("../../../db/db.json")
    return db;
};

// A function for saving a note to the db
var saveNote = function (note) {
    let db = getNotes();
    db.push(activeNote)

    writeFileAsync(path.join(__dirname, '../../../db/db.json'), JSON.stringify(db))
};

// A function for deleting a note from the db
var deleteNote = function (title) {
    let db = getNotes()
    let pos = db.map(function (e) { return e.title; }).indexOf(title)
    
    db.splice(pos, 1)
    writeFileAsync(path.join(__dirname, '../../../db/db.json'), JSON.stringify(db))
}

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveNote = function () {

};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function () {

};

// Delete the clicked note
var handleNoteDelete = function (event) {

};

// Sets the activeNote and displays it
var handleNoteView = function () {

};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function () {

};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function () {

};

// Render's the list of note titles
var renderNoteList = function (notes) {

};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function () {

};

// $saveNoteBtn.on("click", handleNoteSave);
// $noteList.on("click", ".list-group-item", handleNoteView);
// $newNoteBtn.on("click", handleNewNoteView);
// $noteList.on("click", ".delete-note", handleNoteDelete);
// $noteTitle.on("keyup", handleRenderSaveBtn);
// $noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
// getAndRenderNotes();

deleteNote('test')