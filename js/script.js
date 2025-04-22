document.addEventListener('DOMContentLoaded', function() {
  // Reference to important elements
  const tableBody = document.getElementById('category-table-body');
  const cardView = document.getElementById('card-view');
  const searchInput = document.getElementById('search-input');
  const tableViewBtn = document.getElementById('table-view-btn');
  const cardViewBtn = document.getElementById('card-view-btn');
  
  // Initialize the table view
  initializeTableView();
  
  // Initialize the card view
  initializeCardView();
  
  // Add event listener for search filtering
  searchInput.addEventListener('input', filterCategories);
  
  // Add event listeners for view toggling
  tableViewBtn.addEventListener('click', () => {
    tableViewBtn.classList.add('active');
    cardViewBtn.classList.remove('active');
    document.getElementById('table-container').style.display = 'block';
    cardView.style.display = 'none';
  });
  
  cardViewBtn.addEventListener('click', () => {
    cardViewBtn.classList.add('active');
    tableViewBtn.classList.remove('active');
    document.getElementById('table-container').style.display = 'none';
    cardView.style.display = 'grid';
  });
  
  function initializeTableView() {
    // Clear existing content
    tableBody.innerHTML = '';
    
    // Loop through each category and create rows
    Object.entries(categoriesData).forEach(([category, data]) => {
      // Create category row
      const categoryRow = document.createElement('tr');
      categoryRow.className = 'category-row';
      categoryRow.dataset.category = category;
      categoryRow.innerHTML = `<td>${category} <span class="toggle-icon">+</span></td>`;
      
      // Add click event for expanding/collapsing
      categoryRow.addEventListener('click', function() {
        this.classList.toggle('expanded');
        this.querySelector('.toggle-icon').textContent = 
          this.classList.contains('expanded') ? '-' : '+';
      });
      
      tableBody.appendChild(categoryRow);
      
      // Create subcategories row
      const subcategoryRow = document.createElement('tr');
      subcategoryRow.className = 'subcategory-row';
      subcategoryRow.dataset.category = category;
      
      let subcategoryContent = '<td><div class="subcategory-head">Subcategories:</div><ul>';
      data.subcategories.forEach(subcategory => {
        subcategoryContent += `<li>${subcategory}</li>`;
      });
      subcategoryContent += '</ul></td>';
      
      subcategoryRow.innerHTML = subcategoryContent;
      tableBody.appendChild(subcategoryRow);
      
      // Create gender filters row if available
      if (data.genderFilters && data.genderFilters.length > 0) {
        const genderRow = document.createElement('tr');
        genderRow.className = 'gender-filter-row';
        genderRow.dataset.category = category;
        
        let genderContent = '<td><div class="gender-filter-head">Gender Filters:</div><div>';
        data.genderFilters.forEach(gender => {
          genderContent += `<span class="badge gender">${gender}</span>`;
        });
        genderContent += '</div></td>';
        
        genderRow.innerHTML = genderContent;
        tableBody.appendChild(genderRow);
      }
      
      // Create filters row
      const filtersRow = document.createElement('tr');
      filtersRow.className = 'filter-row';
      filtersRow.dataset.category = category;
      
      let filtersContent = '<td><div class="filter-head">Filters:</div><ul>';
      data.filters.forEach(filter => {
        filtersContent += `<li>${filter}</li>`;
      });
      filtersContent += '</ul></td>';
      
      filtersRow.innerHTML = filtersContent;
      tableBody.appendChild(filtersRow);
    });
  }
  
  function initializeCardView() {
    // Clear existing content
    cardView.innerHTML = '';
    
    // Loop through each category and create cards
    Object.entries(categoriesData).forEach(([category, data]) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.category = category;
      
      let cardHTML = `
        <div class="card-header">
          ${category}
          <button class="card-toggle" aria-label="Toggle card">↓</button>
        </div>
        <div class="card-body">
          <div class="card-section">
            <h4>Subcategories</h4>
            <ul>
      `;
      
      // Add subcategories
      data.subcategories.forEach(subcategory => {
        cardHTML += `<li>${subcategory}</li>`;
      });
      
      cardHTML += `
            </ul>
          </div>
      `;
      
      // Add gender filters if available
      if (data.genderFilters && data.genderFilters.length > 0) {
        cardHTML += `
          <div class="card-section">
            <h4>Gender Filters</h4>
            <div>
        `;
        
        data.genderFilters.forEach(gender => {
          cardHTML += `<span class="badge gender">${gender}</span>`;
        });
        
        cardHTML += `
            </div>
          </div>
        `;
      }
      
      // Add filters
      cardHTML += `
        <div class="card-section">
          <h4>Filters</h4>
          <ul>
      `;
      
      data.filters.forEach(filter => {
        cardHTML += `<li>${filter}</li>`;
      });
      
      cardHTML += `
          </ul>
        </div>
      </div>
      `;
      
      card.innerHTML = cardHTML;
      
      // Add toggle functionality to card
      card.querySelector('.card-toggle').addEventListener('click', function(e) {
        e.stopPropagation();
        const cardBody = this.parentElement.nextElementSibling;
        cardBody.style.display = cardBody.style.display === 'none' ? 'block' : 'none';
        this.textContent = cardBody.style.display === 'none' ? '↓' : '↑';
      });
      
      cardView.appendChild(card);
    });
  }
  
  function filterCategories() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Filter table view
    const tableRows = document.querySelectorAll('#category-table-body tr');
    tableRows.forEach(row => {
      const category = row.dataset.category;
      
      if (row.classList.contains('category-row')) {
        const matches = category.toLowerCase().includes(searchTerm) || 
                       categoriesData[category].subcategories.some(sub => sub.toLowerCase().includes(searchTerm)) ||
                       (categoriesData[category].genderFilters && categoriesData[category].genderFilters.some(gender => gender.toLowerCase().includes(searchTerm))) ||
                       categoriesData[category].filters.some(filter => filter.toLowerCase().includes(searchTerm));
        
        row.style.display = matches ? '' : 'none';
      } else {
        // Show detail rows only if their category is visible and expanded
        const categoryRow = document.querySelector(`.category-row[data-category="${category}"]`);
        row.style.display = (categoryRow.style.display !== 'none' && categoryRow.classList.contains('expanded')) ? '' : 'none';
      }
    });
    
    // Filter card view
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const category = card.dataset.category;
      
      const matches = category.toLowerCase().includes(searchTerm) || 
                     categoriesData[category].subcategories.some(sub => sub.toLowerCase().includes(searchTerm)) ||
                     (categoriesData[category].genderFilters && categoriesData[category].genderFilters.some(gender => gender.toLowerCase().includes(searchTerm))) ||
                     categoriesData[category].filters.some(filter => filter.toLowerCase().includes(searchTerm));
      
      card.style.display = matches ? '' : 'none';
    });
  }
  
  // Add global filters to the interface
  const globalFiltersContainer = document.getElementById('global-filters-list');
  globalFilters.forEach(filter => {
    const li = document.createElement('li');
    li.textContent = filter;
    globalFiltersContainer.appendChild(li);
  });
});