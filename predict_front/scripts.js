/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/candidatos';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.candidatos.forEach(candidato => insertList(candidato.name,
													  candidato.greScore,
													  candidato.toeflScore,
													  candidato.universityRating,
													  candidato.statementPurpose,
													  candidato.letterRecomendation,
													  candidato.undergraduateGPA,
													  candidato.researchExperience,
													  candidato.chanceOfAdmit
													  ))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()


/*
  --------------------------------------------------------------------------------------
  Função para colocar uma predição na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postCandidato = async (inputName, inputGREScore, inputTOEFLScore, inputUniversityRating,
							 inputStatementPurpose, inputLetterRecomendation,
							 inputUndergraduateGPA,inputResearchExperience) => {
  
  const formData = new FormData();
  formData.append('name', inputName);
  formData.append('greScore', inputGREScore);
  formData.append('toeflScore', inputTOEFLScore);
  formData.append('universityRating', inputUniversityRating);
  formData.append('statementPurpose', inputStatementPurpose);
  formData.append('letterRecomendation', inputLetterRecomendation);
  formData.append('undergraduateGPA', inputUndergraduateGPA);
  formData.append('researchExperience', inputResearchExperience);
  console.log(formData)

  let url = 'http://127.0.0.1:5000/candidato';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada predição da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}

/*
  --------------------------------------------------------------------------------------
  Função para remover uma predição da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nameCandidato = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza?")) {
        div.remove()
        deleteCandidato(nameCandidato)
        alert("Removido!")
      }
    }
  }
}  


/*
  --------------------------------------------------------------------------------------
  Função para deletar uma predição da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteCandidato = (nameCandidact) => {
  console.log(nameCandidact)
  let url = 'http://127.0.0.1:5000/candidato?name='+nameCandidact;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar uma nova predição com Nome, GRE Scores, TOEFL Scores, University Rating, Statement of Purpose, Letter of Recommendation Strength, Undergraduate GPA, Research Experience
  --------------------------------------------------------------------------------------
*/
const newPredict = () => {
  let inputName = document.getElementById("newName").value;
  let inputGREScore = document.getElementById("newGRE").value;
  let inputTOEFLScore = document.getElementById("newTOEFL").value;
  let inputUniversityRating = document.getElementById("newUA").value;
  let inputStatementPurpose = document.getElementById("newSOP").value;
  let inputLetterRecomendation = document.getElementById("newLOPS").value;
  let inputUndergraduateGPA = document.getElementById("newUGPA").value;
  let inputResearchExperience = document.getElementById("newRE").value;


  // Verifique se o nome do candidato já existe antes de adicionar
  const checkUrl = `http://127.0.0.1:5000/candidatos?name=${inputName}`;
  fetch(checkUrl, {
    method: 'get'
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.candidatos && data.candidatos.some(candidato => candidato.name === inputName)) {
        alert("O candidato já está cadastrado.\nCadastre o candidato com um nome diferente ou atualize o existente.");
      } else if (inputName === '') {
        alert("O nome do candidato não pode ser vazio!");
      } else if (isNaN(inputGREScore) || isNaN(inputTOEFLScore) || isNaN(inputUniversityRating) || isNaN(inputStatementPurpose) || isNaN(inputLetterRecomendation) || isNaN(inputUndergraduateGPA) || isNaN(inputResearchExperience)) {
        alert("Esse(s) campo(s) precisam ser números!");
      } else {
        insertList(inputName, inputGREScore, inputTOEFLScore, inputUniversityRating, inputStatementPurpose, inputLetterRecomendation, inputUndergraduateGPA, inputResearchExperience);
        postCandidato(inputName, inputGREScore, inputTOEFLScore, inputUniversityRating, inputStatementPurpose, inputLetterRecomendation, inputUndergraduateGPA, inputResearchExperience);
        alert("Candidato adicionado!");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para inserir predições na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (nameCandidact, greScore, toeflScore, universityRating, statementPurpose, letterRecomendation, undergraduateGPA, researchExperience, chanceOfAdmit) => {
  var candidato = [nameCandidact, greScore, toeflScore, universityRating, statementPurpose, letterRecomendation, undergraduateGPA, researchExperience, chanceOfAdmit]
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < candidato.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = candidato[i];
  }

  var deleteCell = row.insertCell(-1);
  insertButton(deleteCell);
  
  document.getElementById("newName").value = "";
  document.getElementById("newGRE").value = "";
  document.getElementById("newTOEFL").value = "";
  document.getElementById("newUA").value = "";
  document.getElementById("newSOP").value = "";
  document.getElementById("newLOPS").value = "";
  document.getElementById("newUGPA").value = "";
  document.getElementById("newRE").value = "";

  removeElement()
}