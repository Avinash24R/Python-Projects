import tkinter as tk
from tkinter import messagebox, simpledialog
from utils.file_handler import load_notes, save_notes
from utils.note_manager import NoteManager

class NotebookApp:
    def __init__(self, master):
        self.master = master
        master.title("Notebook")
        
        # Initialize NoteManager
        self.note_manager = NoteManager()

        # Create a text area for notes
        self.text_area = tk.Text(master, wrap='word', height=15, width=50)
        self.text_area.pack(pady=10)

        # Create buttons for note management
        self.add_button = tk.Button(master, text="Add Note", command=self.add_note)
        self.add_button.pack(pady=5)

        self.update_button = tk.Button(master, text="Update Note", command=self.update_note)
        self.update_button.pack(pady=5)

        self.delete_button = tk.Button(master, text="Delete Note", command=self.delete_note)
        self.delete_button.pack(pady=5)

        self.show_notes()

    def add_note(self):
        """Add a new note to the notebook."""
        content = self.text_area.get("1.0", tk.END).strip()
        if content:
            self.note_manager.add_note(content)
            messagebox.showinfo("Success", "Note added!")
            self.clear_text_area()
            self.show_notes()
        else:
            messagebox.showwarning("Warning", "Note content cannot be empty.")

    def update_note(self):
        """Update the currently selected note."""
        selected_index = simpledialog.askinteger("Update Note", "Enter note index to update:")
        if selected_index is not None:
            if 0 <= selected_index < len(self.note_manager.notes):
                new_content = self.text_area.get("1.0", tk.END).strip()
                if new_content:
                    self.note_manager.update_note(selected_index, new_content)
                    messagebox.showinfo("Success", "Note updated!")
                    self.clear_text_area()
                    self.show_notes()
                else:
                    messagebox.showwarning("Warning", "Note content cannot be empty.")
            else:
                messagebox.showwarning("Warning", "Invalid note index.")

    def delete_note(self):
        """Delete the currently selected note."""
        selected_index = simpledialog.askinteger("Delete Note", "Enter note index to delete:")
        if selected_index is not None:
            if 0 <= selected_index < len(self.note_manager.notes):
                self.note_manager.delete_note(selected_index)
                messagebox.showinfo("Success", "Note deleted!")
                self.clear_text_area()
                self.show_notes()
            else:
                messagebox.showwarning("Warning", "Invalid note index.")

    def show_notes(self):
        """Display all notes in the text area."""
        self.clear_text_area()
        notes = self.note_manager.get_notes()
        for index, note in enumerate(notes):
            self.text_area.insert(tk.END, f"{index}: {note['content']}\n")

    def clear_text_area(self):
        """Clear the text area."""
        self.text_area.delete("1.0", tk.END)

if __name__ == "__main__":
    root = tk.Tk()
    app = NotebookApp(root)
    root.mainloop()
