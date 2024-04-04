document.addEventListener("DOMContentLoaded",function(){

    // Retrieve the user's veggie choice from local storage
    const userVeggieChoice = localStorage.getItem("veggies");  
    const userProteinChoice = localStorage.getItem("proteins");
    const userGrainChoice = localStorage.getItem("grains");
    const userSmoothieChoice = localStorage.getItem("smoothie");
    const userPlateChoice = localStorage.getItem("plate"); 
    const userSnackChoice = localStorage.getItem("snack"); 
    const userTypeChoice = localStorage.getItem("type"); 
    //image list
    const materials ={
        tomato:"Assets/IMG_3825.PNG",
        lettuce:"Assets/IMG_3826.PNG",
        mushroom:"Assets/IMG_3827.PNG",
        carrot:"Assets/IMG_3849.PNG",
        egg:"Assets/IMG_3831.PNG",
        beef:"Assets/IMG_3832.PNG",
        chicken:"Assets/IMG_3833.PNG",
        pork:"Assets/IMG_3834.PNG",
        bread:"Assets/IMG_3850.PNG",
        rice:"Assets/IMG_3851.PNG",
        beans:"Assets/IMG_3852.PNG",
        potato:"Assets/IMG_3828.PNG",
        banana:"Assets/IMG_3853.PNG",
        strawberry:"Assets/IMG_3855.PNG",
        avocado:"Assets/IMG_3856.PNG",
        papaya:"Assets/IMG_3866.PNG",
    }
    const veggie ={
        tomato:"Assets/IMG_3859.PNG",
        lettuce:"Assets/IMG_3861.PNG",
        mushroom:"Assets/IMG_3860.PNG",
        carrot:"Assets/IMG_3858.PNG"
    }
    const protein ={
        egg:"Assets/IMG_3862.PNG",
        beef:"Assets/IMG_3863.PNG",
        pork:"Assets/IMG_3864.PNG",
        chicken:"Assets/IMG_3865.PNG"
    }
    const grain ={
        bread:"Assets/IMG_3881.PNG",
        rice:"Assets/IMG_3882.PNG",
        beans:"Assets/IMG_3885.PNG",
        potato:"Assets/IMG_3884.PNG"
    }
    const smoothie ={
        strawberry:"Assets/IMG_3877.PNG",
        banana:"Assets/IMG_3878.PNG",
        avocado:"Assets/IMG_3879.PNG",
        papaya:"Assets/IMG_3880.PNG"
    }
    const plate ={
        plate1:"Assets/IMG_3891.PNG",
        plate2:"Assets/IMG_3892.PNG",
        plate3:"Assets/IMG_3893.PNG",
        plate4:"Assets/IMG_3894.PNG"
    }
    const dGra ={
        bread:"Assets/IMG_3897.PNG",
        rice:"Assets/IMG_3895.PNG",
        beans:"Assets/IMG_3896.PNG",
        potato:"Assets/IMG_3898.PNG"
    }
    const dVeg ={
        tomato:"Assets/IMG_3903.PNG",
        lettuce:"Assets/IMG_3904.PNG",
        mushroom:"Assets/IMG_3905.PNG",
        carrot:"Assets/IMG_3906.PNG"
    }
    const dPro ={
        egg:"Assets/IMG_3901.PNG",
        beef:"Assets/IMG_3900.PNG",
        pork:"Assets/IMG_3902.PNG",
        chicken:"Assets/IMG_3899.PNG"
    }
    const left ={
        strawberry:"Assets/IMG_3915.PNG",
        banana:"Assets/IMG_3916.PNG",
        avocado:"Assets/IMG_3917.PNG",
        papaya:"Assets/IMG_3918.PNG"
    }
    const right ={
        chocolate:"Assets/IMG_3919.PNG",
        chips:"Assets/IMG_3922.PNG",
        cookies:"Assets/IMG_3920.PNG",
        cupcake:"Assets/IMG_3921.PNG"
    }

    // Assuming you have a div with id="imageDisplay" in your HTML
    const vegimgM = document.getElementById('vegimgM');
    const proimgM = document.getElementById('proimgM');
    const graimgM = document.getElementById('graimgM');
    const fruimgM = document.getElementById('fruimgM');
    const vegProcess = document.getElementById('vegProcess');
    const proProcess = document.getElementById('proProcess');
    const graProcess = document.getElementById('graProcess');
    const smoProcess = document.getElementById('smoProcess');
    const dish = document.getElementById('dish');
    const dGrain = document.getElementById('dGrain');
    const dVeggie = document.getElementById('dVeggie');
    const dMeat = document.getElementById('dMeat');
    const drink = document.getElementById('drink');
    const snack = document.getElementById('snack');
    document.querySelector("#type").innerHTML = localStorage.getItem("type");


    

// Check if the recipe contains the veggie and display its image
//material
    if (materials[userVeggieChoice]) {
        vegimgM.innerHTML = `<img src="${materials[userVeggieChoice]}" alt="${userVeggieChoice}" style="height:auto; width:100%;">`;
    } else {
        vegimgM.innerHTML = 'No matching ingredient found.';
    }
    if (materials[userProteinChoice]) {
        proimgM.innerHTML = `<img src="${materials[userProteinChoice]}" alt="${userProteinChoice}" style="height:auto; width:100%;">`;
    } else {
        proimgM.innerHTML = 'No matching ingredient found.';
    }
    if (materials[userGrainChoice]) {
        graimgM.innerHTML = `<img src="${materials[userGrainChoice]}" alt="${userGrainChoice}" style="height:auto; width:100%;">`;
    } else {
        graimgM.innerHTML = 'No matching ingredient found.';
    }
    if (materials[userSmoothieChoice]) {
        fruimgM.innerHTML = `<img src="${materials[userSmoothieChoice]}" alt="${userSmoothieChoice}" style="height:auto; width:100%;">`;
    } else {
        fruimgM.innerHTML = 'No matching ingredient found.';
    }
    //finaldish
    if (plate[userPlateChoice]) {
        dish.innerHTML = `<img src="${plate[userPlateChoice]}" alt="${userPlateChoice}" style="height:auto; width:120%;">`;
    } else {
        dish.innerHTML = 'No matching ingredient found.';
    }
    if (dVeg[userVeggieChoice]) {
        dVeggie.innerHTML = `<img src="${dVeg[userVeggieChoice]}" alt="${userVeggieChoice}" style="height:auto; width:120%;">`;
    } else {
        dVeggie.innerHTML = 'No matching ingredient found.';
    }
    if (dPro[userProteinChoice]) {
        dMeat.innerHTML = `<img src="${dPro[userProteinChoice]}" alt="${userProteinChoice}" style="height:auto; width:120%;">`;
    } else {
        dMeat.innerHTML = 'No matching ingredient found.';
    }
    if (dGra[userGrainChoice]) {
        dGrain.innerHTML = `<img src="${dGra[userGrainChoice]}" alt="${userGrainChoice}" style="height:auto; width:120%;">`;
    } else {
        dGrain.innerHTML = 'No matching ingredient found.';
    }

    if (left[userSmoothieChoice]) {
        drink.innerHTML = `<img src="${left[userSmoothieChoice]}" alt="${userSmoothieChoice}" style="width:auto; height:100%">`;
    } else {
        drink.innerHTML = 'No matching ingredient found.';
    }

    if (right[userSnackChoice]) {
        snack.innerHTML = `<img src="${right[userSnackChoice]}" alt="${userSnackChoice}" style="width:auto; height:100%">`;
    } else {
        snack.innerHTML = 'No matching ingredient found.';
    }
    //vegprocess
    if (veggie[userVeggieChoice]) {
        vegProcess.innerHTML = `<img src="${veggie[userVeggieChoice]}" alt="${userVeggieChoice}" style="max-width:100%; height:auto">`;
    } else {
        vegProcess.innerHTML = 'No matching ingredient found.';
    }
    //proPorcess
    if (protein[userProteinChoice]) {
        proProcess.innerHTML = `<img src="${protein[userProteinChoice]}" alt="${userProteinChoice}" style="max-width:100%; height:auto">`;
    } else {
        proProcess.innerHTML = 'No matching ingredient found.';
    }
    //graProcess
    if (grain[userGrainChoice]) {
        graProcess.innerHTML = `<img src="${grain[userGrainChoice]}" alt="${userGrainChoice}" style="max-width:100%; height:auto">`;
    } else {
        graProcess.innerHTML = 'No matching ingredient found.';
    }
    //smoProcess
    if (smoothie[userSmoothieChoice]) {
        smoProcess.innerHTML = `<img src="${smoothie[userSmoothieChoice]}" alt="${userSmoothieChoice}" style="max-width:100%; height:auto">`;
    } else {
        smoProcess.innerHTML = 'No matching ingredient found.';
    }

})

