    document.addEventListener('DOMContentLoaded', function() {
    const submitbutton = document.getElementById('submit')
    if(submitbutton){
        submitbutton.addEventListener('click', (e) => {
        e.preventDefault();
        
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var branch = document.getElementById('branch').value;
        var sem = document.getElementById('sem').value;
        var phno = document.getElementById('phno').value;
        var req = document.getElementById('req').value;
        var evntname = document.getElementById('evntname').value;

        var table1 = document.getElementById('table1').getElementsByTagName('tbody')[0];
        var newRow = table1.insertRow();
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = fname + " " + lname;
        cell2.innerHTML = branch;
        cell3.innerHTML = sem;
        cell4.innerHTML = evntname;
        cell5.innerHTML = req;
        cell6.innerHTML = phno;

        // Clear input values after adding to the table
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('branch').value = "";
        document.getElementById('sem').value = "";
        document.getElementById('phno').value = "";
        document.getElementById('req').value = "";
        document.getElementById('evntname').value = "";
    });
}
else{
    console.error('error');
}
});
