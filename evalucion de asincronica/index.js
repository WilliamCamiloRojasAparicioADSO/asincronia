const filtrar = x => x.name === "evaluciones";
//linea 1 busca o filtra los archivos que estan guardados en el repositorio //
(async () => {
//lenea 3 en lasa o permite que el archivo json se ejecuete 
    let response = await fetch ("user.json");
    let user = await response.json();
//linea 6 el await permite que el json busque o consulte el usurio de github 
    let respuestGithub = await fetch(`https://api.github.com/users/ ${user.name}/repos`);
    let usuariogithub = await respuestGithub.json();
//linea 8 y 9 da la respuesta de ala con sulta del usuario de git hub 

    usuariogithub.forEach(element => {
        if (element.name === "evalucion"){
            console.log(element);
        }
//de la linea 12 ala 15 se hace ejecuata una consulta para vuscar en el 
//github un o los repositoria que tengan un nombre especifico 
    });
})



