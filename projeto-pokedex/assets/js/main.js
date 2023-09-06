const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    const modalId = `more_detail_${pokemon.number}`; // Cria um id único para cada modal
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number ml-auto d-flex justify-content-center align-items-center">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}" class="rounded float-right">
            </div>
            <div class="d-flex justify-content-center moreDetailButton">
            <button type="button" class="btn btn-dark btn-sm bg-primary-opacity" data-toggle="modal" data-target="#${modalId}">Status</button>
            </div>
        </li>
        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content" id="modalBody">
        <div class="modal-header">
        <h5 class="modal-title" id="TituloModalCentralizado">${pokemon.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
            </button>
    </div>
        <div class="modal-body">
            <div class="container">
            <img src="${pokemon.photo}" class="rounded mx-auto d-block" alt="${pokemon.name}">
                <div class="row">
                    <div class="col-sm">
                        HP
                    </div>
                    <div class="col-sm">
                        ${pokemon.hp}
                    </div>
                    <div class="col-sm">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="${pokemon.hp}" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.hp}%"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        Attack
                    </div>
                    <div class="col-sm">
                        ${pokemon.attack}
                    </div>
                    <div class="col-sm">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="${pokemon.attack}" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.attack}%"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        Defense
                    </div>
                    <div class="col-sm">
                        ${pokemon.defense}
                    </div>
                    <div class="col-sm">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="${pokemon.defense}" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.defense}%"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        Sp. Atk
                    </div>
                    <div class="col-sm">
                        ${pokemon.attack_sp}
                    </div>
                    <div class="col-sm">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="${pokemon.attack_sp}" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.attack_sp}%"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        Sp. def
                    </div>
                    <div class="col-sm">
                        ${pokemon.defense_sp}
                    </div>
                    <div class="col-sm">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="${pokemon.defense_sp}" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.defense_sp}%"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        Speed
                    </div>
                    <div class="col-sm">
                        ${pokemon.speed}
                    </div>
                    <div class="col-sm">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="${pokemon.speed}" aria-valuemin="0" aria-valuemax="100" style="width: ${pokemon.speed}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
    </div>
    </div>
    </div>
  </div>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})