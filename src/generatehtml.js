

function teamEmployee(manager) {
  let managerHTML = `
  <article>
  <div class="card" style="width: 18rem;">
      <div class="card-header">
          <h2 class="card-title">${manager.getName}</h2>
          <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i>${manager.getRole}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Email: ${manager.getEmail}</li>
        <li class="list-group-item">Office number:${manager.getOfficeNumber}</li>
      </ul>
    </div>
</article>
  `
  return managerHTML
}