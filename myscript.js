function calculateGrade() {
    const gradesInput = document.getElementById('grades').value;
    const gradesArray = gradesInput.split(',').map(Number);

    const total = gradesArray.reduce((acc, grade) => acc + grade, 0);
    const marks = total / gradesArray.length;

    if (marks > 100) {
        document.getElementById('result').innerText = "Average grade cannot exceed 100.";
        return;
    }

    let Grade = '';
    if (marks >= 85) {
        Grade = 'A';
    } else if (marks >= 75) {
        Grade = 'B';
    } else if (marks >= 65) {
        Grade = 'C';
    } else if (marks >= 50) {
        Grade = 'D';
    } else {
        Grade = 'Fail';
    }

    document.getElementById('result').innerText = `Score(%): ${marks.toFixed(2)}\nGrade: ${Grade}`;
}
