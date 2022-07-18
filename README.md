                                                                      **RAINY DAYS**
                                                              
                                                              
                                                              
**A weather app that will give us a 5-day forecast. It will display specific symbols to indicate whether it's sunny, raining, snowing, etc. You can also input whichever city you'd like to get the forecast for. When you click on a specific day, it'll redirect you to a page with more weather related information for that day.**




                                                                            
                                      
                                      
                                      
                                      
**5 day forecast: Desktop view**
![Screenshot (131)](https://user-images.githubusercontent.com/25209405/179531366-42645721-1ed4-4213-8186-e47d8d620727.png)

**Tablet view**
![tablet](https://user-images.githubusercontent.com/25209405/179531400-091309b3-2b91-4f42-a5bf-3372c6ba7ddf.png)

**mobile view(day)**
![Screenshot (137)](https://user-images.githubusercontent.com/25209405/179531426-7b51d54e-275f-4930-a36a-ff34cb040776.png)

**mobile view(night)**
![Screenshot (136)](https://user-images.githubusercontent.com/25209405/179531440-e03f0edf-599d-4652-b3b8-d4f53823b3a9.png)


**component hierarchy**
![tree](https://user-images.githubusercontent.com/25209405/179531447-21002adb-c35e-47a2-94ba-d42406cd9ab8.png)



 **5 day forecast**

api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}&units=imperial
private key to make a call 


**Current day forecast**

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial


**Documentation**

https://openweathermap.org/forecast5


 **Minimum MVP features** 
     -  5 day(mon-fri) forecast that shows the current date and temperature
     - choose a city for a weather forecast
     - more detailed weather information for a particular day

**Post-MVP features**
    -  immediate weather report based off of geo-location
    - choose between fahrenheit/celsius 
