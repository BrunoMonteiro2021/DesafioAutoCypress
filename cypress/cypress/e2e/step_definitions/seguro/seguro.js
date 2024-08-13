import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Seguro from '../../../pages/enterVehicleData';
import validaPagina from '../../../pages/validaPagina';
import InsurantPage from '../../../pages/enterInsurantData';
import ProductPage from '../../../pages/enterProdutoData';
import PricePage from '../../../pages/selectPriceOption';
import QuotePage from '../../../pages/sendQuote';

const elements = {
  make: 'Honda',
  model: 'Scooter',
  cylinder: '2000',
  engine: '150',
  date: '08/12/2024',
  seats: '1',
  seatsmotor: '1',
  fuel: 'Petrol',
  payload: '900',
  totalweight: '1000',
  price: '70000',
  licence: 'ABC234',
  mileage: '15000'
};

const elements2 = {
  firstName: 'Bruno',
  lastName: 'Monteiro',
  birthDate: '02/13/1989',
  gender: 'Male',
  address: '136',
  country: 'Brazil',
  zip: '12345',
  city: 'Recife-PE',
  occupation: 'Employee',
  website: 'http://www.Accenture.com',
};

const elements3 = {
  startDate: '08/12/2028',
  sum: '3.000.000,00',
  rating: 'Bonus 1',
  damage: 'Full Coverage',
  courtesyCar: 'Yes',
};

const elements4 = {
  email: 'brunocoutinho1301@gmail.com',
  phone: '81997561011',
  username: 'Bruno',
  password: 'Accenture@1308',
  confirmpass: 'Accenture@1308',
  comments: 'Thanks for your choice!',
};

// Define step implementations
Given('I visit the insurance page', () => {
  // Visit the page
  cy.visit('https://sampleapp.tricentis.com/101/app.php');
  
  // Verify URL after visiting
  cy.url().should('eq', 'https://sampleapp.tricentis.com/101/app.php');
});


When('I fill out the vehicle data', () => {
  Seguro.preencherCredenciaisValidas(elements);
  validaPagina.validarAcessoAPagina();
});

When('I fill out the insurant data', () => {
  InsurantPage.preencherDadoSegurador(elements2);
});

When('I fill out the product data', () => {
  ProductPage.preencherDadosProduto(elements3);
});

When('I select the price option', () => {
  PricePage.selecionaOpcaoPreco();
});

When('I submit the quote', () => {
  QuotePage.enviarQuota(elements4);
});

Then('I should see the success message', () => {
  QuotePage.verifySuccessMessage();
});
