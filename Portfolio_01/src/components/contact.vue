<script setup>

</script>

<template>
    <section>
        <h2>Contact</h2>
        <form action="#" method="post">

                <div>
                    <label for="lastname" id="label-lastname">Nom : </label>
                    <input type="text" name="lastname" id="input-lastname">
                </div>

                <div>
                    <label for="firstname" id="label-firstname">Prénom : </label>
                    <input type="text" name="firsname" id="input-firstname">
                </div>

                <div>
                    <label for="e-mail address" id="label-e-mail">Adresse e-mail : </label>
                    <input type="text" name="e-mail address" id="input-e-mail">
                </div>

                <div>
                    <label for="object" id="label-object">Objet :</label>
                    <input type="text" name="object" id="input-object">
                </div>

                <textarea placeholder="Votre texte"></textarea>

                <input type="submit" name="submit-button" id="submit-button">
    
            </form>
    </section>    
</template>

<style scoped>
    section {
        width: 1680px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 80px 0 80px 0;
        border-bottom: solid 1px black;
    }

    h2 {
        width: 153px;
        height: 65px;
        font-family: "Besley", serif;
        font-weight: 600;
        font-size: 2.36em;
        margin: 0;
        padding-bottom: 80px;
    }

    form {
        display: flex;
        flex-direction: column;
        font-family: "Assistant", sans-serif;
        font-weight: 600;
    }

    div {
        width: 1686px;
        height: 48px;
        display: flex;
        padding-bottom: 16px;
    }

    #label-lastname {
        font-size: 2em;
        padding-right: 250px;
    }

    #input-lastname {
        width: 1348px;
        height: 42px;
        background-color: #FFBD80;
        border: solid 1px black;
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.5em;
        color: black;
        text-align: center;
    }

    #label-firstname {
        font-size: 2em;
        padding-right: 207px;
    }

    #input-firstname {
        width: 1348px;
        height: 42px;
        background-color: #FFBD80;
        border: solid 1px black;
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.5em;
        color: black;
        text-align: center;
    }

    #label-e-mail {
        font-size: 2em;
        padding-right: 116px;
    }

    #input-e-mail {
        width: 1348px;
        height: 42px;
        background-color: #FFBD80;
        border: solid 1px black;
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.5em;
        color: black;
        text-align: center;
    }

    #label-object {
        font-size: 2em;
        padding-right: 240px;
    }

    #input-object {
        width: 1348px;
        height: 42px;
        background-color: #FFBD80;
        border: solid 1px black;
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.5em;
        color: black;
        text-align: center;
    }

    textarea {
        width: 1620px;
        height: 300px;
        margin-top: 10px;
        margin-bottom: 14px;
        padding: 30px;
        background-color: #FFBD80;
        border: solid 1px black;
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.5em;
        color: black;
    }

    #submit-button {
        width: 200px;
        height: 50px;
        align-self: end;
        background-color: #FFBD80;
        border: solid 1px black;
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.2em;
    }
</style>