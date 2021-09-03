function handleSubmit () {
    const result = document.getElementById('result').value;
    
    sessionStorage.setItem("RESULT", result);

    return;
}