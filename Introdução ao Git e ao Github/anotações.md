### Anotações que fazem sentido na minha cabeça

- Às vezes, a branch principal pode aparecer como "master", principalmente em repositórios mais antigos,
mas o nome utilizado atualmente é "main"
- Para instalação do Git no Linux, é necessário os comandos a seguir:

sudo add-apt-repository ppa:git-core/ppa

sudo apt update

sudo apt install git

Tem o tutorial para a instalação no próprio site do Git

https://git-scm.com/download/linux

- sha1 é uma forma de emcriptação de arquivo, que gera uma sequência de 40 caractéres. Sempre que o arquivo sofrer modificação, será gerado uma nova sequência. Se for desfeita a modificação para alguma versão anterior, será gerado novamente a sequência respectiva àquela versão.

- Basicamente, blob é um objeto, aponta para um diretório ou arquivo. Tree é literalmente uma árvore, aponta para blobs ou outras árvores. E os comits apontam pra TUDO.

- Para configurar o git a primeira vez com o usuario
    git config --global user.email "litho.contato@gmail.com"
    git config --global user.name socioputa