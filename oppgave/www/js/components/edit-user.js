import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
    static get properties() {
        return {
            user: { type: Object }
        };
    }

    render() {
        return html `
<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>

<form  method="POST">
<div class="form-group text-danger" >
<label for="E-post">E-post</label>
<input type="email" value="${this.user.uname}" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email">
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group text-danger">
<label for="Fornavn">Fornavn</label>
<input class="form-control"  value="${this.user.firstName}" type="text" paceholder="Default input">
</div>
<div class="form-group text-danger">
<label for="Etternavn">Etternavn</label>
<input class="form-control"  value="${this.user.lastName}" type="text" paceholder="Default input">
</div>
<div class="form-group text-danger">
<label for="Gammelt Passord">Gammelt Passord</label>
<input type="password"  value="${this.user.oldPwd}"class="form-control" id="exampleInputPassword1" placeholder="Password">
<div class="form-group text-danger">
<label for="Nytt Passord">Nytt Passord</label>
<input type="password"  value="${this.user.pwd}"class="form-control" id="exampleInputPassword1" placeholder="Password">

<button type="submit" @click=${this.Oppdater} id="submitForm" name="editUser" class="btn btn-primary" value="Edit User">Submit</button>
</form>
`;
    }

    Oppdater(e) {
        const data = new FormData(e.target.form);
        e.preventDefault();
        fetch('api/updateUser.php', { body: data, method: 'POST' })
            .then(Response => Response.json())
            .then(data => {
                if (data.status != 'fail') {
                    console.log("successfully updated");
                    console.log(data.status);
                } else {
                    console.log("failed to update user");
                    console.log(data.status);
                }
            })

    }

}
customElements.define('edit-user', EditUser);