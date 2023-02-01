/* 

Esta implementação ainda precisa de back-end;
É necessaria a criação de uma ID unica de usuário, IP de acesso e Timestamp.
Para provar que ele aceitou os termos de uso do site.

Deve haver um repositorio no servidor do escritorio para guardar estes dados.

*/

let lgpdValid = false;
let lsContent = localStorage.getItem("lgpd");

const lgpdUrl =
    "https://jsonplaceholder.typicode.com/posts"; /* Esta URL deve ser do servidor próprio */

const lgpdContainer = document.getElementById("lgpd-cont");
const lgpdButton = document.getElementById("lgpd-but");

lgpdButton.addEventListener("click", () => {
    fecharLGPD();
});

if (!lsContent) {
    document.body.classList.add("body-overflow");
    lgpdContainer.classList.add("lgpd-active");
    lgpdContainer.classList.remove("lgpd-inactive");
    console.log("Banner LGPD Aberto");

    lgpdValid = true;
}

async function fecharLGPD() {
    if (lgpdValid == true) {
        lgpdContainer.classList.add("lgpd-inactive");
        lgpdContainer.classList.remove("lgpd-active");
        document.body.classList.remove("body-overflow");

        console.log("Banner LGPD Fechado");

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if (json.error != "") {
            let id =
                "123_test"; /* Este é um placeholder */ /* let id = json.id */
            localStorage.setItem("lgpd", id);
            console.log("Usuario aceitou o LGPD");
        }
    }
}
