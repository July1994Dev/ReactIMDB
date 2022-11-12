/* Archivo que se utiliza para llamar a las variables del archivo .env y asi poder tenerlas unificadas e importarlas cuando sea necesario.*/
const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;

export { key, url };
