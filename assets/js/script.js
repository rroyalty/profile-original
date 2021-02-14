$(document).ready(function() {

    projectList.projects.forEach((element, index, array) => {
        let arrLength = array.length;
        rowChildren(element.name, element.icon, index, arrLength);
    });

    populateProject(projectList.projects[0])

    function populateProject(element) {
        console.log(element)

        // `<div class="content">
        //     <h1 class="indian-khaki-font center-text">${element}</h1>
        // </div>
        // <div class="card-content columns">
        //     <div class="column">
        //         <img src="https://raw.githubusercontent.com/tonipow3ll/drinks-and-dinner/main/images/mealdrink.png" alt="${element} Image">
        //     </div>
        //     <div class = "column">
        //         <p>A website that takes ingredients you have in your house and offers you recipes to make with them!</p>
        //         <div class="columns">
        //         <div class="column center-text">
        //             <a class="center-text" href="https://tonipow3ll.github.io/drinks-and-dinner/" alt="${element} URL">Check it out!</a>
        //         </div>
        //         <div class="column center-text">
        //             <a href="https://github.com/tonipow3ll/drinks-and-dinner" alt="${element} Repository">Repository</a>
        //         </div>
        //         </div>
        //     </div>
        // </div>`

    };

    function rowChildren(text, icon, index, length) {
        let classAdd = "indian-khaki-font"
        let iconAdd = " indian-khaki-font"

        switch(index) {
            case 0:
                iconAdd = "matisse-font";
                classAdd = "matisse-font activeProject";
            break;
            case length - 1:
                classAdd = "indian-khaki-font lastItem-border";
            break;
        }

        const title = `<a class="panel-block projectItem-border ${classAdd}">
                        <span class="panel-icon">
                            <i class="${icon} ${iconAdd}" aria-hidden="true"></i>
                        </span>${text}</a>`;
        $("#projectList").append(title);
    };

    // Check for click events on the navbar burger icon
    $("#bioButton").on("click", function() {
        $('#bio').attr("hidden", function(_, attr){ return !attr});
    });
  });