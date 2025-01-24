// Step 1: Initialize the Async Function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    // Step 4: Fetch Data Using try-catch
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // If the response is not okay, throw an error
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }

        // Convert the response to JSON
        const users = await response.json();
        
        // Step 5: Clear the Loading Message
        dataContainer.innerHTML = '';
        
        // Step 6: Create and Append the User List
        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Displaying the user's name
            userList.appendChild(listItem);
        });
        
        // Append the list of users to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 7: Error Handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error(error);
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
