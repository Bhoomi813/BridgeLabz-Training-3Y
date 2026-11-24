
$(document).ready(function () {

    const API_URL = "http://localhost:3003/tasks";


    // 1. GET request - Fetch tasks
    function getTasks(filter = "all") {

        $("#taskList").html("Loading...");

        let params = {};

        // Set query parameters
        if (filter === "low" ||
            filter === "medium" ||
            filter === "high") {

            params.priority = filter;

        } else if (filter === "completed") {

            params.completed = true;

        }

        $.ajax({

            url: API_URL,
            type: "GET",
            data: params,

            success: function (tasks) {

                displayTasks(tasks);

            },

            error: function () {

                $("#taskList").html(
                    "Failed to load tasks!"
                );

            }

        });

    }


    // 2. Display tasks
    function displayTasks(tasks) {

        $("#taskList").empty();

        if (tasks.length === 0) {

            $("#taskList").html(
                "<h3>No tasks found</h3>"
            );

            return;
        }

        tasks.forEach(function (task) {

            let taskHTML = `
                <div class="task">

                    <div>
                        <h3 class="${task.completed ? 'completed-title' : ''}">
                            ${task.title}
                        </h3>

                        <span class="priority ${task.priority}">
                            ${task.priority.toUpperCase()} PRIORITY
                        </span>
                    </div>

                    <input
                        type="checkbox"
                        class="complete-checkbox"
                        data-id="${task.id}"
                        ${task.completed ? "checked" : ""}
                    >

                </div>
            `;

            $("#taskList").append(taskHTML);

        });

    }


    // 3. Dropdown filter change
    $("#filter").on("change", function () {

        let selectedFilter = $(this).val();

        getTasks(selectedFilter);

    });


    // 4. Checkbox click - PATCH request
    $("#taskList").on(
        "change",
        ".complete-checkbox",
        function () {

            let checkbox = $(this);

            let id = checkbox.data("id");

            let newStatus = checkbox.prop("checked");

            // Immediately update task appearance
            checkbox.closest(".task")
                .find("h3")
                .toggleClass("completed-title", newStatus);

            checkbox.prop("disabled", true);

            $.ajax({

                url: API_URL + "/" + id,

                type: "PATCH",

                contentType: "application/json",

                data: JSON.stringify({
                    completed: newStatus
                }),

                success: function () {

                    $("#message").text("");

                    checkbox.prop("disabled", false);

                    // Reload current filter
                    getTasks($("#filter").val());

                },

                error: function () {

                    // Revert checkbox
                    checkbox.prop("checked", !newStatus);

                    checkbox.prop("disabled", false);

                    // Revert task appearance
                    checkbox.closest(".task")
                        .find("h3")
                        .toggleClass("completed-title", newStatus);

                    $("#message").text(
                        "Failed to update task. Try again!"
                    );

                }

            });

        }
    );


    // 5. Initially load all tasks
    getTasks();

});