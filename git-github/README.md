## Principais Comandos do Git Bash

Abaixo estão alguns dos principais comandos do Git Bash:

1. `git clone <URL>`: Clona um repositório Git para o seu sistema local.
2. `git init`: Inicializa um novo repositório Git em um diretório.
3. `git add <arquivo>`: Adiciona arquivos às mudanças a serem registradas.
4. `git commit -m "mensagem"`: Registra as mudanças adicionadas com uma mensagem de commit.
5. `git status`: Mostra o status atual das mudanças no repositório.
6. `git pull`: Puxa as alterações do repositório remoto para o repositório local.
7. `git push`: Envia as alterações do repositório local para o repositório remoto.
8. `git branch`: Lista as branches (ramificações) disponíveis no repositório.
9. `git checkout <branch>`: Muda para uma branch específica.
10. `git merge <branch>`: Realiza a fusão de uma branch com a branch atual.
11. `git log`: Mostra o histórico de commits.
12. `git remote add <nome> <URL>`: Adiciona um repositório remoto.
13. `git remote -v`: Lista os repositórios remotos configurados.
14. `git diff`: Mostra as diferenças entre as mudanças no diretório de trabalho e o último commit.
15. `git reset <arquivo>`: Remove um arquivo do staging area.
16. `git reset --hard <commit>`: Volta para um commit específico, descartando todas as alterações posteriores.
17. `git stash`: Guarda temporariamente as mudanças em andamento.
18. `git stash pop`: Recupera as mudanças que foram guardadas temporariamente com `git stash`.
19. `git config`: Configura opções do Git, como nome de usuário e endereço de email.
20. `git rm <arquivo>`: Remove um arquivo do repositório e do controle de versão.

Esses são apenas alguns dos comandos mais comuns do Git Bash. Existem muitos outros comandos e opções disponíveis para lidar com diferentes situações e fluxos de trabalho ao trabalhar com o Git. Lembre-se de consultar a documentação oficial do Git ou usar o comando `git --help` seguido do comando que você deseja aprender mais para obter informações detalhadas sobre cada comando.


## Convenção de Commits

| Tipo de Commit | Descrição                                                               |
| -------------- | ------------------------------------------------------------------------- |
| `feat`       | Adiciona uma nova funcionalidade ao projeto.                              |
| `fix`        | Corrige um bug ou problema no projeto.                                    |
| `docs`       | Altera a documentação do projeto. Ex.: README, comentários no código. |
| `style`      | Realiza mudanças na aparência, sem alterar a funcionalidade.            |
| `refactor`   | Realiza mudanças no código que não alteram a funcionalidade.           |
| `test`       | Adiciona ou modifica testes no projeto.                                   |

##### Exemplo commit

`feat: adicionado novo arquivo`
