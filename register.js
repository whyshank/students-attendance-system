const roleSelect = document.getElementById('roleSelect');
const studentFields = document.querySelectorAll('.student-field');
const teacherFields = document.querySelectorAll('.teacher-field');

roleSelect.addEventListener('change', function() {
    if (this.value === 'student') {
        // Show student fields, require them
        studentFields.forEach(field => {
            field.classList.remove('hidden');
            field.querySelector('input, select').required = true;
        });
        // Hide teacher fields, remove requirement
        teacherFields.forEach(field => {
            field.classList.add('hidden');
            field.querySelector('input').required = false;
        });
    } else if (this.value === 'teacher') {
        // Show teacher fields, require them
        teacherFields.forEach(field => {
            field.classList.remove('hidden');
            field.querySelector('input').required = true;
        });
        // Hide student fields, remove requirement
        studentFields.forEach(field => {
            field.classList.add('hidden');
            field.querySelector('input, select').required = false;
        });
    }
});

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});