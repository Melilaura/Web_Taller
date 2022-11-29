<template>
    <div class="error">
        <h1>404</h1>
        <h2>Not Found</h2>
        <h3>The resource requested could not be found on thes server</h3>
    </div>
</template>

<style lang="scss">
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

.error{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

}

h1{
    color:$FontColor;
    font-family: $FontText;
    font-size: 20vh;
    margin:0%;
}

h2{
    color:$FontColor;
    font-family: $FontText;
    margin:0%;
}

h3{
    color:$FontColor; 
    font-family: $FontText;
}
</style>