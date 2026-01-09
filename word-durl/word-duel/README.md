# Word Duel

Word Duel is a game where players submit words, and these words are ranked based on specific categories. The game evaluates the words according to a hierarchy of categories, including Quintessential, Palindrome, Ordered, Trio, Duo, and Standard. The goal is to determine which word has a higher rank based on these categories and predefined tie-breaking rules.

## Categories

1. **Quintessential**: A word consisting of five or more identical letters (e.g., AAAAA).
2. **Palindrome**: A word that reads the same forwards and backwards and has a length of at least 3 (e.g., RACECAR).
3. **Ordered**: A word where the letters appear in non-decreasing alphabetical order (e.g., ALMOST).
4. **Trio**: A word that contains exactly three of the same letter, with no other letters paired (e.g., LETTERS).
5. **Duo**: A word that contains exactly two of the same letter, with no other letters paired (e.g., HELLO).
6. **Standard**: A word that does not fit any of the higher categories.

## Installation

To run the Word Duel game, ensure you have Python installed on your machine. You can install the required dependencies by running:

```
pip install -r requirements.txt
```

## Usage

To play the game, run the following command:

```
python src/word_duel.py < input.txt
```

Replace `input.txt` with the path to your input file containing pairs of words.

## Testing

The project includes a set of test cases located in the `tests/cases.txt` file. You can use these test cases to validate the functionality of the `word_duel.py` script.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.