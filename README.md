# GRADUATION ADMISSION PREDICTION - EVERTON VASZELEWSKI
# MVP SPRINT 3 - Pós-Graduação em Engenharia de Software

Contém:

- - Notebook(Colab) contendo o processo de criação do modelo de machine learning. Para executar, acesse este [LINK](https://colab.research.google.com/drive/1NrD9zDeg5jIKn8nOZvLpRBxRjqVKDd9W) ou abra o arquivo PUCRIO_MVP_Sprint3.ipynb neste repositório.


---
## Como executar 

Requisitos:
- Certificar de que o [Docker](https://docs.docker.com/engine/install/) está instalado em sua máquina e em execução.
- Se optar por utilizar uma interface Frontend, siga os passos deste repositório: (HAUS-Front)[https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-a-b/].

![back c1](https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-c-1/assets/50892923/59c64eb0-35c4-4922-a608-f5b31f3ade67)

Etapas:


1 - Clonar o repositório e descompactar da pasta .zip.

2 - Ir ao diretório raiz, onde contém o Dockerfile, e executar como administrador o seguinte comando para construir a imagem Docker:
```
$ docker build -t rest-apic1 .
```

3 - Após a criação da imagem, executar como adminitrador o seguinte comando para rodar o container:
```
$ docker run -p 5000:5000 rest-apic1
```

Após seguir todos os passos, abrir o link abaixo no bavegador para verificar o status da API em execução
- [http://localhost:5000/#/](http://localhost:5000/#/)

