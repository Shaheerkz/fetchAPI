
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((categories) => {
    let tableData="";
    categories.forEach((category) => {
      tableData+=`<tr>
      <td>${category.title}</td>
      <td>${category.description}</td>
      <td>${category.price}</td>
      <td><img src= "${category.image}"</td>
    </tr>`;
    });
    document.getElementById("tableBody").innerHTML=tableData;
  })






  























// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((categories) => {
//     // Find the <ul> element by its id
//     let ul = document.getElementById("categories");
//     // Loop through categories and create <li> elements
//     categories.forEach((category) => {
//       const li = document.createElement("li");
//       li.innerText = category.id;
//       li.addEventListener("click", () => {
//         window.location.href = `next_page_url?https://dev-apis.explorebtk.com/api/v1/categories=${category.icon}`;
//       });
//       ul.appendChild(li);
//     });
//   })


// const apiEndpoint = 'https://api.example.com/data'; // Replace with your API endpoint
// const dataContainer = document.getElementById('data-container');
// const loadMoreButton = document.getElementById('load-more');
// let currentPage = 1;

// async function fetchData(page) {
//   try {
//     const response = await fetch(`${apiEndpoint}?page=${page}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

// function displayData(data) {
//   data.forEach(item => {
//     const itemElement = document.createElement('div');
//     itemElement.textContent = item.name; // Adjust this based on your API response structure
//     dataContainer.appendChild(itemElement);
//   });
// }

// async function loadMore() {
//   currentPage++;
//   const newData = await fetchData(currentPage);
//   displayData(newData);
// }

// loadMoreButton.addEventListener('click', loadMore);

// // Initial data load
// loadMore();


// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((categories) => {
//     // Find the <ul> element by its id
//     let ul = document.getElementById("categories");
//     // Loop through categories and create <li> elements
//     categories.forEach((category) => {
//       const li = document.createElement("li");
//       li.innerText = category.title; // Displaying title instead of id for this example
//       li.addEventListener("click", () => {
//         // Fetch additional data from another API and navigate to the next page
//         fetch("https://jsonplaceholder.typicode.com/photos")
//           .then((response) => {
//             return response.json();
//           })
//           .then((categoryData) => {
//             // Assuming you want to display category icon, adjust this based on your response structure
//             const categoryIcon = categoryData.icon;

//             // Navigate to the next page with the category icon 
//             window.location.href = `https://jsonplaceholder.typicode.com/photos=${URL}`;
//           })
//           .catch((error) => {
//             console.error("Error fetching additional data:", error);
//           });
//       });
//       ul.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching categories:", error);
//   });






