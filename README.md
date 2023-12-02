# GRADUATE ADMISSION PREDICTION - EVERTON VASZELEWSKI
# MVP SPRINT 3 - Pós-Graduação em Engenharia de Software

Contém:

- Notebook(Colab) contendo o processo de criação do modelo de machine learning. Para executar, acesse este [LINK](https://colab.research.google.com/drive/1NrD9zDeg5jIKn8nOZvLpRBxRjqVKDd9W) ou abra o arquivo PUCRIO_MVP_Sprint3.ipynb neste repositório.
- Graduate Admission Dataset Kaggle page as reference and source: [Kaggle](https://www.kaggle.com/datasets/mohansacharya/graduate-admissions/data)

Este projeto tem como intenção calcular a predição das chances de uma pessoa ingressar no Ensino Superior nos Estados Unidos através da perspectiva de um indiano.
O dataset utilizado possui sete parâmetros que são relevantes e importantes durante a inscrição para programas de Mestrado, por exemplo.
Segue abaixo os parâmetros:

- GRE Scores ( out of 340 )
- TOEFL Scores ( out of 120 )
- University Rating ( out of 5 )
- Statement of Purpose ( out of 5 )
- Letter of Recommendation Strength ( out of 5 )
- Undergraduate GPA ( out of 10 )
- Research Experience ( either 0 or 1 )
- Chance of Admit ( ranging from 0 to 1 )

Os valores referentes ao campo "Chance of Admit" foram tratados e convertidos. No dataset original, os valores iam de 0.0 até 1.0, e como estamos fazendo uma classificação, não eram valores válidos. Portanto, os valores que iam de 0.0 até 0.69 receberam o valor 0 (Não aprova para processo) e valores que iam de 0.70 até 1.0 receberam o valor 1 (Aprovados no processo).

---
## Como executar 

Requisitos:
- Realizar a instalação das libs python listadas no `requirements.txt`.
- É recomendado o uso de ambientes virtuais do tipo [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html).


1 - Após clonar o repositório, é necessário ir ao diretório raiz, pelo terminal, para poder executar os comandos descritos abaixo:

cd pucrio-mvp-sprint1-haus-master\haus_api

2 - Instalar Virtualenv
```
$ pip install VirtualEnv
```

3 - Criar Virtualenv
```
$ Virtualenv venv
```

4 - Ativar venv
```
$ venv\scripts\activate
```

5 - Instalar libs python
```
(venv)$ pip install -r requirements.txt
```

6 - Instalar Pandas
```
(venv)$ pip install pandas
```

7 - Instalar Numpy
```
(venv)$ pip install numpy
```

8 - Instalar Pytest
```
(venv)$ pip install pytest
```

7 - Executar API:

```
(venv)$ flask run --host 0.0.0.0 --port 5000
```

Em caso de modificações no código enquanto a API estiver rodando, utilizar o parâmetro reload, que reiniciará o servidor
automaticamente após uma mudança no código fonte. 

```
(env)$ flask run --host 0.0.0.0 --port 5000 --reload
```

Após seguir todos os passos, abrir o link abaixo no bavegador para verificar o status da API em execução
- [http://localhost:5000/#/](http://localhost:5000/#/)

Link para Documentação:
- [http://127.0.0.1:5000/openapi/]

