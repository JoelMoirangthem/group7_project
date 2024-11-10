// Function to format the matrix for display
function matrix_format(matrix) {
    let new_matrix = "";
    for (let row of matrix) {
        new_matrix += "| ";
        for (let element of row) {
            new_matrix += `${element} `;
        }
        new_matrix += "| <br>";
    }
    return new_matrix;
}

// Function to create a matrix based on user input
function show_matrix(id) {
    order = parseInt(document.getElementById("order").value);
    A = [];
    for (let i = 1; i <= order; i++) {
        let matrix = [];
        for (let j = 1; j <= order; j++) {
            let matrix_element = parseInt(prompt(`Enter the a${i}${j}`));
            matrix.push(matrix_element);
        }
        A.push(matrix);
    }
    
    document.getElementById(id).innerHTML = `<h2>Matrix A</h2>` + matrix_format(A);
}