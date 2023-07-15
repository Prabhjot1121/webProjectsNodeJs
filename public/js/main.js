const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");






const getInfo = async(event)=>{
        event.preventDefault();
            let cityval = cityName.value;

            if(cityval === ""){
                city_name.innerText = `plz write name before you search`; 
                dataHide.classList.add("data_hide");
            }else{
                try{
                    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=003ac9a6fb1a5b9b4511169508064286`
                    const response = await fetch(url);
                    const data = await response.json();
                    const arrdata = [data];
 
                    city_name.innerText = `${arrdata[0].name} ,${arrdata[0].sys.country}`;
                     temp.innerText = arrdata[0].main.temp;
                    //  temp_status.innerText = arrdata[0].weather[0].main; 
                    const temp_mood = arrdata[0].weather[0].main;
                    if(temp_mood == "clear"){
                        temp_status.innerHTML=
                        "<i class='fa-thin fa-cloud-sun' style = 'color:#eccc68'></i>";
                    }else if (temp_mood == "clouds"){
                        temp_status.innerHTML=
                            "<i class='fa-solid fa-cloud' style = 'color:#eccc68'></i>"
                    }else if (temp_mood == "rain"){
                        temp_status.innerHTML=
                        "<i class='fa-solid fa-cloud-rain' style = 'color:#eccc68'></i>"
                    }else{
                        temp_status.innerHTML=
                        "<i class='fa-solid fa-cloud-sun' style = 'color:#eccc68'></i>"
                    }
                dataHide.classList.remove("data_hide");


                }
                catch{
                city_name.innerText = `plz enter correct city name`; 
                dataHide.classList.add("data_hide");
                    
                }
                }
            

    }


submitBtn.addEventListener("click" , getInfo);
