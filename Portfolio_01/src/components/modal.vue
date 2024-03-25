<script setup>
    const props = defineProps ({
        titre: String,
        sousTitre1: String,
        objectifs: String,
        sousTitre2: String,
        date: String,
        sousTitre3: String,
        technologies: String,
        sousTitre4: String,
        voirProjet: String,
        dateTime: String,
        lienProjet: String,

    })
    
</script>

<template>
    <div class="modal-container">
        <slot name="overlay"></slot>
            <div class="modal">
                <slot name="button"></slot>
                <h2>{{ titre }}</h2>
                <ul>
                     <li><h3>{{ sousTitre1 }}</h3>{{ objectifs }}</li>
                     <li><h3>{{ sousTitre2 }}</h3> <time :datetime="dateTime">{{ date }}</time>.</li>
                     <li><h3>{{ sousTitre3 }}</h3>{{ technologies }}</li>
                     <li><h3>{{ sousTitre4 }}</h3> <a :href="lienProjet">{{ voirProjet }}</a></li>
                </ul>

            </div>
        
    </div>
</template>

<style>
    @media screen and (min-width: 1200px) {
        .modal-container {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
        } 

        .modal {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 544px;
            height: 250px;
            position: absolute;
            top: 25%;
            left: 34%;
            background: #FFBD80;
            border-style: double;
            color: black;
            padding: 20px;
        }

        button {
            width: 35px;
            position: absolute;
            left: 550px;
            top: -1px;
            background-color: #FFBD80;
            border: solid 1px black;
        }

        h2 {
            font-family: 'Besley', 'serif';
            font-weight: 600;
            margin: 0;
        }

        ul {
            line-height: 2;
            font-family: 'Assistant', 'sans-serif';
            font-weight: 400;
            list-style-type: none;
            margin-top: 20px;
        }

        h3 {
            display: inline-block;
            font-weight: 600;
            font-size: 1em;
            margin: 0;
        }

        a {
            text-decoration: none;
            color: black;
        }

        a:hover{
            text-decoration: underline;
        }
    }

    @media screen and (min-width: 320px) {
        .modal-container {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        } 

        .modal {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 80%;
            position: absolute;
            top: 5%;
            left: 5%;
            background: #FFBD80;
            border-style: double;
            color: black;
            padding: 15px;
        }

        button {
            width: 30px;
            height: 30px;
            position: fixed;
            left: 85%;
            top: 6%;
            background-color: #4B4B4B;
            border: none;
            border-radius: 50%;
            color: #FFBD80;
            opacity: 0.5;
            cursor: pointer;
        }

        h2 {
            font-family: 'Besley', 'serif';
            font-weight: 600;
            font-size: 1.1em;
            margin: 0;
            padding-top: 6%;
            text-align: center;
        }

        ul {
            font-family: 'Assistant', 'sans-serif';
            font-weight: 400;
            list-style-type: none;
            margin-top: 8%;
        }

        h3 {
            font-weight: 600;
            font-size: 1em;
            margin: 0;
            padding: 8% 0 8% 0;
        }

        li {
            width: 85%;
        }

        a {
            text-decoration: none;
            color: black;
        }

        a:active{
            text-decoration: underline;
        }
    }
</style>