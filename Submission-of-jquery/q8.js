
$(document).ready(function() {

    let postCount = 5;

    // Append a new post at the bottom
    $("#add").click(function() {
        postCount++;

        $("#posts").append(`
            <article class="post">
                <h2>New Blog Post ${postCount}</h2>
                <p>This is a newly added blog post.</p>
            </article>
        `);
    });

    // Prepend a featured post at the top
    $("#prepend").click(function() {

        $("#posts").prepend(`
            <article class="post featured">
                <h2>Featured Blog Post</h2>
                <p>This is our special featured post.</p>
            </article>
        `);

    });

    // Remove the last post
    $("#remove").click(function() {
        $("#posts .post:last").remove();
    });

    // Add tags using before() and after()
    $("#tag").click(function() {

        let firstPost = $("#posts .post:first");

        firstPost.before('<span class="tag">New</span>');

        firstPost.after('<span class="tag">Technology</span>');

    });

    // Highlight posts containing specific keywords
    $("#highlight").click(function() {

        $(".post").each(function() {

            let content = $(this).text().toLowerCase();

            if (content.includes("javascript") ||
                content.includes("python")) {

                $(this).css("background", "#bbf7d0");

            }

        });

    });

});
