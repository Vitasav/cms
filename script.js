fetch("http://vitasavicka.com/t9/wp-json/wp/v2/posts?per_page=14")
    .then(res =>res.json())
    .then(handleData)


function handleData(posts) {
    posts.forEach(showPost)

}

function showPost(post){
    console.log(post);
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = post.title.rendered;

    copy.querySelector(".body").innerHTML= post.content.rendered;

    document.querySelector("main").appendChild(copy);
}

