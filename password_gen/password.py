import random
import string

class PasswordGenerator:
    def __init__(self):
        self.char_sets = {
            "uppercase": string.ascii_uppercase,
            "lowercase": string.ascii_lowercase,
            "digits": string.digits,
            "special": "!@#$%^&*()-_=+[]{}|;:,.<>?/",
        }

    def generate_password(self, length, use_uppercase=True, use_lowercase=True, use_digits=True, use_special=True):
        if length < 1:
            raise ValueError("Password length must be at least 1")

        # Collect the character sets based on user preferences
        char_pool = ""
        if use_uppercase:
            char_pool += self.char_sets["uppercase"]
        if use_lowercase:
            char_pool += self.char_sets["lowercase"]
        if use_digits:
            char_pool += self.char_sets["digits"]
        if use_special:
            char_pool += self.char_sets["special"]

        if not char_pool:
            raise ValueError("At least one character type must be selected")

        # Generate a random password
        password = ''.join(random.choices(char_pool, k=length))
        return password
