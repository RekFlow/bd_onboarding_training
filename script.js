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
    "Unique Selling Proposition": `
        <ul>
            <li>In-Home Addiction Treatment (IHAT) model</li>
            <li>"Recover Where You Live" philosophy</li>
            <li>Higher completion rates vs. industry average</li>
            <li>Minimizes disruption to clients' daily lives</li>
            <li>Personalized care in a familiar environment</li>
            <li>Family involvement in the recovery process</li>
            <li>Addresses triggers in the home environment</li>
        </ul>
    `,
    "Service Offerings": `
        <ul>
            <li><strong>IHAT:</strong> Year-long, four-phase comprehensive program</li>
            <li><strong>Virtual Detox (Ambulatory Detox):</strong> Remote detox support with medication management</li>
            <li><strong>Medication Assisted Treatment (MAT):</strong> Combines medication with virtual therapy</li>
            <li><strong>Family Systems Therapy:</strong> Involves family in the recovery process</li>
            <li><strong>Alumni Program:</strong> Ongoing support post-treatment</li>
        </ul>
    `,
    "Target Market": `
        <ul>
            <li>Adults with substance use disorders in 11 U.S. states</li>
            <li>Specific communities: LGBTQ+, first responders, individuals with co-occurring disorders</li>
            <li>Key partnerships: Healthcare providers, insurers, employers</li>
            <li>Families affected by addiction</li>
        </ul>
    `,
    "Market Position": `
        <ul>
            <li>Leader in in-home addiction treatment</li>
            <li>Joint Commission Gold Seal of Approval®</li>
            <li>Key differentiator: In-home vs. traditional facilities</li>
            <li>Collaboration with major healthcare providers and insurers</li>
        </ul>
    `,
    "Business Development Strategy": `
        <ul>
            <li>Expansion to new states and regions</li>
            <li>Integration with broader healthcare networks</li>
            <li>Focus on strategic partnerships</li>
            <li>Increasing public awareness about in-home addiction treatment</li>
        </ul>
    `,
    "Success Metrics": `
        <ul>
            <li>63% completion rate at 24 weeks (vs. 25-30% industry average)</li>
            <li>78% of participants drug and alcohol-free at 90 days</li>
            <li>35% reduction in emergency department admissions 6-12 months post-treatment</li>
            <li>87% of clients report engagement with a Primary Care Provider six months post-treatment</li>
        </ul>
    `,
    "Partnerships": `
        <ul>
            <li><strong>Current:</strong> Major health insurers (BlueCross BlueShield, Tufts Health, Carelon Behavioral Health, Anthem)</li>
            <li><strong>Potential:</strong> Government entities, Accountable Care Organizations (ACOs), physician groups</li>
            <li>Community organization collaborations</li>
            <li>Family support services</li>
        </ul>
    `,
    "Compliance & Ethics": `
        <ul>
            <li>HIPAA compliant</li>
            <li>Secure data protection measures</li>
            <li>Commitment to client privacy throughout practice and care delivery</li>
        </ul>
    `,
    "Resources & Tools": `
        <ul>
            <li>Online insurance verification</li>
            <li>Secure telehealth platform</li>
            <li>Educational resources for clients and providers</li>
        </ul>
    `,
    "Treatment Team Structure": `
        <ul>
            <li><strong>Psychiatric Provider:</strong> Conducts evaluations and manages medications</li>
            <li><strong>Care Coordinator:</strong> Develops and maintains treatment plans, coordinates care</li>
            <li><strong>Family Education Facilitator:</strong> Supports and educates family members</li>
            <li><strong>Internal Psychotherapist:</strong> Offers telehealth therapy focused on substance use disorders</li>
            <li><strong>Family Wellness Therapist:</strong> Works with the family system to address relational issues</li>
            <li><strong>Client Recovery Advisors (CRAs):</strong> Provide weekly in-home visits and support</li>
        </ul>
    `,
    "Insurance and Accessibility": `
        <ul>
            <li>In-network provider for several major health insurance companies, including:
                <ul>
                    <li>BlueCross BlueShield</li>
                    <li>Tufts Health</li>
                    <li>Carelon Behavioral Health (formerly Beacon Health Options)</li>
                    <li>Anthem</li>
                </ul>
            </li>
            <li>Does not accept Medicaid or Medicare</li>
            <li>Offers private pay and financing options to improve accessibility</li>
            <li>Provides an online insurance verification form for potential clients to check their coverage</li>
        </ul>
    `,
    "Operating States": `
        <p>Aware Recovery Care currently operates in the following 11 states:</p>
        <ol>
            <li>Connecticut</li>
            <li>Florida</li>
            <li>Indiana</li>
            <li>Kentucky</li>
            <li>Maine</li>
            <li>Massachusetts</li>
            <li>New Hampshire</li>
            <li>Ohio</li>
            <li>Rhode Island</li>
            <li>Virginia</li>
            <li>New York (planned expansion)</li>
        </ol>
        <p>Note: The company has plans to expand its services to additional states in the future.</p>
    `,
    "Recent Developments": `
        <ul>
            <li>Expansion of Virtual Detox and MAT programs into new states</li>
            <li>Appointment of George Merhi as Chief Financial Officer</li>
            <li>Increasing media attention from outlets such as NBC News and NPR</li>
        </ul>
    `
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