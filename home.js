// Javascript for the web3html

// Get the different HTML elements
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const p_class = document.getElementById("class");
const sub_btn = document.getElementById("btn");
var class_1 = document.getElementById("list_1");
var class_2 = document.getElementById("list_2");
var class_3 = document.getElementById("list_3");


// Function to store the data when you click submit
sub_btn.onclick = function save() {
    const f_name = fname.value;
    const l_name = lname.value;
    const e_mail = email.value;
    const std_class = p_class.value;

    if (f_name && l_name && e_mail && std_class) {
        var full_name = f_name + " " + l_name;
        //add the name to the class
        var new_list = document.createElement("p");
        new_list.innerHTML = full_name;

        switch (std_class) {
            case "class_1":
                class_1.appendChild(new_list);
                break;
            case "class_2":
                class_2.appendChild(new_list);
                break;
            case "class_3":
                class_3.appendChild(new_list);
                break;
        
            default:
                console.log("Graduate");
                break;
        }

        var user_dict = {"name": full_name, "email": e_mail, "class": std_class};
        const json_dict = JSON.stringify(user_dict);
        localStorage.setItem(e_mail, json_dict);
        // location.reload();
    }
}
