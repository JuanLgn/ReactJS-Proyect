import './style.css';
import logo from './logo.png'
// PascalCase = Comenzamos nombre con Mayúscula ya que al ser un componente, el mismo debe comenzar con Mayúscula.

export const FunctionalComponentBootstrap = () => {
    return(
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    );
}

export const FunctionalComponent = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://google.com"><img className='logo' src={logo} alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse left" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="https://google.com">Home</a>
              </li>
              <li class="nav-item">
                <a class="color-links nav-link" href="https://google.com">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://google.com">Ofertas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://google.com">Contáctanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

