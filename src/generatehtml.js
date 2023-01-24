
function genTeam(team) {
  
function teamManager(manager) {
  return  `
  <article>
  <div class="card" style="width: 18rem;">
      <div class="card-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()} </li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()} </a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
      </ul>
    </div>
</article>
  `
}

function teamEngineer(engineer) {
 return `
  <article>
  <div class="card" style="width: 18rem;">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${engineer.getRole()} </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()} </li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()} </a></li>
        <li class="list-group-item">GitHub Name: <a href="https://github.com/${engineer.getgitHubName()}"target="_blank" rel="noopener noreferrer">${engineer.getgitHubName()}</a></li>
      </ul>
    </div>
</article>
  `
}

function teamIntern(intern) {
 return `
  <article>
  <div class="card" style="width: 18rem;">
      <div class="card-header">
          <h2 class="card-title"> ${intern.getName()} </h2>
          <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${intern.getRole()} </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()} </li>
        <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${intern.getSchool()} </li>
      </ul>
    </div>
</article>
 `
}

  const htmlArr = [];

  htmlArr.push(team
    .filter(x => x.getRole() === "Manager")
    .map(y => teamManager(y))  
  )

  htmlArr.push(team
    .filter(x => x.getRole() === "Engineer")
    .map(y => teamEngineer(y))  
  )

  htmlArr.push(team
    .filter(x => x.getRole() === "Intern")
    .map(y => teamIntern(y))  
  )
  return htmlArr.join("")
}



const generateHtml = team => {
  return `
  <!doctype html>
  <html lang="en">
  
  <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <!-- fontawesome.com  -->
      <script src="https://kit.fontawesome.com/bb7a5e8450.js" crossorigin="anonymous"></script>
      <title>My Team Profile</title>
  </head>
  
  <body>
  <h1 id="teamName">My Team!</h1>
  <section class="cards">
  
  ${genTeam(team)}
  
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"></script>
  </body>
  
  </html>
  `
}

module.exports = generateHtml