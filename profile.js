document.addEventListener("DOMContentLoaded", () => {
    const usernameSpan = document.getElementById("username");
    const emailSpan = document.getElementById("email");
    const universityNameSpan = document.getElementById("universityName");
    const universityCampusSpan = document.getElementById("universityCampus");

    const updateEmailForm = document.getElementById("updateEmailForm");
    const updatePasswordForm = document.getElementById("updatePasswordForm");
    const updateUniversityForm = document.getElementById("updateUniversityForm");
    const logoutButton = document.getElementById("logout");
    const backToRecommendationButton = document.getElementById("backToRecommendation");

    // Load the logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
        alert("No user is logged in. Redirecting to login page.");
        window.location.href = "login.html";
        return;
    }

    // Display the user's information
    usernameSpan.textContent = loggedInUser.username;
    emailSpan.textContent = loggedInUser.email;
    universityNameSpan.textContent = loggedInUser.universityName;
    universityCampusSpan.textContent = loggedInUser.universityCampus;

    // Helper function to update localStorage
    function updateUserInLocalStorage(updatedUser) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(user => user.email === loggedInUser.email);

        if (userIndex !== -1) {
            users[userIndex] = updatedUser;
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
            alert("Information updated successfully!");
        }
    }

    // Handle email update
    updateEmailForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newEmail = document.getElementById("newEmail").value;

        if (newEmail) {
            loggedInUser.email = newEmail;
            updateUserInLocalStorage(loggedInUser);
            emailSpan.textContent = newEmail;
            updateEmailForm.reset();
        } else {
            alert("Please enter a valid email.");
        }
    });

    // Handle password update
    updatePasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newPassword = document.getElementById("newPassword").value;

        if (newPassword) {
            loggedInUser.password = newPassword;
            updateUserInLocalStorage(loggedInUser);
            updatePasswordForm.reset();
        } else {
            alert("Please enter a valid password.");
        }
    });

    // Handle university update
    updateUniversityForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newUniversityName = document.getElementById("newUniversityName").value;
        const newUniversityCampus = document.getElementById("newUniversityCampus").value;

        if (newUniversityName && newUniversityCampus) {
            loggedInUser.universityName = newUniversityName;
            loggedInUser.universityCampus = newUniversityCampus;
            updateUserInLocalStorage(loggedInUser);
            universityNameSpan.textContent = newUniversityName;
            universityCampusSpan.textContent = newUniversityCampus;
            updateUniversityForm.reset();
        } else {
            alert("Please fill in both fields.");
        }
    });

    // Handle logout
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "loginpage.html";
    });

    // Handle Back to Recommendation
    backToRecommendationButton.addEventListener("click", () => {
        window.location.href = "Recommendation.html";
    });
});
