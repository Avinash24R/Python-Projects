import json

# The file where notes will be saved
NOTES_FILE = "notes.json"

def load_notes():
    """Load notes from a JSON file."""
    try:
        with open(NOTES_FILE, "r") as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return []  # Return an empty list if file doesn't exist or is invalid

def save_notes(notes):
    """Save notes to a JSON file."""
    with open(NOTES_FILE, "w") as file:
        json.dump(notes, file, indent=4)
