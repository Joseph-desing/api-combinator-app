Creacion un aplicación que me permita consumir n API's combinados o por separado.

1.- Primer paso es crear la el proyecto e ionic standmodule 
Yo lo cree con el nombre
ionic start api-combinator-app blank --type=angular --capacitor
<img width="1917" height="934" alt="image" src="https://github.com/user-attachments/assets/ca395f44-51c8-40bc-a63e-fa2b3c85bea6" />
Instalamos las dependencias necesarias:
npm install firebase @angular/fire

2.-
Ahora las carpetas que vamos a utilizar mediante los siguientes comando en la cmd
ionic g page pages/login
ionic g page pages/signup
ionic g page pages/reset
ionic g page pages/home
<img width="1919" height="997" alt="image" src="https://github.com/user-attachments/assets/9faa9efa-a080-4a64-a7ee-48e08d17afa1" />
<img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/3c12dbad-8964-45a8-a70a-a9b782b46420" />
<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/f6235bec-9c37-42eb-8a6e-e66cfd0249ac" />
Tambien generamos la carpeta services es muy importante
<img width="1919" height="1023" alt="image" src="https://github.com/user-attachments/assets/c732a51f-b204-42d0-9440-2b7725201c28" />




ionic g service services/auth
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/63c64e05-d41f-4091-90b2-3276ff1ab5c5" />

3.- Creamos las carpetas donde va a estar el menu de opciones de APIs y cuantas APIs se van a desplegar.
ionic generate page pages/apis/menu --standalone
ionic generate page pages/apis/api-view --standalone
<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/1054730b-19b3-4c06-8427-d8aed567c9b6" />
4.- Aplicamos las rutas en el app.routs.ts
<img width="1918" height="1032" alt="image" src="https://github.com/user-attachments/assets/1205400b-d0a0-48a1-b5ab-ed35b8272216" />
Aqui ya estan habilitados todas las pesrañas con sus respectivos botones.
Tenemos el diseño base para verificar lsa credenciales
<img width="1919" height="1010" alt="image" src="https://github.com/user-attachments/assets/3a30f699-8fa3-4c7a-ac41-80cea0a55572" />
<img width="1919" height="1054" alt="image" src="https://github.com/user-attachments/assets/a302f21b-78ec-44b8-918c-aa24b6c86b48" />
<img width="1916" height="956" alt="image" src="https://github.com/user-attachments/assets/4304e126-eea3-4fbd-af39-a6471d8a7bea" />

Ahora creamos el proyecto en firebase y desplegamos app Web para almanecar los usuarios y sus contraseñas
Nos debe quedar asi
<img width="1919" height="935" alt="image" src="https://github.com/user-attachments/assets/a3488f9f-2437-46fd-af4e-a06083ac55d9" />
Ahora lo mas importrante
Verificamos el SDK para poder conectar nuestro firebase con nuestra aplicacion.
<img width="1893" height="883" alt="image" src="https://github.com/user-attachments/assets/7b1ef048-379b-4872-bd14-324c78a52b12" />
Ahora esas credenciales pones en el environments.ts
<img width="1908" height="1025" alt="image" src="https://github.com/user-attachments/assets/ebcac1d0-ba20-4d14-9068-90a6edf9cf7b" />
Esto nos permitira conectar con firebase para que las credenciales de los usuarios se puedan guardar y puedan registrarse para interactuar con la aplicacion.

Una ves registrados como nuevos usuarios nos reflejara algo asi

<img width="1918" height="868" alt="image" src="https://github.com/user-attachments/assets/5a01fb61-1ffe-4fde-8265-fc720f0472f1" />

Signifca que se guardaron exitosamente.
Una vez registrados podemos ingresar al home.
<img width="1919" height="708" alt="image" src="https://github.com/user-attachments/assets/0d80eb82-7a37-4fae-93c5-0a7d878f866e" />
Cuando generamos la recuperacion de la clave ponemos nuestro gmail nos llegara un mensaje asi
<img width="1919" height="892" alt="image" src="https://github.com/user-attachments/assets/ea6fbace-6e81-4bf2-a629-db9daf5417da" />
Aqui nos permitira poner nuestra nueva contraseña
<img width="1919" height="861" alt="image" src="https://github.com/user-attachments/assets/140a460c-60c9-46fd-84bd-c8e293a8ec46" />
Y todo eso se lo realiza en el reset.ts
<img width="1919" height="1003" alt="image" src="https://github.com/user-attachments/assets/6b62984a-09b8-4b0c-adee-abf0775dfe13" />

Vemos el el menu de las APIs
<img width="1914" height="913" alt="image" src="https://github.com/user-attachments/assets/78e11add-1a99-4a17-98bf-60472a70a705" />
<img width="1917" height="955" alt="image" src="https://github.com/user-attachments/assets/3dd0d871-1181-44f9-b20f-e6693ecc9679" />
<img width="1916" height="944" alt="image" src="https://github.com/user-attachments/assets/cb6938b9-62de-43c1-853e-ae45015a1137" />
<img width="1911" height="959" alt="image" src="https://github.com/user-attachments/assets/affba9be-efb4-4ee2-9eee-397f44434603" />
<img width="1919" height="819" alt="image" src="https://github.com/user-attachments/assets/1aea57d9-c46e-490f-be1f-349d3e9511a1" />

Ya interactuamos con la aplicacion.

Ahora Desplegamos el deploy hosting
<img width="1918" height="1046" alt="image" src="https://github.com/user-attachments/assets/162fe28d-6b7e-45a8-9c1e-541c32ade5ae" />
<img width="1914" height="994" alt="image" src="https://github.com/user-attachments/assets/12f9bd9d-6c7a-4ed2-ade5-1af79427b978" />
<img width="1416" height="841" alt="image" src="https://github.com/user-attachments/assets/a2c05c1e-6ed8-4fd9-ae96-b45fccf727b8" />

Y por ultimo generemos el apk
<img width="1692" height="1005" alt="image" src="https://github.com/user-attachments/assets/e5564825-d0ff-43e0-b4fb-82dd4d7e888b" />
<img width="1910" height="976" alt="image" src="https://github.com/user-attachments/assets/532bc99e-f1b0-4186-adcf-135b5654e460" />
<img width="1858" height="983" alt="image" src="https://github.com/user-attachments/assets/0d396c2d-f5b5-429e-89d2-01527827b86e" />
<img width="1919" height="999" alt="image" src="https://github.com/user-attachments/assets/1634e00b-6ad0-47de-aaaf-74b19ed8f6d9" />
<img width="1919" height="882" alt="image" src="https://github.com/user-attachments/assets/24c22378-125d-4e7d-b19c-cc63ed242954" />

Realizamos un video explicando cada detalle del deber.
https://youtu.be/9bE_Qrm62fk
<img width="1919" height="1024" alt="image" src="https://github.com/user-attachments/assets/ce170b1c-8785-43f9-946b-ede15d8690b9" />

Gracias!!!











