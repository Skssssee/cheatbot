const dictionary = [
    "apple", "banana", "grape", "orange", "mango", "peach", "pear", "plum", "kiwi", "melon",
    "strawberry", "blueberry", "raspberry", "blackberry", "pineapple", "coconut", "papaya",
    "apricot", "pomegranate", "watermelon", "tangerine", "lime", "lemon", "cherry", "fig",
    "date", "nectarine", "passionfruit", "guava", "dragonfruit", "cantaloupe", "honeydew","modeling"," hello"
    
];

function suggestWords() {
    const input = document.getElementById('wordInput').value.toLowerCase();
    const suggestionList = document.getElementById('suggestionList');
    suggestionList.innerHTML = ''; // Clear previous suggestions

    if (input.length === 0) {
        return; // No input, no suggestions
    }

    const suggestions = dictionary.filter(word => word.startsWith(input));

    if (suggestions.length > 0) {
        suggestions.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            suggestionList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No suggestions found.';
        suggestionList.appendChild(li);
    }
}
