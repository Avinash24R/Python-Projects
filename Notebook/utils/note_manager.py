from utils.file_handler import load_notes ,save_notes 

class NoteManager:
    def __init__(self):
        self.notes = load_notes()  # Load existing notes

    def add_note(self, content):
        """Add a new note."""
        self.notes.append({"content": content})
        save_notes(self.notes)

    def get_notes(self):
        """Get all notes."""
        return self.notes

    def delete_note(self, index):
        """Delete a note by index."""
        if 0 <= index < len(self.notes):
            del self.notes[index]
            save_notes(self.notes)

    def update_note(self, index, new_content):
        """Update a note by index."""
        if 0 <= index < len(self.notes):
            self.notes[index]['content'] = new_content
            save_notes(self.notes)
