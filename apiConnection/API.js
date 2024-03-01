const url = "http://localhost:4002/coders";


// obtener a los coders de la REST API - GET 
export const getCoders = async () => {
    try{
        const result = await fetch(url);
        const coders = await result.json();
        return coders
    }catch(error){

    }
}


/*10. INSERTAR UN NUEVO CODER EN LA REST API - METHOD HTTP - (POST) */
export const newCoder = async coder => {
    /* console.log(coder) */
    console.log(coder);

     try{
        await fetch(url, {
            method: "POST", //enviar los datos via POST
            body: JSON.stringify(coder),
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location.href = "index.html"
    }catch(error){
        console.log(error)
    }
}