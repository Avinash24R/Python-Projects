import re

class WordFreqCounter:
    def __init__(self):
        self.word_frequency_count = {}
    def reset_count(self):
        """Reset the word frequency dictionary."""
        self.word_frequency_count.clear()

    def text_to_words(self, text: str) -> list[str]:
        # Use regex to remove punctuation and split words
        cleaned_text = re.sub(r"[^\w\s]", "", text)  # Keep only words and spaces
        words = cleaned_text.lower().split()  # Convert to lowercase and split by spaces
        return words

    def count_freq(self, words: list[str]):
        """Count frequency of each word."""
        self.reset_count() 
        for word in words:
            self.word_frequency_count[word] = self.word_frequency_count.get(word, 0) + 1
"""
Testing the class 

text : WordFreqCounter = WordFreqCounter()
res = text.text_to_words("Hi how are u , I am fine thank u")
text.count_freq(res)
print(text.word_frequency_count)
"""
