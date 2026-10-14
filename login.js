
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Grab the input and convert it to uppercase so 't123' and 'T123' are treated the same
    const loginInput = document.getElementById('loginInput').value.trim().toUpperCase();

    // RULE 1: If it starts with 'T', it's a teacher
    if (loginInput.startsWith('T')) {
        alert('Teacher ID detected. Redirecting to Teacher Dashboard...');
        window.location.href = 'teacher-dashboard.html';
    } 
    
    // RULE 2: If it contains only numbers (RegEx test), it's a student ID
    else if (/^\d+$/.test(loginInput)) {
        window.location.href = 'student-dashboard.html';
    } 
    
    // RULE 3: If it contains the word 'ADMIN', it's an administrator
    else if (loginInput.includes('ADMIN')) {
        alert('Administrator detected. Redirecting to Admin Dashboard...');
        window.location.href = 'admin-dashboard.html';
    } 
    
    // FALLBACK: If it doesn't match the known patterns
    else {
        alert('We couldn\'t recognize that ID format. Please try again.');
    }
});