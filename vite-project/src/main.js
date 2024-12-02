
const vacancies = [
    {
      "id": 1,
      "title": "Frontend Developer",
      "companyId": 1,
      "description": "We are looking for a skilled Frontend Developer with experience in React and TypeScript.",
      "salary": "2000-3000 AZN",
      "postedAt": "2024-11-30T10:00:00Z",
      "expiresAt": "2024-12-31T23:59:59Z",
      "employmentType": "Full-time",
      "isActive": true
    },
    {
        "id": 2,
        "title": "Backend Developer",
        "companyId": 2,
        "description": "We are looking for a skilled Backend Developer with experience in React and TypeScript.",
        "salary": "1500-2000 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },
      {
        "id": 3,
        "title": "Software Engineer",
        "companyId":3,
        "description": "They are able to create software for all kinds of systems, such as operating system software, network distribution.",
        "salary": "1500-2500 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },
      {
      "id": 4,
      "title": "System Administrator ",
      "companyId":4,
      "description": "System administrators manage and support computer networks of companies and organizations.",
      "salary": "1000-2000 AZN",
      "postedAt": "2024-11-30T10:00:00Z",
      "expiresAt": "2024-12-31T23:59:59Z",
      "employmentType": "Full-time",
      "isActive": true
    },
    {
        "id": 5,
        "title": "Data Analysis",
        "companyId":5,
        "description": "S process of analyzing data and making business solutions and decisions based on these analyses.",
        "salary": "2000-3500 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },
      {
        "id": 6,
        "title": "IT Security",
        "companyId":6,
        "description": " Various tasks related to data protection, cyber attack prevention, network security and privacy are performed",
        "salary": "1500-2500 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },
      {
        "id": 7,
        "title": "Mobile Development  ",
        "companyId":7,
        "description": " This field requires knowledge and skills to work on mobile platforms such as Android and iOS.",
        "salary": "2500-3000 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },
    
      {
        "id": 8,
        "title": "Database Management  ",
        "companyId":8,
        "description": " This field requires working with Oracle, MySQL, Microsoft SQL Server and other database technologies.",
        "salary": "2000-2500 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },
      {
        "id": 9,
        "title": "IT Management  ",
        "companyId":9,
        "description": "  Information infrastructure of companies and organizations, user support and technical problem solving.",
        "salary": "2500-3000 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },
      {
        "id": 10,
        "title": "Cyber Security  ",
        "companyId":10,
        "description": "  Protects data, devices, and networks from attackers, criminals, and anyone harming a system. ",
        "salary": "200-2500 AZN",
        "postedAt": "2024-11-30T10:00:00Z",
        "expiresAt": "2024-12-31T23:59:59Z",
        "employmentType": "Full-time",
        "isActive": true
      },

  ];
  
  function displayVacancies() {
    const container = document.getElementById("vacancies-container");
    
    vacancies.forEach(vacancy => {
      const vacancyCard = document.createElement("div");
      vacancyCard.classList.add("vacancy-card");
  
      const vacancyTitle = document.createElement("h3");
      vacancyTitle.classList.add("vacancy-title");
      vacancyTitle.textContent = vacancy.title;
  
      const vacancyDescription = document.createElement("p");
      vacancyDescription.classList.add("vacancy-description");
      vacancyDescription.textContent = vacancy.description;
  
      const vacancyDetails = document.createElement("div");
      vacancyDetails.classList.add("vacancy-details");
  
      const salary = document.createElement("span");
      salary.classList.add("salary");
      salary.textContent = `Salary: ${vacancy.salary}`;
  
      const employmentType = document.createElement("span");
      employmentType.classList.add("employment-type");
      employmentType.textContent = `Employment Type: ${vacancy.employmentType}`;
  
      const postedAt = document.createElement("span");
      postedAt.classList.add("posted-at");
      postedAt.textContent = `Posted on: ${new Date(vacancy.postedAt).toLocaleDateString()}`;
  
      const applyButton = document.createElement("button");
      applyButton.classList.add("apply-button");
      applyButton.textContent = "Apply Now";
      applyButton.onclick = function() {
        alert(`You applied for the position: ${vacancy.title}`);
      };
  
    
      vacancyDetails.appendChild(salary);
      vacancyDetails.appendChild(employmentType);
      vacancyDetails.appendChild(postedAt);
  
      vacancyCard.appendChild(vacancyTitle);
      vacancyCard.appendChild(vacancyDescription);
      vacancyCard.appendChild(vacancyDetails);
      vacancyCard.appendChild(applyButton);
  
      container.appendChild(vacancyCard);
    });
  }
  

  displayVacancies();
  