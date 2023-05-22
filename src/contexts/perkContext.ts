import { createContext } from 'react';
import * as perkTypes from '../../types/perk';

export const perkContext = createContext<perkTypes.Perk[] | undefined>([
  {
    name: 'Bamboo Stand',
    description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
    numbersLeft: 101,
    minPledge: 25,
  },
  {
    name: 'Black Edition Stand',
    description: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    numbersLeft: 64,
    minPledge: 75,
  },
  {
    name: 'Mahogany Special Edition',
    description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    numbersLeft: 0,
    minPledge: 200,
  }
]);
