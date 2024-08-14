// Onboarding guide content
const guideContent = {
    "Company Overview": `
        <ul>
            <li><strong>Mission:</strong> Delivering compassionate in-home addiction care</li>
            <li><strong>Founded:</strong> 2011, in collaboration with Yale physicians</li>
            <li><strong>Core values:</strong> Patient-centered, inclusive, accessible, holistic treatment</li>
            <li><strong>Headquarters:</strong> Wallingford, Connecticut</li>
            <li><strong>Operating in:</strong> 11 states across the U.S.</li>
            <li><strong>Recognition:</strong> The Joint Commission's Gold Seal of Approval® for Home Care and Behavioral Health Care</li>
        </ul>
    `,
    // Add other sections here...
};

// Function to generate table of contents
function generateTableOfContents() {
    const toc = document.getElementById('table-of-contents');
    const ul = document.createElement('ul');
    
    for (const section in guideContent) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = section;
        a.href = `#${section.toLowerCase().replace(/ /g, '-')}`;
        li.appendChild(a);
        ul.appendChild(li);
    }
    
    toc.appendChild(ul);
}

// Function to generate content
function generateContent() {
    const content = document.getElementById('content');
    
    for (const [section, text] of Object.entries(guideContent)) {
        const sectionElem = document.createElement('section');
        sectionElem.id = section.toLowerCase().replace(/ /g, '-');
        
        const h2 = document.createElement('h2');
        h2.textContent = section;
        sectionElem.appendChild(h2);
        
        sectionElem.innerHTML += text;
        content.appendChild(sectionElem);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateTableOfContents();
    generateContent();
});