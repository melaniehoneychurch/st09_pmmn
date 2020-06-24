# Manuel installation projet L2N

## 1 - Installation des outils

### 1.1 - L’environnement serveur web

Pour pouvoir faire tourner un site web sur son ordinateur personnel, il faut tout d’abord installer un
serveur web, un serveur de base de données et un langage de script.
Pour ce projet, nous avons choisi avec les indications du CRI de partir sur :

- Serveur web : apache (apache2)
- Serveur de base de données : MariaDB (10.4)
- Langage Script : Php (7.3)
Ainsi, il va falloir installer tous ces outils pour faire tourner le projet. Il existe des solutions “tout en
un afin d’installer tout d’un coup, adapté à chaque système d’exploitation :
- Windows : WAMP
- Mac : MAMP
- Linux : LAMP
Il existe beaucoup de tutoriels pour savoir comment installer cet ensemble de logiciels. Il faut
cependant bien faire attention à choisir les versions indiquées ci-dessus.

### 1.2 - L’IDE

Le projet peut être développé avec différents éditeurs/IDE. Le plus simple reste PHPStorm, qui est
vraiment fait pour ce type de projets. Une licence étudiante est accessible gratuitement sur
demande.

### 1.3 - Composer

Composer est un gestionnaire de package vraiment utile et qui permet de simplifier l’importation
de packages. Il permet notamment d’éviter de partager les différents packages dans les fichiers du
projet et de les importer une fois le projet importé comme désigné ci-dessous.
Nous ne détaillerons pas comment l’installer ici car cela dépend du système d’exploitation, mais il
existe une floppée de guides sur Internet.


## 2 - Installation du projet

### 2.1 - Récupérer le projet

Avec git, il suffit de cloner le projet :
git ​clone​ [lien à cloner]

### 2.2 - Paramétrer le projet

Pour paramétrer le projet il faut tout d’abord paramétrer le .env.local (version locale et ignorée par
git du .env) en renseignant tout d’abord APP_ENV en dev si c’est pour la version développeur et
prod si c’est la version production.
APP_ENV=dev
ensuite il faut modifier l’URL de la base de données en mettant vos identifiants à la place de user et
password et le nom de la base de données à la place de databaseName.
DATABASE_URL=mysql://user:password@127.0.0.1:3306/databaseName

### 2.3 - Installer le projet

Pour installer le projet il faut donc avoir composer d’installé et faire la commande suivante :
composer install
Ensuite il faut installer le webpack Encore qui permet la gestion du javascript et de la partie css :
composer require symfony/webpack-encore-bundle
yarn install
yarn encore dev

### 2.4 - Lancement

Il suffit donc de lancer le site web. Pour cela deux manières : tout d’abord vous pouvez créer des
hôtes virtuels (virtual host) avec apache. Cela fonctionne mais peut être assez compliqué à mettre
en place mais il existe de nombreux tutoriels pour détailler la démarche à suivre. Nous allons faire
différemment : il suffit d’ouvrir un terminal (et d’avoir php d’installé même si normalement c’est déjà
le cas si vous avez suivi ce document depuis le début), de le positionner à la racine du projet et
d’effectuer cette commande :
php -S localhost:8000 -t public
Une fois le serveur de test lancé, il suffit de vous rendre dans votre navigateur et de rentrer l’url
suivant :


localhost:8000/

Et vous y êtes !

Pour accéder aux différents rapports, il suffit de se rendre dans le dossier /rapports
