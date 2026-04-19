const API_URL = 'http://localhost:3000';

const API = {
  
  signup: async (name, email, password) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    return await response.json();
  },

  login: async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return await response.json();
  },

  
  getFurniture: async () => {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  },

  createFurniture: async (data) => {
    const response = await fetch(`${API_URL}/add-product`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  updateFurniture: async (id, data) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  deleteFurniture: async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  
  getInventory: async () => {
    const response = await fetch(`${API_URL}/inventory`);
    return await response.json();
  },

  createInventory: async (data) => {
    const response = await fetch(`${API_URL}/inventory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  updateInventory: async (id, data) => {
    const response = await fetch(`${API_URL}/inventory/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  deleteInventory: async (id) => {
    const response = await fetch(`${API_URL}/inventory/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  
  getDeliveries: async () => {
    const response = await fetch(`${API_URL}/deliveries`);
    return await response.json();
  },

  trackDelivery: async (refCode) => {
    const response = await fetch(`${API_URL}/deliveries/track/${refCode}`);
    return await response.json();
  },

  createDelivery: async (data) => {
    const response = await fetch(`${API_URL}/deliveries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  updateDelivery: async (id, data) => {
    const response = await fetch(`${API_URL}/deliveries/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  deleteDelivery: async (id) => {
    const response = await fetch(`${API_URL}/deliveries/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  
  getSales: async () => {
    const response = await fetch(`${API_URL}/sales`);
    return await response.json();
  },

  createSales: async (data) => {
    const response = await fetch(`${API_URL}/sales`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  deleteSales: async (id) => {
    const response = await fetch(`${API_URL}/sales/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  
  getReviews: async () => {
    const response = await fetch(`${API_URL}/reviews`);
    return await response.json();
  },

  createReview: async (data) => {
    const response = await fetch(`${API_URL}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  deleteReview: async (id) => {
    const response = await fetch(`${API_URL}/reviews/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  
  getStaff: async () => {
    const response = await fetch(`${API_URL}/staff`);
    return await response.json();
  },

  createStaff: async (data) => {
    const response = await fetch(`${API_URL}/staff`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  deleteStaff: async (id) => {
    const response = await fetch(`${API_URL}/staff/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  },

  
  getBusinessInfo: async () => {
    const response = await fetch(`${API_URL}/business-info`);
    return await response.json();
  },

  saveBusinessInfo: async (data) => {
    const response = await fetch(`${API_URL}/business-info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  
  getContactInfo: async () => {
    const response = await fetch(`${API_URL}/contact-info`);
    return await response.json();
  },

  saveContactInfo: async (data) => {
    const response = await fetch(`${API_URL}/contact-info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  }
};


function formatCurrency(amount) {
  const num = parseFloat(amount);
  if (isNaN(num)) return '₱0.00';
  return '₱' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatDateTime(dateStr) {
  if (!dateStr) return 'N/A';
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { 
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}


let currentFurnitureImage = null;


function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


async function handlePublicTrackDelivery(event) {
  event.preventDefault();
  
  const refCodeInput = document.getElementById('publicTrackCode');
  const resultDiv = document.getElementById('publicTrackResult');
  
  if (!refCodeInput || !resultDiv) {
    console.error('Required elements not found');
    return;
  }
  
  const refCode = refCodeInput.value.trim();
  
  if (!refCode) {
    alert('❌ Please enter a reference code');
    return;
  }
  
  try {
    const result = await API.trackDelivery(refCode);
    
    if (result.success && result.data) {
      const delivery = result.data;
      
      
      const deliveryDate = new Date(delivery.delivery_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      
      resultDiv.innerHTML = `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1rem;">
          <h3 style="color: #166534; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">
            ✅ Delivery Found
          </h3>
          
          <div style="display: grid; gap: 0.75rem;">
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 0.5rem;">
              <span style="font-weight: 600; color: #374151;">Reference Code:</span>
              <span style="color: #6b7280;">${delivery.ref_code}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 0.5rem;">
              <span style="font-weight: 600; color: #374151;">Customer Name:</span>
              <span style="color: #6b7280;">${delivery.customer_name}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 0.5rem;">
              <span style="font-weight: 600; color: #374151;">Delivery Address:</span>
              <span style="color: #6b7280;">${delivery.address}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 0.5rem;">
              <span style="font-weight: 600; color: #374151;">Delivery Date:</span>
              <span style="color: #6b7280;">${deliveryDate}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 0.5rem;">
              <span style="font-weight: 600; color: #374151;">Status:</span>
              <span style="padding: 0.25rem 0.75rem; background: #4ECDC4; color: white; border-radius: 9999px; display: inline-block; font-size: 0.875rem; width: fit-content;">
                ${delivery.status || 'Scheduled'}
              </span>
            </div>
          </div>
        </div>
      `;
      
      resultDiv.classList.remove('hidden');
    } else {
      
      resultDiv.innerHTML = `
        <div style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 0.5rem; padding: 1.5rem;">
          <h3 style="color: #991b1b; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">
            ❌ Delivery Not Found
          </h3>
          <p style="color: #6b7280;">
            No delivery found with reference code: <strong>${refCode}</strong>
          </p>
          <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;">
            Please check the reference code and try again.
          </p>
        </div>
      `;
      resultDiv.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Track delivery error:', error);
    resultDiv.innerHTML = `
      <div style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 0.5rem; padding: 1.5rem;">
        <h3 style="color: #991b1b; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">
          ❌ Error
        </h3>
        <p style="color: #6b7280;">
          Failed to track delivery. Please try again later.
        </p>
      </div>
    `;
    resultDiv.classList.remove('hidden');
  }
}



async function handleSignup(event) {
  event.preventDefault();
  
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  try {
    const result = await API.signup(name, email, password);
    
    if (result.success) {
      alert('✅ Account created successfully! Please login.');
      document.getElementById('signupForm').reset();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('❌ Failed to create account. Please check your connection.');
  }
}


async function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const result = await API.login(email, password);
    
    if (result.success) {
      sessionStorage.setItem('currentUser', JSON.stringify(result.user));
      
      alert('✅ Login successful!');
      
      if (email === 'admin@admin.com') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'staff.html';
      }
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('❌ Failed to login. Please check your connection and ensure backend is running.');
  }
}


function handleLogout() {
  sessionStorage.removeItem('currentUser');
  window.location.href = 'login.html';
}



let editingFurnitureId = null;


async function loadFurnitureList() {
  try {
    const result = await API.getFurniture();
    
    if (result.success) {
      const tbody = document.getElementById('furnitureList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #9ca3af;">No furniture items found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const row = `
          <tr>
            <td>
              ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 0.375rem;">` : '<span style="color: #9ca3af;">No image</span>'}
            </td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.material || 'N/A'}</td>
            <td>${item.dimensions || 'N/A'}</td>
            <td>${formatCurrency(item.price)}</td>
            <td>
              <button class="action-btn edit" onclick="editFurniture(${item.id})">Edit</button>
              <button class="action-btn delete" onclick="deleteFurniture(${item.id})">Delete</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load furniture error:', error);
    alert('❌ Failed to load furniture list');
  }
}

let allFurnitureProducts = []; 


async function loadPublicFurnitureList() {
  try {
    const result = await API.getFurniture();
    
    if (result.success) {
      allFurnitureProducts = result.data;
      displayFurnitureProducts(allFurnitureProducts);
    } else {
      console.error('Failed to load furniture:', result.message);
      displayNoProducts();
    }
  } catch (error) {
    console.error('Load furniture error:', error);
    displayNoProducts();
  }
}


function displayFurnitureProducts(products) {
  const container = document.getElementById('productsContainer');
  const productCount = document.getElementById('productCount');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  if (products.length === 0) {
    displayNoProducts();
    return;
  }
  
  
  if (productCount) {
    productCount.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;
  }
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cursor = 'pointer'; 
    card.style.transition = 'transform 0.2s, box-shadow 0.2s'; // Add smooth transition
    
    card.innerHTML = `
      <img 
        src="${product.image || 'placeholder-furniture.jpg'}" 
        alt="${product.name}" 
        class="product-image"
        onerror="this.src='placeholder-furniture.jpg'"
      >
      <div style="padding: 1.5rem;">
        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; color: #1f2937;">
          ${product.name}
        </h3>
        <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.5rem;">
          ${product.category}
        </p>
        ${product.material ? `
          <p style="color: #9ca3af; font-size: 0.75rem; margin-bottom: 0.75rem;">
            Material: ${product.material}
          </p>
        ` : ''}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
          <span style="font-size: 1.25rem; font-weight: 700; color: #4ECDC4;">
            ${formatCurrency(product.price)}
          </span>
        </div>
        ${product.description ? `
          <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; line-height: 1.5;">
            ${product.description.substring(0, 80)}${product.description.length > 80 ? '...' : ''}
          </p>
        ` : ''}
      </div>
    `;
    
    
    card.addEventListener('click', () => {
      window.location.href = `furniture-detail.html?id=${product.id}`;
    });
    
    
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });
    
    container.appendChild(card);
  });
}

L
function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}


async function loadFurnitureDetail() {
  const productId = getProductIdFromURL();
  
  if (!productId) {
    alert('❌ No product ID provided');
    window.location.href = 'furniture-list.html';
    return;
  }
  
  try {
    
    const response = await fetch(`${API_URL}/products/${productId}`);
    const result = await response.json();
    
    if (result.success && result.data) {
      displayFurnitureDetail(result.data);
    } else {
      alert('❌ Product not found');
      window.location.href = 'furniture-list.html';
    }
  } catch (error) {
    console.error('Load furniture detail error:', error);
    alert('❌ Failed to load product details');
    window.location.href = 'furniture-list.html';
  }
}


function displayFurnitureDetail(product) {
  
  const productImage = document.getElementById('productImage');
  if (productImage) {
    productImage.src = product.image || 'placeholder-furniture.jpg';
    productImage.alt = product.name;
    productImage.onerror = function() {
      this.src = 'placeholder-furniture.jpg';
    };
  }
  
  const productName = document.getElementById('productName');
  if (productName) {
    productName.textContent = product.name;
  }
  
  
  const productPrice = document.getElementById('productPrice');
  if (productPrice) {
    productPrice.textContent = formatCurrency(product.price);
  }
  
  
  const productCategory = document.getElementById('productCategory');
  if (productCategory) {
    productCategory.textContent = product.category || 'N/A';
  }
  
 
  const productMaterial = document.getElementById('productMaterial');
  if (productMaterial) {
    productMaterial.textContent = product.material || 'N/A';
  }
  
  
  const productDimensions = document.getElementById('productDimensions');
  if (productDimensions) {
    productDimensions.textContent = product.dimensions || 'N/A';
  }
  
  
  const productDescription = document.getElementById('productDescription');
  if (productDescription) {
    productDescription.textContent = product.description || 'No description available.';
  }
  
  
  document.title = `${product.name} - ECL FURNITURE MART`;
}



function displayNoProducts() {
  const container = document.getElementById('productsContainer');
  const productCount = document.getElementById('productCount');
  
  if (container) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #9ca3af;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 1rem;">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: #4b5563;">No Furniture Found</h3>
        <p style="color: #9ca3af;">Try adjusting your filters or check back later.</p>
      </div>
    `;
  }
  
  if (productCount) {
    productCount.textContent = 'Showing 0 products';
  }
}


function filterAndSortProducts() {
  let filteredProducts = [...allFurnitureProducts];
  
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value.trim()) {
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      (p.description && p.description.toLowerCase().includes(searchTerm))
    );
  }
  
  
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter && categoryFilter.value !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter.value);
  }
  
  
  const priceFilter = document.getElementById('priceFilter');
  if (priceFilter && priceFilter.value !== 'all') {
    const priceRange = priceFilter.value;
    if (priceRange === '0-10000') {
      filteredProducts = filteredProducts.filter(p => p.price < 10000);
    } else if (priceRange === '10000-20000') {
      filteredProducts = filteredProducts.filter(p => p.price >= 10000 && p.price <= 20000);
    } else if (priceRange === '20000-50000') {
      filteredProducts = filteredProducts.filter(p => p.price >= 20000 && p.price <= 50000);
    } else if (priceRange === '50000+') {
      filteredProducts = filteredProducts.filter(p => p.price > 50000);
    }
  }
  
  
  const sortFilter = document.getElementById('sortFilter');
  if (sortFilter) {
    const sortValue = sortFilter.value;
    if (sortValue === 'name-asc') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'name-desc') {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
  
  displayFurnitureProducts(filteredProducts);
}


function initFurnitureListFilters() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');
  const sortFilter = document.getElementById('sortFilter');
  
  if (searchInput) {
    searchInput.addEventListener('input', filterAndSortProducts);
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterAndSortProducts);
  }
  
  if (priceFilter) {
    priceFilter.addEventListener('change', filterAndSortProducts);
  }
  
  if (sortFilter) {
    sortFilter.addEventListener('change', filterAndSortProducts);
  }
}

function openAddFurnitureModal() {
  editingFurnitureId = null;
  document.getElementById('furnitureModalTitle').textContent = 'Add New Furniture';
  document.getElementById('furnitureForm').reset();
  currentFurnitureImage = null;
  const preview = document.getElementById('furnitureImagePreview');
  if (preview) preview.style.display = 'none';
  showModal('furnitureModal');
}


function handleFurnitureImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file');
    event.target.value = '';
    return;
  }
  
  if (file.size > 5 * 1024 * 1024) {
    alert('Image size should not exceed 5MB');
    event.target.value = '';
    return;
  }
  
  fileToBase64(file).then(base64String => {
    currentFurnitureImage = base64String;
    const preview = document.getElementById('furnitureImagePreview');
    const previewImg = document.getElementById('furnitureImagePreviewImg');
    if (preview && previewImg) {
      previewImg.src = base64String;
      preview.style.display = 'block';
    }
  }).catch(error => {
    console.error('Error reading file:', error);
    alert('Error reading file');
  });
}


async function handleFurnitureSubmit(event) {
  event.preventDefault();
  
  const data = {
    name: document.getElementById('furnitureName').value,
    category: document.getElementById('furnitureCategory').value,
    price: parseFloat(document.getElementById('furniturePrice').value),
    material: document.getElementById('furnitureMaterial').value,
    dimensions: document.getElementById('furnitureDimensions').value,
    description: document.getElementById('furnitureDescription').value,
    image: currentFurnitureImage || ''
  };

  try {
    let result;
    if (editingFurnitureId) {
      result = await API.updateFurniture(editingFurnitureId, data);
    } else {
      result = await API.createFurniture(data);
    }
    
    if (result.success) {
      alert('✅ ' + result.message);
      hideModal('furnitureModal');
      loadFurnitureList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Save furniture error:', error);
    alert('❌ Failed to save furniture');
  }
}


async function editFurniture(id) {
  try {
    const result = await API.getFurniture();
    if (result.success) {
      const item = result.data.find(f => f.id === id);
      if (!item) {
        alert('Furniture not found');
        return;
      }
      
      editingFurnitureId = id;
      document.getElementById('furnitureModalTitle').textContent = 'Edit Furniture';
      document.getElementById('furnitureName').value = item.name;
      document.getElementById('furnitureCategory').value = item.category;
      document.getElementById('furniturePrice').value = item.price;
      document.getElementById('furnitureMaterial').value = item.material || '';
      document.getElementById('furnitureDimensions').value = item.dimensions || '';
      document.getElementById('furnitureDescription').value = item.description || '';
      
      currentFurnitureImage = item.image;
      if (item.image) {
        const preview = document.getElementById('furnitureImagePreview');
        const previewImg = document.getElementById('furnitureImagePreviewImg');
        if (preview && previewImg) {
          previewImg.src = item.image;
          preview.style.display = 'block';
        }
      }
      
      showModal('furnitureModal');
    }
  } catch (error) {
    console.error('Edit furniture error:', error);
    alert('❌ Failed to load furniture details');
  }
}


async function deleteFurniture(id) {
  if (!confirm('Are you sure you want to delete this furniture item?')) return;
  
  try {
    const result = await API.deleteFurniture(id);
    if (result.success) {
      alert('✅ ' + result.message);
      loadFurnitureList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Delete furniture error:', error);
    alert('❌ Failed to delete furniture');
  }
}




async function handleAboutFormSubmit(event) {
  event.preventDefault();

  const heroDesc = document.getElementById('aboutHeroDesc').value;
  const story = document.getElementById('aboutStory').value;
  const mission = document.getElementById('aboutMission').value;

  try {
    const result = await API.saveBusinessInfo({
      hero_title: 'About ECL FURNITURE MART',
      hero_description: heroDesc,
      story: story,
      mission: mission,
      return_policy: '',
      warranty_policy: '',
      delivery_policy: '',
      payment_policy: ''
    });

    if (result.success) {
      alert('✅ About page information saved to database!');
      console.log('About page saved:', result.message);
    } else {
      alert('❌ Failed to save: ' + result.message);
    }
  } catch (error) {
    console.error('Save error:', error);
    alert('❌ Failed to save business information');
  }
}


async function handleContactFormSubmit(event) {
  event.preventDefault();

  const phone = document.getElementById('contactPhone').value;
  const email = document.getElementById('contactEmail').value;
  const weekday = document.getElementById('contactWeekday').value;
  const sunday = document.getElementById('contactSunday').value;
  const address = document.getElementById('contactAddress').value;

  try {
    const result = await API.saveContactInfo({
      phone: phone,
      email: email,
      business_hours: `Mon-Sat: ${weekday}\nSunday: ${sunday}`,
      address: address
    });

    if (result.success) {
      alert('✅ Contact information saved to database!');
      console.log('Contact info saved:', result.message);
    } else {
      alert('❌ Failed to save: ' + result.message);
    }
  } catch (error) {
    console.error('Save error:', error);
    alert('❌ Failed to save contact information');
  }
}


async function loadBusinessInfo() {
  try {
    
    const businessResult = await API.getBusinessInfo();
    if (businessResult.success && businessResult.data) {
      const data = businessResult.data;
      const heroDescField = document.getElementById('aboutHeroDesc');
      const storyField = document.getElementById('aboutStory');
      const missionField = document.getElementById('aboutMission');
      const policiesField = document.getElementById('aboutPolicies');

      if (heroDescField) heroDescField.value = data.hero_description || '';
      if (storyField) storyField.value = data.story || '';
      if (missionField) missionField.value = data.mission || '';
      if (policiesField) policiesField.value = data.policies || '';
    }

    
    const contactResult = await API.getContactInfo();
    if (contactResult.success && contactResult.data) {
      const data = contactResult.data;
      const phoneField = document.getElementById('contactPhone');
      const emailField = document.getElementById('contactEmail');
      const weekdayField = document.getElementById('contactWeekday');
      const sundayField = document.getElementById('contactSunday');
      const addressField = document.getElementById('contactAddress');

      if (phoneField) phoneField.value = data.phone || '';
      if (emailField) emailField.value = data.email || '';
      if (addressField) addressField.value = data.address || '';
      
      
      if (data.business_hours) {
        const hours = data.business_hours.split('\n');
        if (weekdayField && hours[0]) {
          weekdayField.value = hours[0].replace('Mon-Sat: ', '');
        }
        if (sundayField && hours[1]) {
          sundayField.value = hours[1].replace('Sunday: ', '');
        }
      }
    }
  } catch (error) {
    console.error('Load business info error:', error);
  }
}


async function loadAboutPageContent() {
  try {
    const result = await API.getBusinessInfo();
    if (result.success && result.data) {
      const data = result.data;
      
      // Update hero description
      const heroDesc = document.getElementById('heroDescription');
      if (heroDesc && data.hero_description) {
        heroDesc.textContent = data.hero_description;
      }
      
      
      const storyContent = document.getElementById('storyContent');
      if (storyContent && data.story) {
        storyContent.innerHTML = `<p style="color: #4b5563; line-height: 1.8;">${data.story}</p>`;
      }
      
      
      const missionText = document.getElementById('missionText');
      if (missionText && data.mission) {
        missionText.textContent = data.mission;
      }

      
      const policiesGrid = document.getElementById('policiesGrid');
      if (policiesGrid && data.policies) {
        let policiesHTML = '';
        
        if (data.return_policy) {
          policiesHTML += `
            <div class="info-box">
              <h3>Return Policy</h3>
              <p>${data.return_policy}</p>
            </div>
          `;
        }
        
        if (data.warranty_policy) {
          policiesHTML += `
            <div class="info-box">
              <h3>Warranty Policy</h3>
              <p>${data.warranty_policy}</p>
            </div>
          `;
        }
        
        if (data.delivery_policy) {
          policiesHTML += `
            <div class="info-box">
              <h3>Delivery Policy</h3>
              <p>${data.delivery_policy}</p>
            </div>
          `;
        }
        
        if (data.payment_policy) {
          policiesHTML += `
            <div class="info-box">
              <h3>Payment Policy</h3>
              <p>${data.payment_policy}</p>
            </div>
          `;
        }
        
        if (policiesHTML) {
          policiesGrid.innerHTML = policiesHTML;
        }
      }
    }
  } catch (error) {
    console.error('Load about page error:', error);
  }
}


async function loadContactPageContent() {
  try {
    const result = await API.getContactInfo();
    if (result.success && result.data) {
      const data = result.data;
      
      
      const phoneElement = document.getElementById('customerServicePhone');
      if (phoneElement && data.phone) {
        phoneElement.textContent = data.phone;
      }
      
      
      const emailElement = document.getElementById('generalEmail');
      if (emailElement && data.email) {
        emailElement.textContent = data.email;
      }
      
      
      if (data.business_hours) {
        const hours = data.business_hours.split('\n');
        
        const weekdayElement = document.getElementById('weekdayHours');
        if (weekdayElement && hours[0]) {
          weekdayElement.textContent = hours[0].replace('Mon-Sat: ', '');
        }
        
        const sundayElement = document.getElementById('sundayHours');
        if (sundayElement && hours[1]) {
          sundayElement.textContent = hours[1].replace('Sunday: ', '');
        }
      }
      
      
      const locationsContainer = document.getElementById('locationsContainer');
      if (locationsContainer && data.address) {
        locationsContainer.innerHTML = `
          <div class="info-box" style="padding: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
            <div style="display: flex; gap: 1rem; align-items: start;">
              <div style="background: #4ECDC4; color: white; padding: 0.75rem; border-radius: 0.5rem;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Main Store</h3>
                <p style="color: #4b5563; line-height: 1.6;">${data.address}</p>
              </div>
            </div>
          </div>
        `;
      }
    }
  } catch (error) {
    console.error('Load contact page error:', error);
  }
}


// Inventory Mnaggemne

let editingInventoryId = null;


async function loadInventoryList() {
  try {
    const result = await API.getInventory();
    
    if (result.success) {
      const tbody = document.getElementById('adminInventoryList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #9ca3af;">No inventory items found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const status = item.quantity > 10 ? 'in-stock' : 'low-stock';
        const statusText = item.quantity > 10 ? 'In Stock' : 'Low Stock';
        
        const row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td><span class="stock-status ${status}">${statusText}</span></td>
            <td>${formatDateTime(item.last_updated)}</td>
            <td>
              <button class="action-btn edit" onclick="editInventory(${item.id})">Edit</button>
              <button class="action-btn delete" onclick="deleteInventory(${item.id})">Delete</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load inventory error:', error);
    alert('❌ Failed to load inventory');
  }
}


function openAddInventoryModal() {
  editingInventoryId = null;
  document.getElementById('stockModalTitle').textContent = 'Add New Stock Item';
  document.getElementById('stockForm').reset();
  showModal('stockModal');
}


async function handleInventorySubmit(event) {
  event.preventDefault();
  
  const data = {
    name: document.getElementById('stockName').value,
    category: document.getElementById('stockCategory').value,
    quantity: parseInt(document.getElementById('stockQuantity').value)
  };

  try {
    let result;
    if (editingInventoryId) {
      result = await API.updateInventory(editingInventoryId, data);
    } else {
      result = await API.createInventory(data);
    }
    
    if (result.success) {
      alert('✅ ' + result.message);
      hideModal('stockModal');
      loadInventoryList();
      if (window.location.pathname.includes('staff.html')) {
        loadStaffInventoryList();
      }
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Save inventory error:', error);
    alert('❌ Failed to save inventory');
  }
}


async function editInventory(id) {
  try {
    const result = await API.getInventory();
    if (result.success) {
      const item = result.data.find(inv => inv.id === id);
      if (!item) {
        alert('Inventory item not found');
        return;
      }
      
      editingInventoryId = id;
      document.getElementById('stockModalTitle').textContent = 'Edit Stock Item';
      document.getElementById('stockName').value = item.name;
      document.getElementById('stockCategory').value = item.category;
      document.getElementById('stockQuantity').value = item.quantity;
      
      showModal('stockModal');
    }
  } catch (error) {
    console.error('Edit inventory error:', error);
    alert('❌ Failed to load inventory details');
  }
}


async function deleteInventory(id) {
  if (!confirm('Are you sure you want to delete this inventory item?')) return;
  
  try {
    const result = await API.deleteInventory(id);
    if (result.success) {
      alert('✅ ' + result.message);
      loadInventoryList();
      if (window.location.pathname.includes('staff.html')) {
        loadStaffInventoryList();
      }
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Delete inventory error:', error);
    alert('❌ Failed to delete inventory');
  }
}

// Delivery Management

let editingDeliveryId = null;


async function loadDeliveryList() {
  try {
    const result = await API.getDeliveries();
    
    if (result.success) {
      const tbody = document.getElementById('adminDeliveryList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #9ca3af;">No deliveries found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const row = `
          <tr>
            <td><strong>${item.ref_code}</strong></td>
            <td>${item.customer_name}</td>
            <td>${item.address}</td>
            <td><span class="stock-status in-stock">${item.status}</span></td>
            <td>${formatDate(item.delivery_date)}</td>
            <td>
              <button class="action-btn edit" onclick="editDelivery(${item.id})">Edit</button>
              <button class="action-btn delete" onclick="deleteDelivery(${item.id})">Delete</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load deliveries error:', error);
    alert('❌ Failed to load deliveries');
  }
}


async function loadStaffDeliveryList() {
  try {
    const result = await API.getDeliveries();
    
    if (result.success) {
      const tbody = document.getElementById('staffDeliveryList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #9ca3af;">No deliveries found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const row = `
          <tr>
            <td><strong>${item.ref_code}</strong></td>
            <td>${item.customer_name}</td>
            <td>${item.address}</td>
            <td><span class="stock-status in-stock">${item.status}</span></td>
            <td>${formatDate(item.delivery_date)}</td>
            <td>
              <button class="action-btn edit" onclick="editDelivery(${item.id})">Update Status</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load deliveries error:', error);
    alert('❌ Failed to load deliveries');
  }
}


function openAddDeliveryModal() {
  editingDeliveryId = null;
  document.getElementById('deliveryModalTitle').textContent = 'Add New Delivery';
  document.getElementById('deliveryForm').reset();
  showModal('deliveryModal');
}


async function handleDeliverySubmit(event) {
  event.preventDefault();
  
  
  const customerField = document.getElementById('deliveryCustomer') || document.getElementById('deliveryCustomerName');
  
  const data = {
    customer_name: customerField ? customerField.value : '',
    address: document.getElementById('deliveryAddress').value,
    status: document.getElementById('deliveryStatus').value,
    delivery_date: document.getElementById('deliveryDate').value || null
  };

  try {
    let result;
    if (editingDeliveryId) {
      result = await API.updateDelivery(editingDeliveryId, data);
    } else {
      result = await API.createDelivery(data);
    }
    
    if (result.success) {
      alert('✅ ' + result.message + (result.ref_code ? `\nReference Code: ${result.ref_code}` : ''));
      hideModal('deliveryModal');
      loadDeliveryList();
      if (window.location.pathname.includes('staff.html')) {
        loadStaffDeliveryList();
      }
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Save delivery error:', error);
    alert('❌ Failed to save delivery');
  }
}


async function editDelivery(id) {
  try {
    const result = await API.getDeliveries();
    if (result.success) {
      const item = result.data.find(del => del.id === id);
      if (!item) {
        alert('Delivery not found');
        return;
      }
      
      editingDeliveryId = id;
      document.getElementById('deliveryModalTitle').textContent = 'Update Delivery';
      
      
      const customerField = document.getElementById('deliveryCustomer') || document.getElementById('deliveryCustomerName');
      if (customerField) customerField.value = item.customer_name;
      
      document.getElementById('deliveryAddress').value = item.address;
      document.getElementById('deliveryStatus').value = item.status;
      document.getElementById('deliveryDate').value = item.delivery_date ? item.delivery_date.split('T')[0] : '';
      
      showModal('deliveryModal');
    }
  } catch (error) {
    console.error('Edit delivery error:', error);
    alert('❌ Failed to load delivery details');
  }
}


async function deleteDelivery(id) {
  if (!confirm('Are you sure you want to delete this delivery?')) return;
  
  try {
    const result = await API.deleteDelivery(id);
    if (result.success) {
      alert('✅ ' + result.message);
      loadDeliveryList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Delete delivery error:', error);
    alert('❌ Failed to delete delivery');
  }
}

// sales record

async function loadSalesList() {
  try {
    const result = await API.getSales();
    
    if (result.success) {
      const tbody = document.getElementById('adminSalesList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #9ca3af;">No sales records found</td></tr>';
        return;
      }
      
      let totalSales = 0;
      result.data.forEach(item => {
        totalSales += parseFloat(item.amount);
        const row = `
          <tr>
            <td>${formatDate(item.sale_date)}</td>
            <td>${item.customer_name}</td>
            <td>${item.product_name}</td>
            <td>${formatCurrency(item.amount)}</td>
            <td>
              <button class="action-btn delete" onclick="deleteSales(${item.id})">Delete</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
      
      const totalSalesEl = document.getElementById('totalSales');
      const totalRecordsEl = document.getElementById('totalRecords');
      if (totalSalesEl) totalSalesEl.textContent = formatCurrency(totalSales);
      if (totalRecordsEl) totalRecordsEl.textContent = `${result.data.length} records`;
    }
  } catch (error) {
    console.error('Load sales error:', error);
    alert('❌ Failed to load sales records');
  }
}


async function loadStaffSalesList() {
  try {
    const result = await API.getSales();
    
    if (result.success) {
      const tbody = document.getElementById('staffSalesList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #9ca3af;">No sales records found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const row = `
          <tr>
            <td>${formatDate(item.sale_date)}</td>
            <td>${item.customer_name}</td>
            <td>${item.product_name}</td>
            <td>${formatCurrency(item.amount)}</td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load sales error:', error);
    alert('❌ Failed to load sales records');
  }
}


function openAddSalesModal() {
  document.getElementById('salesForm').reset();
  showModal('salesModal');
}


async function handleSalesSubmit(event) {
  event.preventDefault();
  
  // FIXED: Try both possible field IDs (admin.html has salesDateInput)
  const dateField = document.getElementById('salesDateInput') || document.getElementById('salesDate');
  
  const data = {
    customer_name: document.getElementById('salesCustomerName').value,
    product_name: document.getElementById('salesProductName').value,
    amount: parseFloat(document.getElementById('salesAmount').value),
    sale_date: dateField ? dateField.value : new Date().toISOString().split('T')[0]
  };

  try {
    const result = await API.createSales(data);
    
    if (result.success) {
      alert('✅ ' + result.message);
      hideModal('salesModal');
      loadSalesList();
      if (window.location.pathname.includes('staff.html')) {
        loadStaffSalesList();
      }
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Save sales error:', error);
    alert('❌ Failed to save sales record');
  }
}



async function handleStaffSalesSubmit(event) {
  event.preventDefault();

  const data = {
    customer_name: document.getElementById('salesCustomer').value,
    product_name: document.getElementById('salesProduct').value,
    amount: parseFloat(document.getElementById('salesAmount').value), // FIXED: was staffSalesAmount
    sale_date: document.getElementById('salesDate').value || new Date().toISOString().split('T')[0] // FIXED: was staffSalesDate
  };

  try {
    const result = await API.createSales(data);

    if (result.success) {
      alert('✅ ' + result.message);
      document.getElementById('staffSalesForm').reset();
      
      
      loadStaffSalesList();
      
      
      console.log('Sales record added:', data);
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Save sales error:', error);
    alert('❌ Failed to save sales record');
  }
}
// Delete Sales
async function deleteSales(id) {
  if (!confirm('Are you sure you want to delete this sales record?')) return;
  
  try {
    const result = await API.deleteSales(id);
    if (result.success) {
      alert('✅ ' + result.message);
      loadSalesList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Delete sales error:', error);
    alert('❌ Failed to delete sales record');
  }
}

// Admin and staff module - Reviews Management 

// Load Reviews List
async function loadReviewsList() {
  try {
    const result = await API.getReviews();
    
    if (result.success) {
      const tbody = document.getElementById('reviewsList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #9ca3af;">No reviews found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const stars = '⭐'.repeat(item.rating);
        const row = `
          <tr>
            <td>${item.product_name}</td>
            <td>${stars} (${item.rating})</td>
            <td>${item.review_text.substring(0, 50)}${item.review_text.length > 50 ? '...' : ''}</td>
            <td>${item.reviewer_name}</td>
            <td>${formatDate(item.review_date)}</td>
            <td>
              <button class="action-btn delete" onclick="deleteReview(${item.id})">Delete</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load reviews error:', error);
    alert('❌ Failed to load reviews');
  }
}

// Load Staff Reviews List
async function loadStaffReviewsList() {
  try {
    const result = await API.getReviews();
    
    if (result.success) {
      const tbody = document.getElementById('staffReviewsList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #9ca3af;">No reviews found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const stars = '⭐'.repeat(item.rating);
        const row = `
          <tr>
            <td>${item.product_name}</td>
            <td>${stars} (${item.rating})</td>
            <td>${item.review_text.substring(0, 60)}${item.review_text.length > 60 ? '...' : ''}</td>
            <td>${item.reviewer_name}</td>
            <td>${formatDate(item.review_date)}</td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load reviews error:', error);
    alert('❌ Failed to load reviews');
  }
}

// Open Add Review Modal
function openAddReviewModal() {
  document.getElementById('reviewForm').reset();
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('reviewDate').value = today;
  showModal('reviewModal');
}

// Handle Review Form Submit (Admin)
async function handleReviewSubmit(event) {
  event.preventDefault();
  
  const data = {
    product_name: document.getElementById('reviewProductName').value,
    reviewer_name: document.getElementById('reviewerName').value,
    rating: parseInt(document.getElementById('reviewRatingInput').value),
    review_text: document.getElementById('reviewTextInput').value,
    review_date: document.getElementById('reviewDate').value
  };

  try {
    const result = await API.createReview(data);
    
    if (result.success) {
      alert('✅ ' + result.message);
      hideModal('reviewModal');
      loadReviewsList();
      if (window.location.pathname.includes('staff.html')) {
        loadStaffReviewsList();
      }
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Save review error:', error);
    alert('❌ Failed to save review');
  }
}

// Handle Staff Review Form Submit (NEW - for staff.html inline form)
async function handleStaffReviewSubmit(event) {
  event.preventDefault();

  const data = {
    product_name: document.getElementById('reviewProduct').value,
    reviewer_name: 'Staff',
    rating: parseInt(document.getElementById('reviewRating').value),
    review_text: document.getElementById('reviewText').value,
    review_date: document.getElementById('staffReviewDate').value || new Date().toISOString().split('T')[0]
  };

  try {
    const result = await API.createReview(data);

    if (result.success) {
      alert('✅ ' + result.message);
      document.getElementById('staffReviewForm').reset();
      loadStaffReviewsList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Save review error:', error);
    alert('❌ Failed to save review');
  }
}

// Delete Review
async function deleteReview(id) {
  if (!confirm('Are you sure you want to delete this review?')) return;
  
  try {
    const result = await API.deleteReview(id);
    if (result.success) {
      alert('✅ ' + result.message);
      loadReviewsList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Delete review error:', error);
    alert('❌ Failed to delete review');
  }
}

// admin mobule staff acc management

// Load Staff Accounts List
async function loadStaffAccountsList() {
  try {
    const result = await API.getStaff();
    
    if (result.success) {
      const tbody = document.getElementById('staffAccountsList');
      if (!tbody) return;
      
      tbody.innerHTML = '';
      
      if (result.data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #9ca3af;">No staff accounts found</td></tr>';
        return;
      }
      
      result.data.forEach(item => {
        const row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td><span class="stock-status in-stock">Staff</span></td>
            <td>${formatDate(item.created_at)}</td>
            <td>
              <button class="action-btn delete" onclick="deleteStaffAccount(${item.id})">Delete</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }
  } catch (error) {
    console.error('Load staff accounts error:', error);
    alert('❌ Failed to load staff accounts');
  }
}

// Open Add Staff Account Modal
function openAddStaffModal() {
  const modalHTML = `
    <div id="staffAccountModal" class="modal active">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Create Staff Account</h3>
          <button class="modal-close" onclick="hideModal('staffAccountModal'); document.getElementById('staffAccountModal').remove();">×</button>
        </div>
        <div class="modal-body">
          <form id="staffAccountForm">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="staffAccountName" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" id="staffAccountEmail" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Password</label>
              <input type="password" id="staffAccountPassword" class="form-input" required>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button type="submit" class="btn btn-accent" style="flex: 1;">Create Account</button>
              <button type="button" class="btn btn-secondary" onclick="hideModal('staffAccountModal'); document.getElementById('staffAccountModal').remove();" style="flex: 1;">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  document.getElementById('staffAccountForm').addEventListener('submit', handleStaffAccountSubmit);
  
}

// Handle Staff Account Form Submit
async function handleStaffAccountSubmit(event) {
  event.preventDefault();
  
  const data = {
    name: document.getElementById('staffAccountName').value,
    email: document.getElementById('staffAccountEmail').value,
    password: document.getElementById('staffAccountPassword').value,
    role: 'staff'
  };

  try {
    const result = await API.createStaff(data);
    
    if (result.success) {
      alert('✅ ' + result.message);
      hideModal('staffAccountModal');
      document.getElementById('staffAccountModal').remove();
      loadStaffAccountsList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Create staff account error:', error);
    alert('❌ Failed to create staff account');
  }
}

// Delete Staff Account
async function deleteStaffAccount(id) {
  if (!confirm('Are you sure you want to delete this staff account?')) return;
  
  try {
    const result = await API.deleteStaff(id);
    if (result.success) {
      alert('✅ ' + result.message);
      loadStaffAccountsList();
    } else {
      alert('❌ ' + result.message);
    }
  } catch (error) {
    console.error('Delete staff account error:', error);
    alert('❌ Failed to delete staff account');
  }
}

// staff modukle inventory

async function loadStaffInventoryList() {
  try {
    const result = await API.getInventory();
    
    if (result.success) {
      const container = document.getElementById('inventoryList');
      if (!container) return;
      
      container.innerHTML = '';
      
      if (result.data.length === 0) {
        container.innerHTML = `
          <p style="text-align: center; color: #9ca3af; padding: 2rem;">
            No inventory items found
          </p>
        `;
        return;
      }
      
      // Create table for view-only display
      let tableHTML = `
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Stock Status</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
      `;
      
      result.data.forEach(item => {
        const status = item.quantity > 10 ? 'in-stock' : 'low-stock';
        const statusText = item.quantity > 10 ? 'In Stock' : 'Low Stock';
        
        tableHTML += `
          <tr>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td><strong>${item.quantity}</strong></td>
            <td><span class="stock-status ${status}">${statusText}</span></td>
            <td>${formatDateTime(item.last_updated)}</td>
          </tr>
        `;
      });
      
      tableHTML += `
            </tbody>
          </table>
        </div>
      `;
      
      container.innerHTML = tableHTML;
    }
  } catch (error) {
    console.error('Load inventory error:', error);
    const container = document.getElementById('inventoryList');
    if (container) {
      container.innerHTML = '<p style="text-align: center; color: #ef4444; padding: 2rem;">❌ Failed to load inventory</p>';
    }
  }
}


// Dashboard Tab Switching
function initDashboardTabs() {
  const tabs = document.querySelectorAll('.dashboard-tab');
  const modules = document.querySelectorAll('.dashboard-module');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      modules.forEach(m => m.classList.remove('active'));
      
      const targetModule = document.getElementById(targetTab + 'Module');
      if (targetModule) {
        targetModule.classList.add('active');
        
        // Load data for that module
        if (targetTab === 'furniture') loadFurnitureList();
        else if (targetTab === 'business') loadBusinessInfo();
        else if (targetTab === 'inventory' && window.location.pathname.includes('admin.html')) loadInventoryList();
        else if (targetTab === 'inventory' && window.location.pathname.includes('staff.html')) loadStaffInventoryList();
        else if (targetTab === 'delivery' && window.location.pathname.includes('admin.html')) loadDeliveryList();
        else if (targetTab === 'delivery' && window.location.pathname.includes('staff.html')) loadStaffDeliveryList();
        else if (targetTab === 'sales' && window.location.pathname.includes('admin.html')) loadSalesList();
        else if (targetTab === 'sales' && window.location.pathname.includes('staff.html')) loadStaffSalesList();
        else if (targetTab === 'reviews' && window.location.pathname.includes('admin.html')) loadReviewsList();
        else if (targetTab === 'reviews' && window.location.pathname.includes('staff.html')) loadStaffReviewsList();
        else if (targetTab === 'staff') loadStaffAccountsList();
      }
    });
  });
}

// Modal Close Buttons
function initModalCloseButtons() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      hideModal(modalId);
    });
  });
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Furniture Management System Initialized - Backend Mode (FIXED VERSION)');
  
  initDashboardTabs();
  initModalCloseButtons();
  
  // Admin Page
  if (window.location.pathname.includes('admin.html')) {
    loadFurnitureList();
    
    const addFurnitureBtn = document.getElementById('addFurnitureBtn');
    if (addFurnitureBtn) addFurnitureBtn.addEventListener('click', openAddFurnitureModal);
    
    const furnitureForm = document.getElementById('furnitureForm');
    if (furnitureForm) furnitureForm.addEventListener('submit', handleFurnitureSubmit);
    
    const furnitureImage = document.getElementById('furnitureImage');
    if (furnitureImage) furnitureImage.addEventListener('change', handleFurnitureImageUpload);
    
    // NEW: Business Information Forms
    const aboutForm = document.getElementById('aboutForm');
    if (aboutForm) aboutForm.addEventListener('submit', handleAboutFormSubmit);
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleContactFormSubmit);
    
    const addStockBtn = document.getElementById('addStockBtn');
    if (addStockBtn) addStockBtn.addEventListener('click', openAddInventoryModal);
    
    const stockForm = document.getElementById('stockForm');
    if (stockForm) stockForm.addEventListener('submit', handleInventorySubmit);
    
    const addDeliveryBtn = document.getElementById('addDeliveryBtn');
    if (addDeliveryBtn) addDeliveryBtn.addEventListener('click', openAddDeliveryModal);
    
    const deliveryForm = document.getElementById('deliveryForm');
    if (deliveryForm) deliveryForm.addEventListener('submit', handleDeliverySubmit);
    
    const addSalesBtn = document.getElementById('addSalesBtn');
    if (addSalesBtn) addSalesBtn.addEventListener('click', openAddSalesModal);
    
    const salesForm = document.getElementById('salesForm');
    if (salesForm) salesForm.addEventListener('submit', handleSalesSubmit);
    
    const addReviewBtn = document.getElementById('addReviewBtn');
    if (addReviewBtn) addReviewBtn.addEventListener('click', openAddReviewModal);
    
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) reviewForm.addEventListener('submit', handleReviewSubmit);
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
  }
  
  // Staff Page
   
  if (window.location.pathname.includes('staff.html')) {
    loadStaffInventoryList();
    
    const deliveryForm = document.getElementById('deliveryForm');
    if (deliveryForm) deliveryForm.addEventListener('submit', handleDeliverySubmit);
    
    
    const staffReviewForm = document.getElementById('staffReviewForm');
    if (staffReviewForm) staffReviewForm.addEventListener('submit', handleStaffReviewSubmit);
    
    
    const staffSalesForm = document.getElementById('staffSalesForm');
    if (staffSalesForm) staffSalesForm.addEventListener('submit', handleStaffSalesSubmit);
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
  }
  
  
  if (window.location.pathname.includes('login.html')) {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
  }
  
  
  if (window.location.pathname.includes('about.html')) {
    loadAboutPageContent();
  }
  
  
  if (window.location.pathname.includes('contact.html')) {
    loadContactPageContent();
  }
  
  if (window.location.pathname.includes('furniture-list.html')) {
    loadPublicFurnitureList();
    initFurnitureListFilters();
  }
  
  if (window.location.pathname.includes('furniture-detail.html')) {
    loadFurnitureDetail();
  }
  if (window.location.pathname.includes('track-delivery.html')) {
  const publicTrackForm = document.getElementById('publicTrackForm');
  if (publicTrackForm) {
    publicTrackForm.addEventListener('submit', handlePublicTrackDelivery);
  }
}
});



if (window.location.pathname.includes('admin.html')) {
  setTimeout(() => {
    const staffModule = document.getElementById('staffModule');
    if (staffModule && !document.getElementById('addStaffAccountBtn')) {
      const card = staffModule.querySelector('.card');
      if (card) {
        const btnHTML = `
          <div style="margin-bottom: 1.5rem;">
            <button class="btn btn-accent" id="addStaffAccountBtn" onclick="openAddStaffModal()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Create New Staff Account
            </button>
          </div>
        `;
        card.insertAdjacentHTML('beforebegin', btnHTML);
      }
    }
  }, 500);
}

console.log('✅ All modules loaded - Backend fully integrated! (FIXED VERSION)');

