$(document).ready(function() {

    projectList.projects.forEach((element, index) => {
        rowChildren(element.name, element.icon, index);
    })

    function rowChildren(text, icon, index) {

        const title = `<a class="panel-block projectItem-border indian-khaki-font">
                        <span class="panel-icon indian-khaki-font">
                            <i class="${icon}" aria-hidden="true"></i>
                        </span>${text}<a>`;
        $("#projectList").append(title);
    };

    // Check for click events on the navbar burger icon
    $("#bioButton").on("click", function() {
        $('#bio').attr("hidden", function(_, attr){ return !attr});
    });
  });