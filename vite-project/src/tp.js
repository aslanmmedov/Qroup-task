
class VacancyData {
    constructor() {
      this.vacancies = [];
    }
  
 
    setVacancies(data) {
      this.vacancies = data;
      displayVacancies(this.vacancies);
    }
  

    getVacancies() {
      return this.vacancies;
    }
  
 
    searchVacancies(query) {
      return this.vacancies.filter(vacancy =>
        vacancy.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  
   
    sortVacanciesAsc() {
      return this.vacancies.sort((a, b) => {
        const salaryA = parseSalary(a.salary);
        const salaryB = parseSalary(b.salary);
        return salaryA - salaryB;
      });
    }
  
    
    sortVacanciesDesc() {
      return this.vacancies.sort((a, b) => {
        const salaryA = parseSalary(a.salary);
        const salaryB = parseSalary(b.salary);
        return salaryB - salaryA;
      });
    }
  
 
    filterBySalaryRange(range) {
      if (!range) return this.vacancies;
  
      const [minSalary, maxSalary] = range.split('-').map(Number);
      return this.vacancies.filter(vacancy => {
        const salary = parseSalary(vacancy.salary);
        return salary >= minSalary && salary <= maxSalary;
      });
    }
  }
  

  function parseSalary(salaryStr) {
    const salaryRange = salaryStr.split('-');
    return parseInt(salaryRange[0].replace(' AZN', '').trim(), 10);
  }
  
 
  async function fetchVacancies() {
    try {
      const response = await fetch('http://localhost:8000/vacancies');
      const data = await response.json();
      vacancyData.setVacancies(data); 
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  }
  

  function createCard(vacancy) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const title = document.createElement('h3');
    title.textContent = vacancy.title;
    card.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = vacancy.description;
    card.appendChild(description);
  
    const salary = document.createElement('p');
    salary.innerHTML = `<span>Salary:</span> ${vacancy.salary}`;
    card.appendChild(salary);
  
    const employmentType = document.createElement('p');
    employmentType.innerHTML = `<span>Employment Type:</span> ${vacancy.employmentType}`;
    card.appendChild(employmentType);
  
    return card;
  }
  
  function displayVacancies(vacancies) {
    const vacanciesContainer = document.getElementById('vacancies-container');
    vacanciesContainer.innerHTML = ''; 
    vacancies.forEach(vacancy => {
      const card = createCard(vacancy);
      vacanciesContainer.appendChild(card);
    });
  }
  

  const vacancyData = new VacancyData();
  
  document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value;
    const filteredVacancies = vacancyData.searchVacancies(query);
    displayVacancies(filteredVacancies);
  });

 
  
 
  document.getElementById('salary-select').addEventListener('change', (event) => {
    const selectedSalaryRange = event.target.value;
    const filteredVacancies = vacancyData.filterBySalaryRange(selectedSalaryRange);
    displayVacancies(filteredVacancies);
  });
  
  
  fetchVacancies();
  
  