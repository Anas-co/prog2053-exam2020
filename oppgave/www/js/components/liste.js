function hentAlleBrukere() {
    fetch(`api/fetchUsers.php`, {})
        .then(Response => Response.json())
        .then(data => {
            var userContainer = document.getElementById("brukere");

            data.forEach(element => {
                var newUserElement = document.createElement('div');
                newUserElement.setAttribute("id", element.uid)
                newUserElement.innerText = element.uname + "\n" + element.firstName + " " + element.lastName + "\n";
                userContainer.appendChild(newUserElement);

                newUserElement.onclick = function() { hentBruker(newUserElement.id) };
            });
        });
}

function hentBruker(e) {
    var user = document.getElementById("bruker");
    user.style.display = "block";
    fetch("api/fetchUser.php?id=" + e.toString())
        .then(Response => Response.json())
        .then(data => {
            document.getElementById("uid").value = e;
            document.getElementById("Fornavn").value = data.firstName;
            document.getElementById("Etternavn").value = data.lastName;
            document.getElementById("E-post").value = data.uname;

        });
}