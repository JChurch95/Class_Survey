// Arrays
const topics = ['HTML', 'CSS', 'JAVASCRIPT'];
const rankings = [
    { name: 'Awesome', value: 5 },
    { name: 'Great', value: 4 },
    { name: 'Good', value: 3 },
    { name: 'Okay', value: 2 },
    { name: 'Poor', value: 1 },
    { name: 'Unranked', value: 0 }
];

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM ready... I dont have friends, I got FAMILY');
    const rankingForm = document.querySelector('#rankingForm');
    
    if (rankingForm) {
        generateForm();
        rankingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitForm();
        });
    } else {
        console.error("Could not find element with id 'rankingForm'");
    }
});

// Function to generate the form
function generateForm() {
    console.log("Generating form");
    const form = document.getElementById('rankingForm');
    if (!form) {
        console.error("Could not find element with id 'rankingForm'");
        return;
    }
    topics.forEach(topic => {
        const field = document.createElement('div');
        field.className = 'field';
        field.innerHTML = `
            <label class="label">${topic}</label>
            <div class="control">
                <div class="select">
                    <select name="${topic.toLowerCase()}">
                        <option value="" selected disabled>Select a ranking</option>
                        ${rankings.map(rank => `<option value="${rank.value}">${rank.name}</option>`).join('')}
                    </select>
                </div>
            </div>
        `;
        form.appendChild(field);
    });
    console.log("Form generation complete");
}

// Function to handle form submission
function submitForm() {
    const form = document.getElementById('rankingForm');
    const formData = new FormData(form);
    const results = {};
    for (let [key, value] of formData.entries()) {
        results[key] = parseInt(value);
    }
    console.log('Rankings submitted:', results);
    displayResults(results);
}

// Function to display results
function displayResults(results) {
    let resultsContainer = document.querySelector('.results-container');
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.className = 'results-container';
        document.querySelector('.container').appendChild(resultsContainer);
    } else {
        resultsContainer.innerHTML = ''; // Clear previous results
    }
    
    Object.entries(results).forEach(([topic, value]) => {
        const resultLine = document.createElement('p');
        resultLine.className = 'result-line';
        const rankingName = rankings.find(rank => rank.value === value)?.name || 'Unknown';
        resultLine.textContent = `I am ${rankingName.toLowerCase()} at ${topic.toUpperCase()}`;
        resultsContainer.appendChild(resultLine);
    });
}