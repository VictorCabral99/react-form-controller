import React from "react";

const FormServices = {
    getAllNotes: async () => {
        return {
            status: 200,
            message: "success",
            notes: JSON.parse(localStorage.getItem("notes")) || []
        };
    },
    saveNewNote: async (newNote) => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        if(notes.find((note) => note.id === newNote.id).length > 0){
            return {
                status: 400,
                message: "error"
            };
        }
        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));
        return {
            status: 201,
            message: "success"
        }
    },
    deleteNoteById: async (noteId) => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        if(notes.find((note) => note.id === noteId).length > 0){
            const filteredNotes = notes.filter((note) => note.id !== noteId);
            localStorage.setItem("notes", JSON.stringify(filteredNotes));
            return {
                status: 201,
                message: "success"
            };
        }
        return {
            status: 400,
            message: "error"
        };
    }
}

export default FormServices;