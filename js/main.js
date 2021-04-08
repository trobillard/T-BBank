// Exemple de liste cliquable qui passe au vert
let listItems = document.getElementsByClassName("list-group-item");

for(let item of listItems) {
    item.onclick = function() {
        if(this.classList.contains("bg-success")) {
            this.classList.remove("bg-success");
        }
        else {
            this.classList.add("bg-success");
        }
    }
}

// Exemple de sélecteur

// 1 mettre en forme les paragraphes
    // 1.1 récupérer les p
    let selectItems = document.getElementsByClassName("selectItem");
    // 2.3 Récupérer le paragraphe de destination
    let choice = document.getElementById("choice");
    // 1.2 parcourir les p
    for(let item of selectItems) {
        // 1.3 Modifie le CSS
        item.style.backgroundColor = "black";   
        item.style.color = "white";
        item.style.padding = "1em";
        item.style.margin = "1em 0";
        
        // 2 Gérer la sélection
        // 2.1 Détecter le survol de la souris
        item.addEventListener("mouseover", function(){
            // 2.2 Récupérer le contenu de l'item survolé
            let animal = this.innerText;
            // 2.4 Afficher le contenu dans le paragraphe de destination
            choice.innerText = animal;
        });
        // 3 (optionnel) Vider le paragraphe de destination quand la souris le quitte
        // 3.1 Détecter le départ de la souris
        item.addEventListener("mouseout", function(){
            // 3.2 Vider le contenu texte du paragraphe de destination
            choice.innerText = "";
        });
    }

    // Exemple de gestion d'input à l'aide d'une fonction

    // Optionnel Tableau de référence pour stocker les tâches déjà écrites
    let userTasks = [];

    // Fonction appelée quand l'utilisateur clique sur le boutton ajouter
    function addTodo() {
        // Optionnel on vide le message d'erreur par défaut
        let message = document.getElementById("message");
        message.innerText = "";
        // 1 Récupérer l'input de saisie
        let todoInput = document.getElementById("todoInput");
        // 2 Récupérer ce qui a été saisi
        let userInput = todoInput.value;
        // 2.1 Vérifier que l'utilisateur a tapé quelque chose
        if(userInput.length > 0 && !userTasks.includes(userInput)) {
            // 3 Créer un élément HTML pour récéptionner le texte saisi
            let todoElement = document.createElement("P");
            todoElement.classList.add("alert", "alert-secondary");
            // 4 Ajouter ce qui a été saisi dans l'élément HTML
            todoElement.innerText = userInput;
            // 5 Récupérer la zone todo
            let todo = document.getElementById("todo");
            // 6 Ajouter l'élément HTMl à la zone todo
            todo.appendChild(todoElement);
            // 7 On ajoute la tâche à la liste des tâches
            userTasks.push(userInput);
            // 8 Vider l'input une fois l'élément ajouté
            todoInput.value = "";
        }
        // Si les conditions ne sont pas remplies on affiche un message d'erreur
        else {
            message.innerText = "Attention il faut rentrer une valeur nouvelle !"
        }
    }